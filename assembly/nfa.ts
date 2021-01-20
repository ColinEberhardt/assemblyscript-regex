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
  AssertionNode
} from "./parser";
import { Matcher } from "./matcher";

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

  // a slightly hacky was to implement capture groups, the GroupEndMarkerState subclass
  // uses this method to store the matched substring during the regex search
  snapshot(input: string, position: u32): void {}

  reachableStates(): State[] {
    return this.epsilonTransitions;
  }
}

export class GroupStartMarkerState extends State {
  location: i32;

  constructor() {
    super();
    this.location = -1;
  }

  snapshot(input: string, position: u32): void {
    this.location = position;
  }
}

export class GroupEndMarkerState extends State {
  startMarker: GroupStartMarkerState;
  // a bit yucky - storing transient state in the state machine!
  capture: string;

  constructor(startMarker: GroupStartMarkerState, isEnd: bool = false) {
    super(isEnd);
    this.startMarker = startMarker;
    this.capture = "";
  }

  snapshot(input: string, position: u32): void {
    this.capture = input.substring(this.startMarker.location, position);
  }
}

export class MatcherState<T extends Matcher> extends State {
  matcher: T;
  next: State;

  constructor(matcher: T, next: State) {
    super();
    this.matcher = matcher;
    this.next = next;
  }

  matches(value: string): State | null {
    return this.matcher.matches(value) ? this.next : null;
  }

  reachableStates(): State[] {
    this.next;
    const next = new Array<State>();
    next.push(this.next);
    return this.epsilonTransitions.slice(0).concat(next);
  }
}

export class Automata {
  start: State;
  end: State; // accepting state
  constructor(start: State, end: State) {
    this.start = start;
    this.end = end;
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
function automataForNode(expression: Node | null): Automata {
  if (expression == null) {
    return Automata.fromEpsilon();
  } else if (RepetitionNode.is(expression)) {
    const c = expression as RepetitionNode;
    const auto = automataForNode(c.expression);
    if (c.quantifier == "?") {
      return zeroOrOne(auto);
    } else if (c.quantifier == "+") {
      return oneOrMore(auto);
    } else if (c.quantifier == "*") {
      return closure(auto);
    } else {
      throw new Error("unsupported quantifier - " + c.quantifier);
    }
  } else if (CharacterNode.is(expression)) {
    return Automata.fromMatcher(
      Matcher.fromCharacterNode(expression as CharacterNode)
    );
  } else if (ConcatenationNode.is(expression)) {
    const c = expression as ConcatenationNode;
    if (c.expressions.length == 0) {
      return Automata.fromEpsilon();
    }
    let auto = automataForNode(c.expressions[0]);
    for (let i = 1; i < c.expressions.length; i++) {
      auto = concat(auto, automataForNode(c.expressions[i]));
    }
    return auto;
  } else if (AlternationNode.is(expression)) {
    const c = expression as AlternationNode;
    return union(automataForNode(c.left), automataForNode(c.right));
  } else if (CharacterSetNode.is(expression)) {
    return Automata.fromMatcher(
      Matcher.fromCharacterSetNode(expression as CharacterSetNode)
    );
  } else if (CharacterClassNode.is(expression)) {
    return Automata.fromMatcher(
      Matcher.fromCharacterClassNode(expression as CharacterClassNode)
    );
  } else if (GroupNode.is(expression)) {
    const c = expression as GroupNode;
    const auto = automataForNode(c.expression);
    return group(auto);
  } else if (AssertionNode.is(expression)) {
    // assertion nodes are ignored
    return Automata.fromEpsilon();
  } else {
    throw new Error("un-recognised AST node");
  }
}

export function toNFAFromAST(ast: AST): Automata {
  return automataForNode(ast.body);
}

export function walker(
  state: State,
  visitor: (state: State) => void,
  visited: State[] = []
): void {
  visitor(state);
  if (visited.includes(state)) return;
  visited.push(state);
  const nextStates = state.reachableStates();
  for (let i = 0; i < nextStates.length; i++) {
    walker(nextStates[i], visitor, visited);
  }
}
