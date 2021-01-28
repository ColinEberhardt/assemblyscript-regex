import {
  State,
  Automata,
  toNFAFromAST,
  GroupEndMarkerState,
  MatcherState,
} from "./nfa/nfa";
import { walker as nfaWalker } from "./nfa/walker";
import { ConcatenationNode, AssertionNode, NodeType } from "./parser/node";
import { Char } from "./char";
import { Parser } from "./parser/parser";
import { first, last } from "./util";
import { walker as astWalker, expandRepetitions } from "./parser/walker";
import { CharacterMatcher, CharacterSetMatcher, Matcher } from "./nfa/matcher";

function recursiveBacktrackingSearch(
  state: State,
  input: string,
  visited: State[],
  position: i32 = 0
): string | null {
  // prevent endless loops when following epsilon transitions
  if (visited.includes(state)) {
    return null;
  }
  visited.push(state);

  state.snapshot(input, position);

  if (state.isEnd) {
    return input.substring(0, position);
  }

  // check whether this state transition matches
  const nextState =
    position < input.length ? state.matches(input.charCodeAt(position)) : null;

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
  constructor(
    public matches: string[],
    public index: i32,
    public input: string
  ) {}

  static fromMatch(match: string, index: i32, input: string): Match {
    return new Match([match], index, input);
  }
}

let gm = new Array<GroupEndMarkerState>();

export class RegExp {
  lastIndex: i32 = 0;

  private nfa: Automata;
  private endOfInput: bool;
  private startOfInput: bool;
  private groupMarkers: GroupEndMarkerState[];

  constructor(regex: string, public flags: string = "") {
    this.startOfInput = false;
    this.endOfInput = false;

    const ast = Parser.toAST(regex);

    // look for start / end assertions
    const body = ast.body;
    if (body != null && body.type == NodeType.Concatenation) {
      const expressions = (ast.body as ConcatenationNode).expressions;
      this.startOfInput = AssertionNode.is(first(expressions), Char.Caret);
      this.endOfInput = AssertionNode.is(last(expressions), Char.Dollar);
    }

    astWalker(ast, expandRepetitions);

    this.nfa = toNFAFromAST(ast);

    // find all the group marker states
    gm = new Array<GroupEndMarkerState>();
    nfaWalker(this.nfa.start, (state) => {
      if (state instanceof GroupEndMarkerState) {
        gm.push(state as GroupEndMarkerState);
      }
    });
    this.groupMarkers = gm;
  }

  exec(str: string): Match | null {
    let groupMarkers = this.groupMarkers;
    // remove all previous group marker results
    for (let i = 0, len = groupMarkers.length; i < len; i++) {
      groupMarkers[i].capture = "";
    }

    let len = str.length;
    if (!len) {
      const matchStr = recursiveBacktrackingSearch(this.nfa.start, "", []);
      return matchStr != null ? new Match([matchStr!], 0, str) : null;
    }

    // search for a match at each index within the string
    for (
      let matchIndex = this.lastIndex;
      matchIndex < (this.startOfInput ? 1 : len);
      matchIndex++
    ) {
      // search for a match in this substring
      const matchStr = recursiveBacktrackingSearch(
        this.nfa.start,
        str.substr(matchIndex),
        []
      );
      // we have found a match
      if (matchStr != null) {
        const match = new Match(
          [matchStr!].concat(groupMarkers.map<string>((m) => m.capture)),
          matchIndex,
          str
        );
        // return this match (checking end of input condition)
        const matchEndIndex = match.index + match.matches[0].length;
        if (!this.endOfInput || (this.endOfInput && matchEndIndex == len)) {
          if (this.flags == "g") {
            this.lastIndex = matchEndIndex;
          }
          return match;
        }
      }
    }
    this.lastIndex = 0;
    return null;
  }
}

// TODO: do we need this factory function, or can we invoke
// the ctr via the loader?
export function createRegExp(regex: string, flags: string): RegExp {
  return new RegExp(regex, flags);
}

// the executeRegExp exported function is used for benchmarking, giving a simple API
// for executing a regex a given number of times
export function executeRegExp(
  regexStr: string,
  value: string,
  iterations: i32
): void {
  const regex = new RegExp(regexStr, "g");
  if (iterations < 0) {
    while (regex.exec(value) != null);
  } else {
    for (let i = 0; i < iterations; i++) {
      regex.exec(value);
    }
  }
}
