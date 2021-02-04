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
import { Flags } from "../regexp";

export enum MatchResult {
  // a match has occurred - which is a signal to consume a character
  Match,
  // a match failed, abort this regex
  Fail,
  // this state doesn't preform a match
  Ignore,
}

/* eslint @typescript-eslint/no-empty-function: ["error", { "allow": ["constructors", "methods"] }] */
export class State {
  constructor(public transitions: State[] = []) {}

  matches(input: string, position: u32): MatchResult {
    return MatchResult.Ignore;
  }
}

export class GroupStartMarkerState extends State {
  location: i32 = -1;
  // a bit yucky - storing transient state in the state machine!
  capture: string = "";
  // captures from the path through the NFA that reaches the end are flagged
  flagged: bool = false;

  constructor(next: State) {
    super();
    this.transitions.push(next);
  }

  matches(input: string, position: u32): MatchResult {
    this.location = position;
    return MatchResult.Ignore;
  }
}

export class GroupEndMarkerState extends State {
  constructor(next: State, public startMarker: GroupStartMarkerState) {
    super();
    this.transitions.push(next);
  }

  matches(input: string, position: u32): MatchResult {
    this.startMarker.capture = input.substring(
      this.startMarker.location,
      position
    );
    return MatchResult.Ignore;
  }
}

export class MatcherState<T extends Matcher> extends State {
  ignoreCase: bool = false;

  constructor(private matcher: T, next: State) {
    super();
    this.transitions.push(next);
  }

  matches(input: string, position: u32): MatchResult {
    return this.matcher.matches(input.charCodeAt(position))
      ? MatchResult.Match
      : MatchResult.Fail;
  }
}

export class Automata {
  static toNFA(ast: AST, flags: Flags): Automata {
    return new AutomataFactor(flags).automataForNode(ast.body);
  }

  static fromEpsilon(): Automata {
    const start = new State();
    const end = new State();
    start.transitions.push(end);
    return new Automata(start, end);
  }

  static fromMatcher<T extends Matcher>(matcher: T): Automata {
    const end = new State();
    const start = new MatcherState<T>(matcher, end);
    return new Automata(start, end);
  }

  constructor(public start: State, public end: State) {}
}

function concat(first: Automata, second: Automata): Automata {
  first.end.transitions.push(second.start);
  return new Automata(first.start, second.end);
}

function union(first: Automata, second: Automata): Automata {
  const start = new State();
  start.transitions.push(first.start);
  start.transitions.push(second.start);
  const end = new State();
  first.end.transitions.push(end);
  second.end.transitions.push(end);
  return new Automata(start, end);
}

function closure(nfa: Automata, greedy: bool): Automata {
  const start = new State();
  const end = new State();
  if (greedy) {
    nfa.end.transitions.push(nfa.start);
    nfa.end.transitions.push(end);
    start.transitions.push(nfa.start);
    start.transitions.push(end);
  } else {
    nfa.end.transitions.push(end);
    nfa.end.transitions.push(nfa.start);
    start.transitions.push(end);
    start.transitions.push(nfa.start);
  }
  return new Automata(start, end);
}

function zeroOrOne(nfa: Automata): Automata {
  const start = new State();
  const end = new State();
  start.transitions.push(nfa.start);
  start.transitions.push(end);
  nfa.end.transitions.push(end);
  return new Automata(start, end);
}

function oneOrMore(nfa: Automata, greedy: bool): Automata {
  const start = new State();
  const end = new State();
  start.transitions.push(nfa.start);
  if (greedy) {
    nfa.end.transitions.push(nfa.start);
    nfa.end.transitions.push(end);
  } else {
    nfa.end.transitions.push(end);
    nfa.end.transitions.push(nfa.start);
  }
  return new Automata(start, end);
}

function group(nfa: Automata): Automata {
  // groups are implemented by wrapping the automata with
  // a pair of markers that record matches
  const startMarker = new GroupStartMarkerState(nfa.start);
  const end = new State();
  const endMarker = new GroupEndMarkerState(end, startMarker);
  nfa.end.transitions.push(endMarker);
  return new Automata(startMarker, end);
}

class AutomataFactor {
  constructor(private flags: Flags) {}

  // recursively builds an automata for the given AST
  automataForNode(expression: Node | null): Automata {
    if (expression == null) {
      return Automata.fromEpsilon();
    }

    switch (expression.type) {
      case NodeType.Repetition: {
        const node = expression as RepetitionNode;
        const automata = this.automataForNode(node.expression);
        const quantifier = node.quantifier;
        if (quantifier == Char.Question) {
          return zeroOrOne(automata);
        } else if (quantifier == Char.Plus) {
          return oneOrMore(automata, node.greedy);
        } else if (quantifier == Char.Asterisk) {
          return closure(automata, node.greedy);
        } else {
          throw new Error(
            "unsupported quantifier - " + String.fromCharCode(quantifier)
          );
        }
      }
      case NodeType.Character:
        return Automata.fromMatcher(
          Matcher.fromCharacterNode(expression as CharacterNode, this.flags)
        );
      case NodeType.Concatenation: {
        const expressions = (expression as ConcatenationNode).expressions;
        if (expressions.length == 0) {
          return Automata.fromEpsilon();
        }
        let automata = this.automataForNode(expressions[0]);
        for (let i = 1, len = expressions.length; i < len; i++) {
          automata = concat(automata, this.automataForNode(expressions[i]));
        }
        return automata;
      }
      case NodeType.Alternation: {
        const node = expression as AlternationNode;
        return union(
          this.automataForNode(node.left),
          this.automataForNode(node.right)
        );
      }
      case NodeType.CharacterSet:
        return Automata.fromMatcher(
          Matcher.fromCharacterSetNode(
            expression as CharacterSetNode,
            this.flags
          )
        );
      case NodeType.CharacterClass:
        return Automata.fromMatcher(
          Matcher.fromCharacterClassNode(
            expression as CharacterClassNode,
            this.flags
          )
        );
      case NodeType.Group: {
        const node = expression as GroupNode;
        return group(this.automataForNode(node.expression));
      }
      case NodeType.Assertion:
        return Automata.fromEpsilon();
      default:
        throw new Error("un-recognised AST node");
    }
  }
}
