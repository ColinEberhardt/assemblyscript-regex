import { replaceAtIndex, toArray } from "./util";

const emptyNodeArray = new Array<Node>();

export abstract class Node {
  type: string;
  constructor(type: string) {
    this.type = type;
  }

  children(): Node[] {
    return emptyNodeArray;
  }

  abstract clone(): Node;

  replace(node: Node, replacement: Node): void {
    throw new Error("replace not implemented for this node type");
  }
}

export class AST extends Node {
  body: Node;

  constructor(body: Node) {
    super("AST");
    this.body = body;
  }

  static is(node: Node): bool {
    return node.type == "AST";
  }

  children(): Node[] {
    return this.body != null ? toArray(this.body as Node) : emptyNodeArray;
  }

  clone(): Node {
    return new AST(this.body.clone());
  }

  replace(node: Node, replacement: Node): void {
    this.body = replacement;
  }
}

export class ConcatenationNode extends Node {
  expressions: Node[];
  constructor(expressions: Node[]) {
    super("Concatenation");
    this.expressions = expressions;
  }

  static is(node: Node): bool {
    return node.type == "Concatenation";
  }

  children(): Node[] {
    return this.expressions;
  }

  clone(): Node {
    return new ConcatenationNode(
      this.expressions.slice(0).map<Node>(s => s.clone())
    );
  }

  replace(node: Node, replacement: Node): void {
    const index = this.expressions.indexOf(node);
    this.expressions = replaceAtIndex(this.expressions, index, replacement);
  }
}

export class CharacterSetNode extends Node {
  chars: string;
  negated: bool;
  constructor(chars: string, negated: bool) {
    super("CharacterSet");
    this.chars = chars;
    this.negated = negated;
  }

  static is(node: Node): bool {
    return node.type == "CharacterSet";
  }

  clone(): Node {
    return new CharacterSetNode(this.chars, this.negated);
  }
}

export class CharacterNode extends Node {
  char: string;
  constructor(char: string) {
    super("Char");
    this.char = char;
  }

  static is(node: Node): bool {
    return node.type == "Char";
  }

  clone(): Node {
    return new CharacterNode(this.char);
  }
}

export class AssertionNode extends Node {
  kind: string;
  constructor(kind: string) {
    super("Assertion");
    this.kind = kind;
  }

  static is(node: Node, kind: string = ""): bool {
    return (
      node.type == "Assertion" &&
      ((node as AssertionNode).kind == kind || kind == "")
    );
  }

  clone(): Node {
    return new AssertionNode(this.kind);
  }
}

export class CharacterClassNode extends Node {
  charClass: string;
  constructor(charClass: string) {
    super("CharacterClass");
    this.charClass = charClass;
  }

  static is(node: Node): bool {
    return node.type == "CharacterClass";
  }

  clone(): Node {
    return new CharacterClassNode(this.charClass);
  }
}

export class RepetitionNode extends Node {
  expression: Node;
  quantifier: string;
  constructor(expression: Node, quantifier: string) {
    super("Repetition");
    this.quantifier = quantifier;
    this.expression = expression;
  }

  static is(node: Node): bool {
    return node.type == "Repetition";
  }

  clone(): Node {
    return new RepetitionNode(this.expression.clone(), this.quantifier);
  }

  replace(node: Node, replacement: Node): void {
    this.expression = replacement;
  }
}

export class RangeRepetitionNode extends Node {
  expression: Node;
  from: i32;
  to: i32;
  constructor(expression: Node, from: i32, to: i32) {
    super("RangeRepetition");
    this.from = from;
    this.to = to;
    this.expression = expression;
  }

  static is(node: Node): bool {
    return node.type == "RangeRepetition";
  }

  clone(): Node {
    return new RangeRepetitionNode(this.expression.clone(), this.from, this.to);
  }

  replace(node: Node, replacement: Node): void {
    this.expression = replacement;
  }
}

export class AlternationNode extends Node {
  left: Node;
  right: Node;
  constructor(left: Node, right: Node) {
    super("Alternation");
    this.left = left;
    this.right = right;
  }

  static is(node: Node): bool {
    return node.type == "Alternation";
  }

  children(): Node[] {
    const arr = new Array<Node>();
    arr.push(this.left);
    arr.push(this.right);
    return arr;
  }

  clone(): Node {
    return new AlternationNode(this.left.clone(), this.right.clone());
  }

  replace(node: Node, replacement: Node): void {
    if (this.left === node) {
      this.left = replacement;
    } else {
      this.right = replacement;
    }
  }
}

export class GroupNode extends Node {
  expression: Node;
  constructor(expression: Node) {
    super("Group");
    this.expression = expression;
  }

  static is(node: Node): bool {
    return node.type == "Group";
  }

  children(): Node[] {
    return toArray(this.expression);
  }

  clone(): Node {
    return new GroupNode(this.expression.clone());
  }

  replace(node: Node, replacement: Node): void {
    this.expression = replacement;
  }
}
