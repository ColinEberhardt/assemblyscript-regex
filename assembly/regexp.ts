import { State, Automata, toNFAFromAST as buildNFA } from "./nfa";
import { Parser, ConcatenationNode, AssertionNode } from "./parser";
import { first, last } from "./util";
import { walk } from "./walker";
import { log } from "./env";

let st: State = new State();

// follows epsilon transitions, adding the states that are reached
function followEpsilonTransitions(
  state: State,
  nextStates: Array<State>,
  visited: Array<State> = []
): void {
  if (state.epsilonTransitions.length > 0) {
    for (let i = 0; i < state.epsilonTransitions.length; i++) {
      st = state.epsilonTransitions[i];
      if (visited.findIndex(vs => vs == st) == -1) {
        visited.push(st);
        followEpsilonTransitions(st, nextStates, visited);
      }
    }
  } else {
    nextStates.push(state);
  }
}

function recursiveBacktrackingSearch(
  state: State,
  visited: State[],
  input: string,
  position: i32
): Match | null {
  // prevent endless loops when following epsilon transitions
  // if (visited.includes(state)) {
  //   return null;
  // }
  // visited.push(state);

  if (state.isEnd) {
    return new Match(input.substring(0, position), position, input);
  }

  // check whether this state transition matches
  const nextState =
    position < input.length ? state.matches(input.charAt(position)) : null;
  if (nextState) {
    return recursiveBacktrackingSearch(nextState, [], input, position + 1);
  } else {
    for (let i = 0; i < state.epsilonTransitions.length; i++) {
      const match = recursiveBacktrackingSearch(
        state.epsilonTransitions[i],
        visited,
        input,
        position
      );
      if (match != null) {
        return match;
      }
    }
  }
  return null;
}

function recursiveBacktrack(nfa: Automata, word: string): Match | null {
  return recursiveBacktrackingSearch(nfa.start, new Array<State>(), word, 0);
}

export class Match {
  value: string;
  index: i32;
  input: string;
  constructor(value: string, index: i32, input: string) {
    this.value = value;
    this.index = index;
    this.input = input;
  }
}

export class RegExp {
  nfa: Automata;
  endOfInput: bool;
  startOfInput: bool;

  constructor(regex: string) {
    const ast = Parser.toAST(regex);

    if (ConcatenationNode.is(ast.body)) {
      const c = ast.body as ConcatenationNode;
      this.startOfInput = AssertionNode.is(first(c.expressions), "^");
      this.endOfInput = AssertionNode.is(last(c.expressions), "$");
    }

    walk(ast, nodeVisitor => {
      if (AssertionNode.is(nodeVisitor.node)) {
        nodeVisitor.delete();
      }
    });

    this.nfa = buildNFA(ast);
  }

  exec(str: string): Match | null {
    if (str == "") {
      return recursiveBacktrack(this.nfa, "");
    }
    // search for a match at each index within the string
    for (
      let matchIndex = 0;
      matchIndex < (this.startOfInput ? 1 : str.length);
      matchIndex++
    ) {
      // search for a match in this substring
      const match = recursiveBacktrack(this.nfa, str.substr(matchIndex));
      if (match != null) {
        // update match index to the correct location in the source string
        match.index = matchIndex;
        match.input = str;
        if (this.endOfInput) {
          // check that this match reaches the end of the string
          if (match.index + match.value.length == str.length) {
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
