import { isDigit } from "./characters";
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

function isQuantifier(char: string): bool {
  return char == "?" || char == "+" || char == "*";
}

function isAssertion(char: string): bool {
  return char == "$" || char == "^";
}

function isSpecialCharacter(char: string): bool {
  return (
    char == "\\" ||
    char == "^" ||
    char == "$" ||
    char == "." ||
    char == "|" ||
    char == "?" ||
    char == "*" ||
    char == "+" ||
    char == "(" ||
    char == "[" ||
    char == "{" ||
    char == ")" ||
    char == "]" ||
    char == "}"
  );
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

  private parseCharacter(): Node {
    if (this.currentToken == "\\") {
      this.eatToken("\\");
      // TODO: strangely without this we get a TS2367 error!
      this.currentToken = this.currentToken;
      if (isSpecialCharacter(this.currentToken)) {
        const char = this.currentToken;
        this.eatToken();
        return new CharacterNode(char);
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

  private maybeParseRepetitionRange(): u32[] {
    // snapshot
    const previousCursor = this.cursor;
    this.eatToken("{");

    let firstDigit = true;
    let fromStr = "",
      toStr = "";
    const rangeValues = new Array<u32>();
    while (this.more() && this.currentToken != ")") {
      if (firstDigit) {
        if (isDigit(this.currentToken.charCodeAt(0))) {
          // if it is a digit, keep eating
          fromStr += this.currentToken;
        } else {
          rangeValues.push(<u32>parseInt(fromStr));
          if (this.currentToken == ",") {
            // if we meet a comma, start parsing the next digit
            firstDigit = false;
          } else if (this.currentToken == "}") {
            this.eatToken("}");
            // close brace, this is a single value range
            return rangeValues;
          } else {
            // anything else, we got a problem
            break;
          }
        }
      } else {
        if (isDigit(this.currentToken.charCodeAt(0))) {
          // if it is a digit, keep eating
          toStr += this.currentToken;
        } else {
          rangeValues.push(<u32>parseInt(toStr));
          if (this.currentToken == "}") {
            this.eatToken("}");
            // close brace, this is a double value range
            return rangeValues;
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
    this.currentToken = this.input.substr(this.cursor, 1);

    return rangeValues;
  }

  // parses a sequence of chars
  private parseSequence(): Node {
    let nodes = new Array<Node>();
    while (this.more() && this.currentToken != ")") {
      if (this.currentToken == "|") {
        this.eatToken("|");
        const left = nodes.length > 1 ? new ConcatenationNode(nodes) : nodes[0];
        nodes = new Array<Node>();
        nodes.push(new AlternationNode(left, this.parseSequence()));
      } else if (this.currentToken == "(") {
        this.eatToken("(");
        nodes.push(new GroupNode(this.parseSequence()));
        this.eatToken(")");
      } else if (this.currentToken == "{") {
        const range = this.maybeParseRepetitionRange();
        if (range.length == 0) {
          // this is not the start of a repetition, it's just a char!
          nodes.push(this.parseCharacter());
        } else {
          const expression = nodes.pop();
          nodes.push(
            new RangeRepetitionNode(
              expression,
              range[0],
              range.length == 1 ? range[0] : range[1]
            )
          );
        }
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
