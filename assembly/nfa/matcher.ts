import { isDigit, isAlpha, isWhitespace, Char } from "../char";

import {
  CharacterNode,
  CharacterSetNode,
  CharacterClassNode,
  CharacterRangeNode,
  NodeType,
} from "../parser/node";
import { Flags } from "../regexp";

const enum MatcherType {
  Character,
  CharacterRange,
  CharacterClass,
  CharacterSet,
}

let _flags: Flags;

export class Matcher {
  constructor(readonly type: MatcherType) {}

  matches(code: u32): bool {
    return false;
  }

  static fromCharacterClassNode(
    node: CharacterClassNode,
    flags: Flags
  ): CharacterClassMatcher {
    return new CharacterClassMatcher(node.charClass, flags.dotAll);
  }

  static fromCharacterRangeNode(
    node: CharacterRangeNode,
    flags: Flags
  ): CharacterRangeMatcher {
    return new CharacterRangeMatcher(node.from, node.to, flags.ignoreCase);
  }

  static fromCharacterSetNode(
    node: CharacterSetNode,
    flags: Flags
  ): CharacterSetMatcher {
    _flags = flags;
    const matchers = node.expressions.map<Matcher>((exp) => {
      switch (exp.type) {
        case NodeType.CharacterRange:
          return Matcher.fromCharacterRangeNode(
            exp as CharacterRangeNode,
            _flags
          );
        case NodeType.Character:
          return Matcher.fromCharacterNode(exp as CharacterNode, _flags);
        case NodeType.CharacterClass:
          return Matcher.fromCharacterClassNode(
            exp as CharacterClassNode,
            _flags
          );
        default:
          throw new Error("unsupported node type within character set");
      }
    });
    return new CharacterSetMatcher(matchers, node.negated);
  }

  static fromCharacterNode(
    node: CharacterNode,
    flags: Flags
  ): CharacterMatcher {
    return new CharacterMatcher(node.char, flags.ignoreCase);
  }
}

export class CharacterMatcher extends Matcher {
  constructor(private character: Char, private ignoreCase: bool) {
    super(MatcherType.Character);
    if (ignoreCase) {
      this.character |= 0x20;
    }
  }

  matches(code: u32): bool {
    if (this.ignoreCase) {
      code |= 0x20;
    }
    return this.character == code;
  }
}

export class CharacterRangeMatcher extends Matcher {
  constructor(private from: u32, private to: u32, private ignoreCase: bool) {
    super(MatcherType.CharacterRange);
    if (ignoreCase) {
      this.from |= 0x20;
      this.to |= 0x20;
    }
  }

  matches(code: u32): bool {
    if (this.ignoreCase) {
      code |= 0x20;
    }
    return code >= this.from && code <= this.to;
  }
}

export class CharacterClassMatcher extends Matcher {
  constructor(public charClass: Char, private dotAll: bool) {
    super(MatcherType.CharacterClass);
  }

  matches(code: u32): bool {
    switch (this.charClass) {
      case Char.d:
        return isDigit(code);
      case Char.D:
        return !isDigit(code);
      case Char.Dot:
        return this.dotAll
          ? true
          : code != Char.CarriageReturn &&
              code != Char.LineFeed &&
              code != 8232 &&
              code != 8233;
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
