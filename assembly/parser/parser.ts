import { isDigit, CharClass, QuantifierClass } from "../nfa/characters";
import {
  AST,
  RangeRepetitionNode,
  GroupNode,
  AssertionNode,
  CharacterClassNode,
  CharacterNode,
  Node,
  AlternationNode,
  ConcatenationNode,
  RepetitionNode,
  CharacterSetNode
} from "./node";

function isQuantifier(code: QuantifierClass): bool {
  return (
    code == QuantifierClass.Question ||
    code == QuantifierClass.Plus ||
    code == QuantifierClass.Star
  );
}

function isAssertion(code: u32): bool {
  return code == CharClass.Dollar || code == CharClass.Caret; // "$" or "^"
}

function isSpecialCharacter(code: u32): bool {
  switch (code) {
    case 0x24: /* $ */
    case 0x28: /* ( */
    case 0x29: /* ) */
    case 0x2a: /* * */
    case 0x2b: /* + */
    case 0x2e: /* . */
    case 0x3f: /* ? */
    case 0x5c: /* \ */
    case 0x5b: /* [ */
    case 0x5d: /* ] */
    case 0x5e: /* ^ */
    case 0x7c: /* | */
    case 0x7b: /* { */
    case 0x7d: /* } */
      return true;
  }
  return false;
}

class Range {
  from: i32 = -1;
  to: i32 = -1;
}

export class Parser {
  currentToken: string = "";
  cursor: u32 = 0;

  private constructor(public input: string) {}

  static toAST(input: string): AST {
    return new Parser(input).toAST();
  }

  private eatToken(value: string = ""): u32 {
    const current = this.currentToken;
    if (value.length > 0 && current != value) {
      throw new Error("invalid token");
    }

    this.cursor++;
    this.currentToken = this.input.charAt(this.cursor);
    return current.charCodeAt(0);
  }

  private more(): bool {
    return this.currentToken.length > 0;
  }

  private resetCursor(): void {
    this.cursor = 0;
    this.currentToken = this.input.charAt(this.cursor);
  }

  private toAST(): AST {
    this.resetCursor();
    return new AST(this.parseSequence());
  }

  private parseCharacter(): Node {
    let token = this.currentToken.charCodeAt(0);
    if (token == 0x5C /* \ */) {
      this.eatToken("\\");
      token = this.currentToken.charCodeAt(0);
      if (isSpecialCharacter(token)) {
        this.eatToken();
        return new CharacterNode(token);
      } else if (isAssertion(token)) {
        return new CharacterNode(this.eatToken());
      } else {
        return new CharacterClassNode(this.eatToken());
      }
    }

    if (isAssertion(token)) {
      return new AssertionNode(this.eatToken());
    }

    if (token == CharClass.Dot) {
      this.eatToken(".");
      return new CharacterClassNode(CharClass.Dot);
    }

    return new CharacterNode(this.eatToken());
  }

  private maybeParseRepetitionRange(): Range {
    // snapshot
    const previousCursor = this.cursor;
    this.eatToken("{");

    let range = new Range();

    let firstDigit = true;
    let digitStr = "";
    while (this.more()) {
      let token = this.currentToken.charCodeAt(0);
      if (token == 0x29 /* ) */) break;
      if (firstDigit) {
        if (isDigit(token)) {
          // if it is a digit, keep eating
          digitStr += this.currentToken;
        } else {
          range.from = digitStr.length ? <i32>parseInt(digitStr) : -1;
          range.to = range.from;
          if (token == 0x2C /* , */) {
            // if we meet a comma, start parsing the next digit
            firstDigit = false;
            digitStr = "";
            range.to = -1;
          } else if (token == 0x7D /* } */) {
            this.eatToken("}");
            // close brace, this is a single value range
            return range;
          } else {
            // anything else, we got a problem
            break;
          }
        }
      } else {
        if (isDigit(token)) {
          // if it is a digit, keep eating
          digitStr += this.currentToken;
        } else {
          range.to = digitStr.length ? <i32>parseInt(digitStr) : -1;
          if (token == 0x7D /* } */) {
            this.eatToken("}");
            // close brace, end  of range
            return range;
          } else {
            // anything else, we got a problem
            break;
          }
        }
      }
      this.eatToken();
    }

    // repetition not found - reset state
    this.cursor = previousCursor;
    this.currentToken = this.input.charAt(this.cursor);

    return range;
  }

  // parses a sequence of chars
  private parseSequence(): Node {
    let nodes = new Array<Node>();
    while (this.more()) {
      let token = this.currentToken.charCodeAt(0);
      if (token == 0x29 /* ) */) break;
      // @ts-ignore
      if (token == 0x7C /* | */) {
        this.eatToken("|");
        const left = nodes.length > 1 ? new ConcatenationNode(nodes) : nodes[0];
        nodes = [new AlternationNode(left, this.parseSequence())];
        // @ts-ignore
      } else if (token == 0x28 /* ( */) {
        this.eatToken("(");
        nodes.push(new GroupNode(this.parseSequence()));
        this.eatToken(")");
        // @ts-ignore
      } else if (token == 0x7B /* { */) {
        const range = this.maybeParseRepetitionRange();
        if (range.from == -1) {
          // this is not the start of a repetition, it's just a char!
          nodes.push(this.parseCharacter());
        } else {
          const expression = nodes.pop();
          nodes.push(new RangeRepetitionNode(expression, range.from, range.to));
        }
      } else if (isQuantifier(token)) {
        const expression = nodes.pop();
        nodes.push(new RepetitionNode(expression, token));
        this.eatToken();
        // @ts-ignore
      } else if (token == 0x5B /* [ */) {
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
      (chars.length == 0 && this.currentToken == "]")
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
