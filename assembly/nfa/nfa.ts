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
} from "../parser/node";
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
  location: i32 = -1;

  snapshot(input: string, position: u32): void {
    this.location = position;
  }
}

export class GroupEndMarkerState extends State {
  // a bit yucky - storing transient state in the state machine!
  capture: string = "";

  constructor(
    public startMarker: GroupStartMarkerState,
    isEnd: bool = false
  ) {
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

  matches(value: string): State | null {
    return this.matcher.matches(value) ? this.next : null;
  }

  reachableStates(): State[] {
    let copied = this.epsilonTransitions.slice(0);
    copied.push(this.next);
    return copied;
  }
}

export class Automata {
  constructor(
    public start: State,
    public end: State
  ) {}

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
    const quantifier = c.quantifier;
    if (quantifier == "?") {
      return zeroOrOne(auto);
    } else if (quantifier == "+") {
      return oneOrMore(auto);
    } else if (quantifier == "*") {
      return closure(auto);
    } else {
      throw new Error("unsupported quantifier - " + quantifier);
    }
  } else if (CharacterNode.is(expression)) {
    return Automata.fromMatcher(
      Matcher.fromCharacterNode(expression as CharacterNode)
    );
  } else if (ConcatenationNode.is(expression)) {
    const expressions = (expression as ConcatenationNode).expressions;
    if (expressions.length == 0) {
      return Automata.fromEpsilon();
    }
    let auto = automataForNode(expressions[0]);
    for (let i = 1, len = expressions.length; i < len; i++) {
      auto = concat(auto, automataForNode(expressions[i]));
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
