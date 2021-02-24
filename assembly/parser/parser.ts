import { isDigit, Char, isHexadecimalDigit } from "../char";
import { StringIterator } from "./string-iterator";
import {
  AST,
  RangeRepetitionNode,
  GroupNode,
  AssertionNode,
  CharacterSetNode,
  CharacterNode,
  Node,
  AlternationNode,
  ConcatenationNode,
  RepetitionNode,
  CharacterClassNode,
  CharacterRangeNode,
} from "./node";

function isQuantifier(code: Char): bool {
  return code == Char.Question || code == Char.Plus || code == Char.Asterisk;
}

// characters which have special meaning within character sets
function isCharacterSetSpecialChar(code: Char): bool {
  return (
    code == Char.Caret ||
    code == Char.Minus ||
    code == Char.RightSquareBracket ||
    code == Char.Backslash
  );
}

function isCharacterClass(code: u32): bool {
  switch (code) {
    case Char.d:
    case Char.D:
    case Char.Dot:
    case Char.w:
    case Char.W:
    case Char.s:
    case Char.S:
    case Char.t:
    case Char.r:
    case Char.n:
    case Char.v:
    case Char.f:
      return true;
  }
  return false;
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
  constructor(public from: i32, public to: i32) {}
}

export class Parser {
  iterator: StringIterator;

  private constructor(input: string) {
    this.iterator = new StringIterator(input);
  }

  static toAST(input: string): AST {
    return new Parser(input).toAST();
  }

  private eatToken(value: u32 = -1): u32 {
    const currentToken = this.iterator.current;
    if (value != -1 && this.iterator.current != value) {
      throw new Error("invalid token");
    }
    this.iterator.next();
    return currentToken;
  }

  private toAST(): AST {
    if (!this.iterator.more()) {
      return new AST(null);
    } else {
      return new AST(this.parseSequence());
    }
  }

  private parseCharacterCode(code: u32): Node {
    const length = code == Char.x ? 2 : 4;
    // check whether we have the correct number of digits ahead
    for (let i = 0; i < length; i++) {
      if (!isHexadecimalDigit(this.iterator.lookahead(i + 1))) {
        return new CharacterNode(this.eatToken());
      }
    }
    // if so, parse the hex string
    this.eatToken(code);
    let value = "";
    for (let i = 0; i < length; i++) {
      value += this.iterator.currentAsString();
      this.eatToken();
    }
    return new CharacterNode(u32(parseInt(value, 16)));
  }

  private parseCharacter(): Node {
    let token = this.iterator.current;
    if (this.iterator.current == Char.Backslash) {
      this.eatToken(Char.Backslash);
      token = this.iterator.current;
      if (isSpecialCharacter(token)) {
        this.eatToken();
        return new CharacterNode(token);
      } else if (isAssertion(token)) {
        return new CharacterNode(this.eatToken());
      } else if (token == Char.x) {
        return this.parseCharacterCode(Char.x);
      } else if (token == Char.u) {
        return this.parseCharacterCode(Char.u);
      } else if (isCharacterClass(token)) {
        return new CharacterSetNode(this.eatToken());
      } else {
        return new CharacterNode(this.eatToken());
      }
    }

    if (isAssertion(token)) {
      return new AssertionNode(this.eatToken());
    }

    if (token == Char.Dot) {
      this.eatToken(Char.Dot);
      return new CharacterSetNode(Char.Dot);
    }

    return new CharacterNode(this.eatToken());
  }

  private maybeParseDigit(): i32 {
    let digitStr = "";
    while (this.iterator.more()) {
      const token = this.iterator.current;
      if (isDigit(token)) {
        digitStr += this.iterator.currentAsString();
      } else {
        return digitStr == "" ? -1 : <i32>parseInt(digitStr);
      }
      this.eatToken();
    }
    return digitStr == "" ? -1 : <i32>parseInt(digitStr);
  }

