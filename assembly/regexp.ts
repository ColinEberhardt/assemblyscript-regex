import {
  State,
  Automata,
  toNFAFromAST,
  walker,
  GroupEndMarkerState
} from "./nfa";
import {
  ConcatenationNode,
  AssertionNode,
  RangeRepetitionNode,
  Node
} from "./node";
import { Parser } from "./parser";
import { first, last, toArray } from "./util";
import { walk as astWalk, expandRepetitions } from "./walker";

function recursiveBacktrackingSearch(
  state: State,
  input: string,
  visited: State[] = [],
  position: i32 = 0
): string | null {
  // prevent endless loops when following epsilon transitions
  // if (visited.includes(state)) {
  //   return null;
  // }
  // visited.push(state);

  state.snapshot(input, position);

  if (state.isEnd) {
    return input.substring(0, position);
  }

  // check whether this state transition matches
  const nextState =
    position < input.length ? state.matches(input.charAt(position)) : null;
  if (nextState) {
    return recursiveBacktrackingSearch(nextState, input, [], position + 1);
  } else {
    for (let i = 0; i < state.epsilonTransitions.length; i++) {
      const match = recursiveBacktrackingSearch(
        state.epsilonTransitions[i],
        input,
        visited,
        position
      );
      if (match != null) {
        return match;
      }
    }
  }
  return null;
}

export class Match {
  matches: string[];
  index: i32;
  input: string;
  constructor(matches: string[], index: i32, input: string) {
    this.matches = matches;
    this.index = index;
    this.input = input;
  }

  static fromMatch(match: string, index: i32, input: string): Match {
    const matches = new Array<string>();
    matches.push(match);
    return new Match(matches, index, input);
  }
}

let gm: GroupEndMarkerState[] = new Array<GroupEndMarkerState>();

export class RegExp {
  nfa: Automata;
  endOfInput: bool;
  startOfInput: bool;
  groupMarkers: GroupEndMarkerState[];

  constructor(regex: string) {
    const ast = Parser.toAST(regex);

    // look for start / end assertions
    const body = ast.body;
    if (body != null && ConcatenationNode.is(body)) {
      const c = ast.body as ConcatenationNode;
      this.startOfInput = AssertionNode.is(first(c.expressions), "^");
      this.endOfInput = AssertionNode.is(last(c.expressions), "$");
    }

    astWalk(ast, expandRepetitions);

    this.nfa = toNFAFromAST(ast);

    // find all the group marker states
    gm = new Array<GroupEndMarkerState>();
    walker(this.nfa.start, (state: State) => {
      if (state instanceof GroupEndMarkerState) {
        gm.push(state as GroupEndMarkerState);
      }
    });
    this.groupMarkers = gm;
  }

  exec(str: string): Match | null {
    // TODO - remove all previous group marker results?
    if (str == "") {
      const matchStr = recursiveBacktrackingSearch(this.nfa.start, "");
      return matchStr != null
        ? new Match(toArray(matchStr as string), 0, str)
        : null;
    }
    // search for a match at each index within the string
    for (
      let matchIndex = 0;
      matchIndex < (this.startOfInput ? 1 : str.length);
      matchIndex++
    ) {
      // search for a match in this substring
      const matchStr = recursiveBacktrackingSearch(
        this.nfa.start,
        str.substr(matchIndex)
      );
      if (matchStr != null) {
        const match = new Match(
          toArray(matchStr as string).concat(
            this.groupMarkers.map<string>(m => m.capture)
          ),
          matchIndex,
          str
        );
        if (this.endOfInput) {
          // check that this match reaches the end of the string
          if (match.index + match.matches[0].length == str.length) {
            return match;
          }
        } else {
          return match;
        }
      }
    }
    return null;
  }
}

// TODO: do we need this factory function, or can we invoke
// the ctr via the loader?
export function createRegExp(regex: string): RegExp {
  return new RegExp(regex);
}
