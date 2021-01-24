import { isDigit, Char } from "../char";
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
  CharacterSetNode,
  CharacterRangeNode,
} from "./node";

function isQuantifier(code: Char): bool {
  return code == Char.Question || code == Char.Plus || code == Char.Asterisk;
}

function isAssertion(code: u32): bool {
  return code == Char.Dollar || code == Char.Caret; // "$" or "^"
}

function isSpecialCharacter(code: u32): bool {
  switch (code) {
    case Char.Dollar:
    case Char.LeftParenthesis:
    case Char.RightParenthesis:
    case Char.Asterisk:
    case Char.Plus:
    case Char.Dot:
    case Char.Question:
    case Char.Backslash:
    case Char.LeftSquareBracket:
    case Char.RightSquareBracket:
    case Char.Caret:
    case Char.VerticalBar:
    case Char.LeftCurlyBrace:
    case Char.RightCurlyBrace:
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

  private eatToken(value: u32 = -1): u32 {
    const token = this.currentToken.charCodeAt(0) as u32;
    if (value != -1 && token != value) {
      throw new Error("invalid token");
    }
    this.currentToken = this.input.charAt(++this.cursor);
    return token;
  }

  private more(): bool {
    return this.currentToken.length > 0;
  }

  private resetCursor(): void {
    this.cursor = 0;
    this.currentToken = this.input.charAt(0);
  }

  private toAST(): AST {
    this.resetCursor();
    return new AST(this.parseSequence());
  }

  private parseCharacter(): Node {
    let token = this.currentToken.charCodeAt(0);
    if (token == Char.Backslash) {
      this.eatToken(Char.Backslash);
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

    if (token == Char.Dot) {
      this.eatToken(Char.Dot);
      return new CharacterClassNode(Char.Dot);
    }

    return new CharacterNode(this.eatToken());
  }

  private maybeParseRepetitionRange(): Range {
    // snapshot
    const previousCursor = this.cursor;
    this.eatToken(Char.LeftCurlyBrace);

    let range = new Range();

    let firstDigit = true;
    let digitStr = "";
    while (this.more()) {
      const token = this.currentToken.charCodeAt(0);
      if (token == Char.RightParenthesis) break;
      if (firstDigit) {
        if (isDigit(token)) {
          // if it is a digit, keep eating
          digitStr += this.currentToken;
        } else {
          range.from = digitStr.length ? <i32>parseInt(digitStr) : -1;
          range.to = range.from;
          if (token == Char.Comma) {
            // if we meet a comma, start parsing the next digit
            firstDigit = false;
            digitStr = "";
            range.to = -1;
          } else if (token == Char.RightCurlyBrace) {
            this.eatToken(Char.RightCurlyBrace);
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
          if (token == Char.RightCurlyBrace) {
            this.eatToken(Char.RightCurlyBrace);
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
    this.currentToken = this.input.charAt(previousCursor);

    return range;
  }

  // parses a sequence of chars
  private parseSequence(): Node {
    let nodes = new Array<Node>();
    while (this.more()) {
      const token = this.currentToken.charCodeAt(0);
      if (token == Char.RightParenthesis) break;
      // @ts-ignore
      if (token == Char.VerticalBar) {
        this.eatToken(Char.VerticalBar);
        const left = nodes.length > 1 ? new ConcatenationNode(nodes) : nodes[0];
        nodes = [new AlternationNode(left, this.parseSequence())];
        // @ts-ignore
      } else if (token == Char.LeftParenthesis) {
        this.eatToken(Char.LeftParenthesis);
        nodes.push(new GroupNode(this.parseSequence()));
        this.eatToken(Char.RightParenthesis);
        // @ts-ignore
      } else if (token == Char.LeftCurlyBrace) {
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
      } else if (token == Char.LeftSquareBracket) {
        nodes.push(this.parseCharacterSet());
      } else {
        nodes.push(this.parseCharacter());
      }
    }

    return nodes.length > 1 ? new ConcatenationNode(nodes) : nodes[0];
  }

  private parseCharacterRange(): Node {
    const from = this.eatToken();
    this.eatToken(Char.Minus);
    const to = this.eatToken();
    return new CharacterRangeNode(from, to);
  }

  private parseCharacterSet(): CharacterSetNode {
    this.eatToken(Char.LeftSquareBracket);
    const token = this.currentToken.charCodeAt(0);

    const negated = token == Char.Caret;
    if (negated) {
      this.eatToken(Char.Caret);
    }

    const nodes = new Array<Node>();
    while (this.currentToken != "]" || nodes.length == 0) {
      // lookahead for character range
      if (
        this.cursor + 1 < u32(this.input.length) &&
        this.input.charCodeAt(this.cursor + 1) == Char.Minus &&
        this.input.charCodeAt(this.cursor + 2) != Char.RightSquareBracket
      ) {
        nodes.push(this.parseCharacterRange());
      } else {
        nodes.push(this.parseCharacter());
      }

      // TODO error if we run out of chars?
    }
    this.eatToken(Char.RightSquareBracket);
    return new CharacterSetNode(nodes, negated);
  }
}
