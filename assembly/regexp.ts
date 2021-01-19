import { State, Automata, toNFAFromAST, walker, GroupEndMarkerState } from "./nfa";
import { Parser, ConcatenationNode, AssertionNode } from "./parser";
import { first, last } from "./util";
import { walk } from "./walker";
import { log } from "./env";

function recursiveBacktrackingSearch(
  state: State,
  input: string,
  visited: State[] = [],
  position: i32 = 0
): Match | null {
  // prevent endless loops when following epsilon transitions
  // if (visited.includes(state)) {
  //   return null;
  // }
  // visited.push(state);

  state.snapshot(input, position);

  if (state.isEnd) {
    return Match.fromMatch(input.substring(0, position), position, input);
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

    if (ConcatenationNode.is(ast.body)) {
      const c = ast.body as ConcatenationNode;
      this.startOfInput = AssertionNode.is(first(c.expressions), "^");
      this.endOfInput = AssertionNode.is(last(c.expressions), "$");
    }

    // remove assertion nodes
    walk(ast, nodeVisitor => {
      if (AssertionNode.is(nodeVisitor.node)) {
        nodeVisitor.delete();
      }
    });

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
      return recursiveBacktrackingSearch(this.nfa.start, "");
    }
    // search for a match at each index within the string
    for (
      let matchIndex = 0;
      matchIndex < (this.startOfInput ? 1 : str.length);
      matchIndex++
    ) {
      // search for a match in this substring
      const match = recursiveBacktrackingSearch(this.nfa.start, str.substr(matchIndex));
      if (match != null) {
        // update match index to the correct location in the source string
        match.index = matchIndex;
        match.input = str;
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

// TODO: do we need this factory function, or can we invoke the ctr via the loader?
export function createRegExp(regex: string): RegExp {
  return new RegExp(regex);
}
