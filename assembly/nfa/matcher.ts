import { isDigit, isAlpha, isWhitespace, Char } from "../char";

import {
  CharacterNode,
  CharacterSetNode,
  CharacterClassNode,
  CharacterRangeNode,
  NodeType,
} from "../parser/node";

const enum MatcherType {
  Character,
  CharacterRange,
  CharacterClass,
  CharacterSet,
}

export class Matcher {
  constructor(readonly type: MatcherType) {}

  matches(code: u32): bool {
    return false;
  }

  static fromCharacterClassNode(
    node: CharacterClassNode
  ): CharacterClassMatcher {
    return new CharacterClassMatcher(node.charClass);
  }

  static fromCharacterRangeNode(
    node: CharacterRangeNode
  ): CharacterRangeMatcher {
    return new CharacterRangeMatcher(node.from, node.to);
  }

  static fromCharacterSetNode(node: CharacterSetNode): CharacterSetMatcher {
    const matchers = node.expressions.map<Matcher>((exp) => {
      switch (exp.type) {
        case NodeType.CharacterRange:
          return Matcher.fromCharacterRangeNode(exp as CharacterRangeNode);
        case NodeType.Character:
          return Matcher.fromCharacterNode(exp as CharacterNode);
        case NodeType.CharacterClass:
          return Matcher.fromCharacterClassNode(exp as CharacterClassNode);
        default:
          throw new Error("unsupported node type within character set");
      }
    });
    return new CharacterSetMatcher(matchers, node.negated);
  }

  static fromCharacterNode(node: CharacterNode): CharacterMatcher {
    return new CharacterMatcher(node.char);
  }
}

export class CharacterMatcher extends Matcher {
  constructor(public character: Char) {
    super(MatcherType.Character);
  }

  matches(code: u32): bool {
    return this.character == code;
  }
}

export class CharacterRangeMatcher extends Matcher {
  constructor(public from: u32, public to: u32) {
    super(MatcherType.CharacterRange);
  }

  matches(code: u32): bool {
    return code >= this.from && code <= this.to;
  }
}

export class CharacterClassMatcher extends Matcher {
  constructor(public charClass: Char) {
    super(MatcherType.CharacterClass);
  }

  matches(code: u32): bool {
    switch (this.charClass) {
      case Char.d:
        return isDigit(code);
      case Char.D:
        return !isDigit(code);
      case Char.Dot:
        return (
          code != Char.CarriageReturn &&
          code != Char.LineFeed &&
          code != 8232 &&
          code != 8233
        );
      case Char.w:
        return isAlpha(code) || code == Char.Underscore || isDigit(code);
      case Char.W:
        return !(isAlpha(code) || code == Char.Underscore || isDigit(code));
      case Char.s:
        return isWhitespace(code);
      case Char.S:
        return !isWhitespace(code);
      case Char.t:
        return code == Char.HorizontalTab;
      case Char.r:
        return code == Char.CarriageReturn;
      case Char.n:
        return code == Char.LineFeed;
      case Char.v:
        return code == Char.VerticalTab;
      case Char.f:
        return code == Char.FormFeed;

      default:
        throw new Error(
          "unsupported character class - " + String.fromCharCode(this.charClass)
        );
    }
  }
}

export class CharacterSetMatcher extends Matcher {
  constructor(public matchers: Matcher[], public negated: bool) {
    super(MatcherType.CharacterSet);
  }

  matches(code: u32): bool {
    let match: bool = false;
    for (let i = 0, len = this.matchers.length; i < len; i++) {
      let matcher = this.matchers[i];
      switch (matcher.type) {
        case MatcherType.Character:
          match = (matcher as CharacterMatcher).matches(code);
          break;

        case MatcherType.CharacterRange:
          match = (matcher as CharacterRangeMatcher).matches(code);
          break;

        case MatcherType.CharacterClass:
          match = (matcher as CharacterClassMatcher).matches(code);
          break;

        case MatcherType.CharacterSet:
          match = (matcher as CharacterSetMatcher).matches(code);
          break;
      }
      if (match) break;
    }
    return this.negated ? !match : match;
  }
}
