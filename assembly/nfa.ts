import { log } from "./env";
import { peek } from "./util";
import {
  isDigit,
  isUnderscore,
  isUppercaseAlpha,
  isLowercaseAlpha,
  isWhitespace
} from "./characters";

const operatorPrecedence = new Map<string, i8>();
operatorPrecedence.set("|", 0);
operatorPrecedence.set(":", 1);
operatorPrecedence.set("?", 2);
operatorPrecedence.set("*", 2);
operatorPrecedence.set("+", 2);

const characterClasses: string[] = [
  "d",
  "D",
  "w",
  "W",
  "s",
  "S",
  "t",
  "r",
  "n",
  "v",
  "f"
];

function insertExplicitConcatOperator(exp: string): string[] {
  let output = new Array<string>();

  for (let i = 0; i < exp.length; i++) {
    let token = exp.charAt(i);
    // escaped characters
    if (token == "\\") {
      i++;
      token += exp.charAt(i);
    }
    output.push(token);

    if (token == "(" || token == "|") {
      continue;
    }

    if (i < exp.length - 1) {
      const lookahead = exp.charAt(i + 1);

      if (
        lookahead == "*" ||
        lookahead == "?" ||
        lookahead == "+" ||
        lookahead == "|" ||
        lookahead == ")"
      ) {
        continue;
      }

      output.push(":");
    }
  }

  return output;
}

function toPostfix(exp: string[]): string[] {
  const output = new Array<string>();
  const operatorStack = new Array<string>();

  for (let i = 0; i < exp.length; i++) {
    const token = exp[i];
    if (
      token == ":" ||
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
        output.push(operatorStack.pop());
      }

      operatorStack.push(token);
    } else if (token == "(" || token == ")") {
      if (token == "(") {
        operatorStack.push(token);
      } else {
        while (peek(operatorStack) != "(") {
          output.push(operatorStack.pop());
        }
        operatorStack.pop();
      }
    } else {
      output.push(token);
    }
  }

  while (operatorStack.length) {
    output.push(operatorStack.pop());
  }

  return output;
}

export class State {
  isEnd: bool;
  epsilonTransitions: Array<State>;

  constructor(isEnd: bool = false) {
    this.isEnd = isEnd;
    this.epsilonTransitions = new Array<State>();
  }

  matches(char: string): State | null {
    return null;
  }
}

export class SymbolMatchState extends State {
  symbol: string;
  next: State;

  constructor(symbol: string, next: State) {
    super();
    this.symbol = symbol;
    this.next = next;
  }

  matches(symbol: string): State | null {
    return this.symbol == symbol ? this.next : null;
  }
}

export class CharacterClassMatchState extends State {
  next: State;
  charClass: string;

  constructor(charClass: string, next: State) {
    super();
    this.next = next;
    this.charClass = charClass;
  }

  matches(symbol: string): State | null {
    const code = symbol.charCodeAt(0);
    if (this.charClass == "d") {
      return isDigit(code) ? this.next : null;
    }
    if (this.charClass == "D") {
      return !isDigit(code) ? this.next : null;
    }
    if (this.charClass == ".") {
      return code != 13 && code != 10 && code != 8232 && code != 8233
        ? this.next
        : null;
    }
    if (this.charClass == "w") {
      return isLowercaseAlpha(code) ||
        isUppercaseAlpha(code) ||
        isUnderscore(code) ||
        isDigit(code)
        ? this.next
        : null;
    }
    if (this.charClass == "W") {
      return !(
        isLowercaseAlpha(code) ||
        isUppercaseAlpha(code) ||
        isUnderscore(code) ||
        isDigit(code)
      )
        ? this.next
        : null;
    }
    if (this.charClass == "s") {
      return isWhitespace(code) ? this.next : null;
    }
    if (this.charClass == "S") {
      return !isWhitespace(code) ? this.next : null;
    }
    if (this.charClass == "t") {
      return code == 9 ? this.next : null;
    }
    if (this.charClass == "r") {
      return code == 13 ? this.next : null;
    }
    if (this.charClass == "n") {
      return code == 10 ? this.next : null;
    }
    if (this.charClass == "v") {
      return code == 11 ? this.next : null;
    }
    if (this.charClass == "f") {
      return code == 12 ? this.next : null;
    }
    // TODO: throw an error
    return null;
  }
}

