import { State, Automata, toNFAFromAST } from "./nfa";
import { Parser, ConcatenationNode, AssertionNode } from "./parser";
import { first, last } from "./util";
import { walk } from "./walker";

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

function search(nfa: Automata, word: string): Match | null {
  let currentStates = new Array<State>();
  followEpsilonTransitions(nfa.start, currentStates);

  for (let i = 0; i < word.length; i++) {
    const symbol = word.charAt(i);
    const nextStates = new Array<State>();

    for (let j = 0; j < currentStates.length; j++) {
      const state = currentStates[j];
      const match = state.matches(symbol);
      if (match != null) {
        const nextState = match;
        followEpsilonTransitions(nextState, nextStates);
      }
    }

    currentStates = nextStates;

    // check if we have reached an end state
    const endFound =
      currentStates.filter(s => s.isEnd).length > 0 ? true : false;
    if (endFound) {
      return new Match(word.substr(0, i + 1), i, word);
    }
  }

  return null;
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

export class Regex {
  nfa: Automata;
  endOfInput: bool;
  startOfInput: bool;

  constructor(regex: string) {
    const ast = new Parser(regex).toAST();

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


    this.nfa = toNFAFromAST(ast);
  }

  exec(str: string): Match | null {
    for (let i = 0; i < (this.startOfInput ? 1 : str.length); i++) {
      let match = search(this.nfa, str.substr(i));
      if (match != null) {
        // TODO: yuck!
        match.index = i;
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