import { isDigit } from "./characters";

function isQuantifier(char: string): bool {
  return char == "?" || char == "+" || char == "*";
}

function isAssertion(char: string): bool {
  return char == "$" || char == "^";
}

export abstract class Node {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
}

export class AST {
  body: Node;
  constructor(body: Node) {
    this.body = body;
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
}

export class Parser {
  currentToken: string = "";
  cursor: u32 = 0;
  input: string;

  private constructor(input: string) {
    this.input = input;
  }

  static toAST(input: string): AST {
    const parser = new Parser(input);
    return parser.toAST();
  }

  private eatToken(value: string = ""): string {
    if (value != "" && this.currentToken != value) {
      throw new Error("invalid token");
    }

    const current = this.currentToken;

    this.cursor++;
    this.currentToken = this.input.substr(this.cursor, 1);
    return current;
  }

  private more(): bool {
    return this.currentToken != "";
  }

  private resetCursor(): void {
    this.cursor = 0;
    this.currentToken = this.input.substr(this.cursor, 1);
  }

  private toAST(): AST {
    this.resetCursor();
    const body = this.parseSequence();
    return new AST(body);
  }

  // private parseTerms(): Node {
  //   const term = this.parseSequence();
  //   if (this.more() && this.currentToken == "|") {
  //     this.eatToken("|");
  //     return new AlternationNode(term, this.parseTerms());
  //   }
  //   return term;
  // }

  private parseCharacter(): Node {
    if (this.currentToken == "\\") {
      this.eatToken("\\");
      // TODO: strangely without this we get a TS2367 error!
      this.currentToken = this.currentToken;
      if (this.currentToken == ".") {
        this.eatToken();
        return new CharacterNode(".");
      } else if (isAssertion(this.currentToken)) {
        return new CharacterNode(this.eatToken());
      } else {
        return new CharacterClassNode(this.eatToken());
      }
    }

    if (isAssertion(this.currentToken)) {
      return new AssertionNode(this.eatToken());
    }

    if (this.currentToken == ".") {
      this.eatToken(".");
      return new CharacterClassNode(".");
    }

    return new CharacterNode(this.eatToken());
  }

  // parses a sequence of chars
  private parseSequence(): Node {
    let nodes = new Array<Node>();
    while (
      this.more() &&
      this.currentToken != ")"
    ) {
      if (this.currentToken == "|") {
        this.eatToken("|");
        const left = nodes.length > 1 ? new ConcatenationNode(nodes) : nodes[0];
        nodes = new Array<Node>();
        nodes.push(new AlternationNode(left, this.parseSequence()));
      } else if (this.currentToken == "(") {
        this.eatToken("(");
        nodes.push(new GroupNode(this.parseSequence()));
        this.eatToken(")");
      } else if (isQuantifier(this.currentToken)) {
        const expression = nodes.pop();
        // TODO: add parseRepitition function
        nodes.push(new RepetitionNode(expression, this.currentToken));
        this.eatToken();
      } else if (this.currentToken == "[") {
        nodes.push(this.parseCharacterSet());
      } else {
        nodes.push(this.parseCharacter());
      }
    }

    return nodes.length > 1 ? new ConcatenationNode(nodes) : nodes[0];
  }

  private parseCharacterSet(): CharacterSetNode {
    let chars = "";
    this.eatToken("[");
    const negated = this.currentToken == "^";
    if (negated) {
      this.eatToken("^");
    }
    while (
      this.currentToken != "]" ||
      (this.currentToken == "]" && chars.length == 0)
    ) {
      // TODO characters set can contain character classes
      chars += this.currentToken;
      this.eatToken();
      // TODO error if we run out of chars?
    }
    this.eatToken("]");
    return new CharacterSetNode(chars, negated);
  }
}