export class Automata {
  start: State;
  end: State; // accepting state
  constructor(start: State, end: State) {
    this.start = start;
    this.end = end;
  }
}

function fromEpsilon(): Automata {
  const start = new State();
  const end = new State(true);
  start.epsilonTransitions.push(end);
  return new Automata(start, end);
}

function fromCharacterClass(charClass: string): Automata {
  const end = new State(true);
  const start = new CharacterClassMatchState(charClass, end);
  return new Automata(start, end);
}

function fromSymbol(symbol: string): Automata {
  const end = new State(true);
  const start = new SymbolMatchState(symbol, end);
  return new Automata(start, end);
}

function concat(first: Automata, second: Automata): Automata {
  first.end.epsilonTransitions.push(second.start);
  first.end.isEnd = false;
  return new Automata(first.start, second.end);
}

function union(first: Automata, second: Automata): Automata {
  const start = new State();
  start.epsilonTransitions.push(first.start);
  start.epsilonTransitions.push(second.start);
  const end = new State(true);
  first.end.epsilonTransitions.push(end);
  first.end.isEnd = false;
  second.end.epsilonTransitions.push(end);
  second.end.isEnd = false;
  return new Automata(start, end);
}

function closure(nfa: Automata): Automata {
  const start = new State();
  const end = new State(true);
  start.epsilonTransitions.push(end);
  start.epsilonTransitions.push(nfa.start);
  nfa.end.epsilonTransitions.push(end);
  nfa.end.epsilonTransitions.push(nfa.start);
  nfa.end.isEnd = false;
  return new Automata(start, end);
}

function zeroOrOne(nfa: Automata): Automata {
  const start = new State();
  const end = new State(true);
  start.epsilonTransitions.push(end);
  start.epsilonTransitions.push(nfa.start);
  nfa.end.epsilonTransitions.push(end);
  nfa.end.isEnd = false;
  return new Automata(start, end);
}

function oneOrMore(nfa: Automata): Automata {
  const start = new State();
  const end = new State(true);
  start.epsilonTransitions.push(nfa.start);
  nfa.end.epsilonTransitions.push(end);
  nfa.end.epsilonTransitions.push(nfa.start);
  nfa.end.isEnd = false;
  return new Automata(start, end);
}

export function toNFA(exp: string): Automata {
  const postfixExp = toPostfix(insertExplicitConcatOperator(exp));

  if (postfixExp.length == 0) {
    return fromEpsilon();
  }

  const stack = new Array<Automata>();
  for (let i = 0; i < postfixExp.length; i++) {
    const token = postfixExp[i];
    if (token == "*") {
      stack.push(closure(stack.pop()));
    } else if (token == "?") {
      stack.push(zeroOrOne(stack.pop()));
    } else if (token == "+") {
      stack.push(oneOrMore(stack.pop()));
    } else if (token == "|") {
      const right = stack.pop();
      const left = stack.pop();
      stack.push(union(left, right));
    } else if (token == ":") {
      const right = stack.pop();
      const left = stack.pop();
      stack.push(concat(left, right));
    } else if (token.startsWith("\\")) {
      const escapedToken = token.substr(1);
      if (characterClasses.includes(escapedToken)) {
        stack.push(fromCharacterClass(escapedToken));
      } else {
        stack.push(fromSymbol(escapedToken));
      }
    } else if (token == ".") {
      stack.push(fromCharacterClass("."));
    } else {
      stack.push(fromSymbol(token));
    }
  }

  return stack.pop();
}
