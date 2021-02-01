import { State, Automata, GroupEndMarkerState, MatchResult } from "./nfa/nfa";
import { walker as nfaWalker } from "./nfa/walker";
import { ConcatenationNode, AssertionNode, NodeType } from "./parser/node";
import { Char } from "./char";
import { Parser } from "./parser/parser";
import { first, last } from "./util";
import { walker as astWalker, expandRepetitions } from "./parser/walker";

function recursiveBacktrackingSearch(
  state: State,
  input: string,
  visited: State[] = [],
  position: i32 = 0
): string | null {
  // prevent endless loops when following epsilon transitions
  if (visited.includes(state)) {
    return null;
  }
  visited.push(state);

  const matches = state.matches(input, position);
  if (matches == MatchResult.Match) {
    // a match occurred
    if (position == input.length) {
      // we've reached the end of the string
      return null;
    }
    visited = [];
    position++;
  } else if (matches == MatchResult.Fail) {
    return null;
  }

  const transitions = state.transitions;
  if (transitions.length == 0) {
    // we've reached the end, so retur the matched string
    return input.substring(0, position);
  }

  for (let i = 0, len = transitions.length; i < len; i++) {
    const match = recursiveBacktrackingSearch(
      transitions[i],
      input,
      visited,
      position
    );
    if (match != null) {
      // when unwinding the stack after a successful match, flag the captured values
      if (state instanceof GroupEndMarkerState) {
        (state as GroupEndMarkerState).flagged = true;
      }
      return match;
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
  global: bool = false;
  ignoreCase: bool = false;

  private nfa: Automata;
  private endOfInput: bool = false;
  private startOfInput: bool = false;
  private groupMarkers: GroupEndMarkerState[];

  constructor(private regex: string, public flags: string | null = null) {
    const ast = Parser.toAST(regex);

    if (flags) {
      this.global = flags.includes("g");
      this.ignoreCase = flags.includes("i");
    }

    // look for start / end assertions
    const body = ast.body;
    if (body != null && body.type == NodeType.Concatenation) {
      const expressions = (ast.body as ConcatenationNode).expressions;
      this.startOfInput = AssertionNode.is(first(expressions), Char.Caret);
      this.endOfInput = AssertionNode.is(last(expressions), Char.Dollar);
    }

    astWalker(ast, expandRepetitions);

    this.nfa = Automata.toNFA(ast, this.ignoreCase);

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
      const matchStr = recursiveBacktrackingSearch(this.nfa.start, "");
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
        str.substr(matchIndex)
      );
      // we have found a match
      if (matchStr != null) {
        const match = new Match(
          [matchStr!].concat(
            groupMarkers.map<string>((m) => (m.flagged ? m.capture : ""))
          ),
          matchIndex,
          str
        );
        // return this match (checking end of input condition)
        const matchEndIndex = match.index + match.matches[0].length;
        if (!this.endOfInput || (this.endOfInput && matchEndIndex == len)) {
          if (this.global) {
            this.lastIndex = matchEndIndex;
          }
          return match;
        }
      }
    }
    this.lastIndex = 0;
    return null;
  }

  toString(): string {
    return this.regex;
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
