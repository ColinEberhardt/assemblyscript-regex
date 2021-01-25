import { isDigit, Char } from "../char";
import { StringIterator } from "./string-iterator";
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

// characters which have special meaning within character sets
function isCharacterSetSpecialChar(code: Char): bool {
  return (
    code == Char.Caret ||
    code == Char.Minus ||
    code == Char.RightSquareBracket ||
    code == Char.Backslash
  );
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
    return new AST(this.parseSequence());
  }

  private currentCharCode(): u32 {
    return this.iterator.current;
  }

  private parseCharacter(): Node {
    let token = this.iterator.current;
    if (token == Char.Backslash) {
      this.eatToken(Char.Backslash);
      token = this.iterator.current;
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
    const iteratorCopy = this.iterator.copy();
    this.eatToken(Char.LeftCurlyBrace);

    let range = new Range();

    let firstDigit = true;
    let digitStr = "";
    while (this.iterator.more()) {
      const token = this.iterator.current;
      if (token == Char.RightParenthesis) break;
      if (firstDigit) {
        if (isDigit(token)) {
          // if it is a digit, keep eating
          digitStr += this.iterator.currentAsString();
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
          digitStr += this.iterator.currentAsString();
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
    this.iterator = iteratorCopy;

    return range;
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
        if (
          this.iterator.current == Char.Backslash &&
          isCharacterSetSpecialChar(this.iterator.lookahead(1))
        ) {
          this.eatToken(Char.Backslash);
        }
        nodes.push(new CharacterNode(this.eatToken()));
      }

      if (!this.iterator.more()) {
        throw new SyntaxError("Unterminated character class");
      }
    }
    this.eatToken(Char.RightSquareBracket);
    return new CharacterSetNode(nodes, negated);
  }
}