  private maybeParseRepetitionRange(): Range | null {
    // snapshot
    const iteratorCopy = this.iterator.copy();
    this.eatToken(Char.LeftCurlyBrace);

    const from = this.maybeParseDigit();
    if (from == -1) {
      return null;
    }
    if (this.iterator.current == Char.RightCurlyBrace) {
      this.eatToken();
      return new Range(from, from);
    } else if (this.iterator.current == Char.Comma) {
      this.eatToken();
      const to = this.maybeParseDigit();
      // @ts-ignore
      if (this.iterator.current == Char.RightCurlyBrace) {
        this.eatToken();
        return new Range(from, to);
      }
    }

    this.iterator = iteratorCopy;
    return null;
  }

  private isGreedy(): bool {
    if (this.iterator.current == Char.Question) {
      this.eatToken();
      return false;
    }
    return true;
  }

  private isCapturing(): bool {
    if (
      this.iterator.current == Char.Question &&
      this.iterator.lookahead(1) == Char.Colon
    ) {
      this.eatToken(Char.Question);
      this.eatToken(Char.Colon);
      return false;
    }
    return true;
  }

  // parses a sequence of chars
  private parseSequence(): Node {
    let nodes = new Array<Node>();
    while (this.iterator.more()) {
      const token = this.iterator.current;
      if (token == Char.RightParenthesis) break;
      // @ts-ignore
      if (token == Char.VerticalBar) {
        this.eatToken(Char.VerticalBar);
        const left = nodes.length > 1 ? new ConcatenationNode(nodes) : nodes[0];
        nodes = [new AlternationNode(left, this.parseSequence())];
        // @ts-ignore
      } else if (token == Char.LeftParenthesis) {
        this.eatToken(Char.LeftParenthesis);
        const capturing = this.isCapturing();
        nodes.push(new GroupNode(this.parseSequence(), capturing));
        this.eatToken(Char.RightParenthesis);
        // @ts-ignore
      } else if (token == Char.LeftCurlyBrace) {
        const range = this.maybeParseRepetitionRange();
        if (range != null) {
          const expression = nodes.pop();
          nodes.push(
            new RangeRepetitionNode(
              expression,
              range.from,
              range.to,
              this.isGreedy()
            )
          );
        } else {
          // this is not the start of a repetition, it's just a char!
          nodes.push(this.parseCharacter());
        }
      } else if (isQuantifier(token)) {
        if (nodes.length === 0) {
          throw new Error("Invalid regular expression: Nothing to repeat");
        }

        const expression = nodes.pop();
        const quantifier = this.eatToken();
        nodes.push(new RepetitionNode(expression, quantifier, this.isGreedy()));
        // @ts-ignore
      } else if (token == Char.LeftSquareBracket) {
        nodes.push(this.parseCharacterClass());
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

  private parseCharacterClass(): CharacterClassNode {
    this.eatToken(Char.LeftSquareBracket);

    const negated = this.iterator.current == Char.Caret;
    if (negated) {
      this.eatToken(Char.Caret);
    }

    const nodes = new Array<Node>();
    while (
      this.iterator.current != Char.RightSquareBracket ||
      nodes.length == 0
    ) {
      // lookahead for character range
      if (
        this.iterator.current != Char.Backslash &&
        this.iterator.lookahead(1) == Char.Minus &&
        this.iterator.lookahead(2) != Char.RightSquareBracket
      ) {
        nodes.push(this.parseCharacterRange());
      } else {
        // have we encountered a backslash?
        if (this.iterator.current == Char.Backslash) {
          this.eatToken();
          if (isCharacterSetSpecialChar(this.iterator.current)) {
            // if it was a backslashed special char, treat as a regular char
            nodes.push(new CharacterNode(this.eatToken()));
          } else {
            // otherwise this is a character class
            nodes.push(new CharacterSetNode(this.eatToken()));
          }
        } else {
          nodes.push(new CharacterNode(this.eatToken()));
        }
      }

      if (!this.iterator.more()) {
        throw new SyntaxError("Unterminated character class");
      }
    }
    this.eatToken(Char.RightSquareBracket);
    return new CharacterClassNode(nodes, negated);
  }
}
