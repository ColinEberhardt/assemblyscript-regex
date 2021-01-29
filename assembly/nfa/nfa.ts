import {
  AST,
  CharacterNode,
  Node,
  ConcatenationNode,
  RepetitionNode,
  AlternationNode,
  CharacterSetNode,
  CharacterClassNode,
  GroupNode,
  NodeType,
} from "../parser/node";

import { Char } from "../char";
import { Matcher } from "./matcher";

/* eslint @typescript-eslint/no-empty-function: ["error", { "allow": ["constructors", "methods"] }] */
export class State {
  epsilonTransitions: Array<State> = [];

  constructor(public isEnd: bool = false) {}

  matches(code: u32): State | null {
    return null;
  }

  // a slightly hacky was to implement capture groups, the GroupEndMarkerState subclass
  // uses this method to store the matched substring during the regex search
  snapshot(input: string, position: u32): void {}

  reachableStates(): State[] {
    return this.epsilonTransitions;
  }
}

export class GroupStartMarkerState extends State {
  location: i32 = -1;

  snapshot(input: string, position: u32): void {
    this.location = position;
  }
}

export class GroupEndMarkerState extends State {
  // a bit yucky - storing transient state in the state machine!
  capture: string = "";

  constructor(public startMarker: GroupStartMarkerState, isEnd: bool = false) {
    super(isEnd);
  }

  snapshot(input: string, position: u32): void {
    this.capture = input.substring(this.startMarker.location, position);
  }
}

export class MatcherState<T extends Matcher> extends State {
  constructor(public matcher: T, public next: State) {
    super();
  }

  matches(code: u32): State | null {
    return this.matcher.matches(code) ? this.next : null;
  }

  reachableStates(): State[] {
    let copied = this.epsilonTransitions.slice(0);
    copied.push(this.next);
    return copied;
  }
}

export class Automata {
  static toNFA(ast: AST): Automata {
    return visit(ast.body);
  }

  static fromEpsilon(): Automata {
    const start = new State();
    const end = new State(true);
    start.epsilonTransitions.push(end);
    return new Automata(start, end);
  }

  static fromMatcher<T extends Matcher>(matcher: T): Automata {
    const end = new State(true);
    const start = new MatcherState<T>(matcher, end);
    return new Automata(start, end);
  }

  constructor(public start: State, public end: State) {}
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
  // to ensure greedy matches, the epsilon transitions that loop-back
  // need to be first in the list
  start.epsilonTransitions.push(nfa.start);
  start.epsilonTransitions.push(end);
  nfa.end.epsilonTransitions.push(nfa.start);
  nfa.end.epsilonTransitions.push(end);
  nfa.end.isEnd = false;
  return new Automata(start, end);
}

function zeroOrOne(nfa: Automata): Automata {
  const start = new State();
  const end = new State(true);
  start.epsilonTransitions.push(nfa.start);
  start.epsilonTransitions.push(end);
  nfa.end.epsilonTransitions.push(end);
  nfa.end.isEnd = false;
  return new Automata(start, end);
}

function oneOrMore(nfa: Automata): Automata {
  const start = new State();
  const end = new State(true);
  start.epsilonTransitions.push(nfa.start);
  // to ensure greedy matches, the epsilon transitions that loop-back
  // need to be first in the list
  nfa.end.epsilonTransitions.push(nfa.start);
  nfa.end.epsilonTransitions.push(end);
  nfa.end.isEnd = false;
  return new Automata(start, end);
}

function group(nfa: Automata): Automata {
  // groups are implemented by wrapping the automata with
  // a pair of markers that record matches
  const start = new GroupStartMarkerState();
  const end = new GroupEndMarkerState(start, true);
  start.epsilonTransitions.push(nfa.start);
  nfa.end.epsilonTransitions.push(end);
  nfa.end.isEnd = false;
  return new Automata(start, end);
}

// recursively builds an automata for the given AST
function visit(expression: Node | null): Automata {
  if (expression == null) {
    return Automata.fromEpsilon();
  }

  switch (expression.type) {
    case NodeType.Repetition: {
      const node = expression as RepetitionNode;
      const automata = visit(node.expression);
      const quantifier = node.quantifier;
      if (quantifier == Char.Question) {
        return zeroOrOne(automata);
      } else if (quantifier == Char.Plus) {
        return oneOrMore(automata);
      } else if (quantifier == Char.Asterisk) {
        return closure(automata);
      } else {
        throw new Error(
          "unsupported quantifier - " + String.fromCharCode(quantifier)
        );
      }
    }
    case NodeType.Character:
      return Automata.fromMatcher(
        Matcher.fromCharacterNode(expression as CharacterNode)
      );
    case NodeType.Concatenation: {
      const expressions = (expression as ConcatenationNode).expressions;
      if (expressions.length == 0) {
        return Automata.fromEpsilon();
      }
      let automata = visit(expressions[0]);
      for (let i = 1, len = expressions.length; i < len; i++) {
        automata = concat(automata, visit(expressions[i]));
      }
      return automata;
    }
    case NodeType.Alternation: {
      const node = expression as AlternationNode;
      return union(visit(node.left), visit(node.right));
    }
    case NodeType.CharacterSet:
      return Automata.fromMatcher(
        Matcher.fromCharacterSetNode(expression as CharacterSetNode)
      );
    case NodeType.CharacterClass:
      return Automata.fromMatcher(
        Matcher.fromCharacterClassNode(expression as CharacterClassNode)
      );
    case NodeType.Group:
      const node = expression as GroupNode;
      return group(visit(node.expression));
    case NodeType.Assertion:
      return Automata.fromEpsilon();
    default:
      throw new Error("un-recognised AST node");
  }
}
