
function peek(stack: string[]): string {
  return stack[stack.length - 1];
}

const operatorPrecedence = new Map<string, i8>();
operatorPrecedence.set("|", 0);
operatorPrecedence.set(".", 1);
operatorPrecedence.set("?", 2);
operatorPrecedence.set("*", 2);
operatorPrecedence.set("+", 2);

export function toPostfix(exp: string): string {
  let output = "";
  const operatorStack = new Array<string>();

  for (let i = 0; i < exp.length; i++) {
    const token = exp.charAt(i);
    if (
      token == "." ||
      token == "|" ||
      token == "*" ||
      token == "?" ||
      token == "+"
    ) {
      while (
        operatorStack.length &&
        peek(operatorStack) != "(" &&
        operatorPrecedence.get(peek(operatorStack)) >=
          operatorPrecedence.get(token)
      ) {
        output += operatorStack.pop();
      }

      operatorStack.push(token);
    } else if (token == "(" || token == ")") {
      if (token == "(") {
        operatorStack.push(token);
      } else {
        while (peek(operatorStack) != "(") {
          output += operatorStack.pop();
        }
        operatorStack.pop();
      }
    } else {
      output += token;
    }
  }

  while (operatorStack.length) {
    output += operatorStack.pop();
  }

  return output;
}

class State {
  isEnd: bool;
  transition: Map<string, State>;
  epsilonTransitions: Array<State>;
  constructor(isEnd: bool) {
    this.isEnd = isEnd;
    this.transition = new Map<string, State>();
    this.epsilonTransitions = new Array<State>();
  }
}

class Automata {
  start: State;
  end: State; // accepting state
  constructor(start: State, end: State) {
    this.start = start;
    this.end = end;
  }
}

function createState(isEnd: bool): State {
  return new State(isEnd);
}

function addEpsilonTransition(from: State, to: State): void {
  from.epsilonTransitions.push(to);
}

function addTransition(from: State, to: State, symbol: string): void {
  from.transition.set(symbol, to);
}

function fromEpsilon(): Automata {
  const start = createState(false);
  const end = createState(true);
  addEpsilonTransition(start, end);
  return new Automata(start, end);
}
function fromSymbol(symbol: string): Automata {
  const start = createState(false);
  const end = createState(true);
  addTransition(start, end, symbol);
  return new Automata(start, end);
}

function concat(first: Automata, second: Automata): Automata {
  addEpsilonTransition(first.end, second.start);
  first.end.isEnd = false;
  return new Automata(first.start, second.end);
}

function union(first: Automata, second: Automata): Automata {
  const start = createState(false);
  addEpsilonTransition(start, first.start);
  addEpsilonTransition(start, second.start);
  const end = createState(true);
  addEpsilonTransition(first.end, end);
  first.end.isEnd = false;
  addEpsilonTransition(second.end, end);
  second.end.isEnd = false;
  return new Automata(first.start, second.end);
}

function closure(nfa: Automata): Automata {
  const start = createState(false);
  const end = createState(true);
  addEpsilonTransition(start, end);
  addEpsilonTransition(start, nfa.start);
  addEpsilonTransition(nfa.end, end);
  addEpsilonTransition(nfa.end, nfa.start);
  nfa.end.isEnd = false;
  return new Automata(start, end);
}

function zeroOrOne(nfa: Automata): Automata {
  const start = createState(false);
  const end = createState(true);
  addEpsilonTransition(start, end);
  addEpsilonTransition(start, nfa.start);
  addEpsilonTransition(nfa.end, end);
  nfa.end.isEnd = false;
  return new Automata(start, end);
}

function oneOrMore(nfa: Automata): Automata {
  const start = createState(false);
  const end = createState(true);
  addEpsilonTransition(start, nfa.start);
  addEpsilonTransition(nfa.end, end);
  addEpsilonTransition(nfa.end, nfa.start);
  nfa.end.isEnd = false;
  return new Automata(start, end);
}

export function toNFA(postfixExp: string): Automata {
  if (postfixExp === "") {
    return fromEpsilon();
  }

  const stack = new Array<Automata>();

  for (let i = 0; i < postfixExp.length; i++) {
    const token = postfixExp.charAt(i);
    if (token == "*") {
      stack.push(closure(stack.pop()));
    } else if (token == "?") {
      stack.push(zeroOrOne(stack.pop()));
    } else if (token === "+") {
      stack.push(oneOrMore(stack.pop()));
    } else if (token == "|") {
      const right = stack.pop();
      const left = stack.pop();
      stack.push(union(left, right));
    } else if (token == ".") {
      const right = stack.pop();
      const left = stack.pop();
      stack.push(concat(left, right));
    } else {
      stack.push(fromSymbol(token));
    }
  }

  return stack.pop();
}

// function recursiveBacktrackingSearch(
//   state: State,
//   visited: State[],
//   input: string,
//   position: i32
// ): bool {
//   if (visited.includes(state)) {
//     return false;
//   }

//   visited.push(state);

//   if (position == input.length) {
//     if (state.isEnd) {
//       return true;
//     }

//     if (
//       state.epsilonTransitions.some(s =>
//         recursiveBacktrackingSearch(s, visited, input, position)
//       )
//     ) {
//       return true;
//     }
//   } else {
//     const nextState = state.transition.get(input.charAt(position));

//     if (nextState) {
//       if (recursiveBacktrackingSearch(nextState, [], input, position + 1)) {
//         return true;
//       }
//     } else {
//       if (
//         state.epsilonTransitions.some(s =>
//           recursiveBacktrackingSearch(s, visited, input, position)
//         )
//       ) {
//         return true;
//       }
//     }

//     return false;
//   }

//   return false;
// }

let st: State = createState(false);

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

function search(nfa: Automata, word: string): bool {
  let currentStates = new Array<State>();
  followEpsilonTransitions(nfa.start, currentStates);

  for (let i = 0; i < word.length; i++) {
    const symbol = word.charAt(i);
    const nextStates = new Array<State>();

    for (let j = 0; j < currentStates.length; j++) {
      const state = currentStates[j];
      if (state.transition.has(symbol)) {
        const nextState = state.transition.get(symbol);
        followEpsilonTransitions(nextState, nextStates);
      }
    }

    currentStates = nextStates;
  }

  return currentStates.filter(s => s.isEnd).length > 0 ? true : false;
}

export function recognize(nfa: Automata, word: string): bool {
  // return recursiveBacktrackingSearch(nfa.start, new Array<State>(), word, 0);
  return search(nfa, word);
}
