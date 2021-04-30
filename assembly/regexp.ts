import { State, Automata, GroupStartMarkerState, MatchResult } from "./nfa/nfa";
import { walker as nfaWalker } from "./nfa/walker";
import { ConcatenationNode, AssertionNode, NodeType } from "./parser/node";
import { Char } from "./char";
import { Parser } from "./parser/parser";
import { first, last } from "./util";
import { walker as astWalker, expandRepetitions } from "./parser/walker";

function recursiveBacktrackingSearch(
  state: State,
  input: string,
  visited: u32[] = [],
  position: i32 = 0
): string | null {
  // prevent endless loops when following epsilon transitions
  for (let i = 0, len = visited.length; i < len; i++) {
    if (visited[i] == state.id) {
      return null;
    }
  }
  visited.push(state.id);

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
      if (state instanceof GroupStartMarkerState) {
        (state as GroupStartMarkerState).flagged = true;
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

export class Flags {
  global: bool = false;
  ignoreCase: bool = false;
  dotAll: bool = false;
  multiline: bool = false;

  constructor(flagString: string | null) {
    if (flagString) {
      this.global = flagString.includes("g");
      this.ignoreCase = flagString.includes("i");
      this.dotAll = flagString.includes("s");
      this.multiline = flagString.includes("m");
    }
  }
}

// capture groups are implemented as GroupStart / GroupEnd states that record (capture)
// the value of the current state of the string being matched.
// Repeated capture groups, via range repetitions (e.g. {2,3}) share the same 'id'. The
// returned regex should only return the value of the final repetition.
function lastCapturesForGroup(groupMarkers: GroupStartMarkerState[]): string[] {
  if (!groupMarkers.length) {
    return [];
  }
  const values = [first(groupMarkers).capture];
  let currrentId = first(groupMarkers).groupId;
  for (let i = 0; i < groupMarkers.length; i++) {
    const gm = groupMarkers[i];
    if (gm.groupId != currrentId) {
      currrentId = gm.groupId;
      values.push(gm.capture);
    } else {
      if (gm.flagged) {
        values[values.length - 1] = gm.capture;
      }
    }
  }
  return values;
}

export class RegExp {
  @lazy static gm: GroupStartMarkerState[] = new Array<GroupStartMarkerState>();
  lastIndex: i32 = 0;
  private flags: Flags;
  private nfa: Automata;
  private endOfInput: bool = false;
  private startOfInput: bool = false;
  private groupMarkers: GroupStartMarkerState[];

  constructor(private regex: string, public flagsString: string | null = null) {
    const ast = Parser.toAST(regex);
    const flags = new Flags(flagsString);

    // look for start / end assertions
    const body = ast.body;
    if (body != null && body.type == NodeType.Concatenation) {
      const expressions = (ast.body as ConcatenationNode).expressions;
      this.startOfInput = AssertionNode.is(first(expressions), Char.Caret);
      this.endOfInput = AssertionNode.is(last(expressions), Char.Dollar);
    }

    astWalker(ast, expandRepetitions);

    this.nfa = Automata.toNFA(ast, flags);

    // find all the group marker states
    RegExp.gm = new Array<GroupStartMarkerState>();
    nfaWalker(this.nfa.start, (state) => {
      if (state instanceof GroupStartMarkerState) {
        const startMarker = state as GroupStartMarkerState;
        if (startMarker.capturing) {
          RegExp.gm.push(state as GroupStartMarkerState);
        }
      }
    });
    this.groupMarkers = RegExp.gm;

    this.flags = flags;
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
      matchIndex < (this.startOfInput && !this.multiline ? 1 : len);
      matchIndex++
    ) {
      // search for a match in this substring
      const matchStr = recursiveBacktrackingSearch(
        this.nfa.start,
        str.substr(matchIndex)
      );

      // we have found a match
      if (matchStr != null) {
        // remove any non-flagged captures
        groupMarkers.forEach((gm) => {
          gm.capture = gm.flagged ? gm.capture : "";
        });

        const match = new Match(
          [matchStr!].concat(lastCapturesForGroup(groupMarkers)),
          matchIndex,
          str
        );

        // return this match (checking end of input condition)
        const matchEndIndex = match.index + match.matches[0].length;

        // has the start of input criteria been met?
        if (this.startOfInput) {
          if (this.flags.multiline && matchIndex != 0) {
            if (str.charCodeAt(matchIndex - 1) != Char.LineFeed) continue;
          } else if (matchIndex != 0) {
            continue;
          }
        }

        // has the enf of input criteria been met?
        if (this.endOfInput) {
          if (this.flags.multiline && matchEndIndex != len) {
            if (str.charCodeAt(matchEndIndex) != Char.LineFeed) continue;
          } else if (matchEndIndex != len) {
            continue;
          }
        }

        if (this.global) {
          this.lastIndex = matchEndIndex;
        }
        return match;
      }
    }

    this.lastIndex = 0;
    return null;
  }

  test(str: string): bool {
    return this.exec(str) != null;
  }

  toString(): string {
    return this.regex;
  }

  get global(): bool {
    return this.flags.global;
  }

  get ignoreCase(): bool {
    return this.flags.ignoreCase;
  }

  get dotAll(): bool {
    return this.flags.dotAll;
  }

  get multiline(): bool {
    return this.flags.multiline;
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
