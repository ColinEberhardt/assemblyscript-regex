import { isDigit, isAlpha, isWhitespace, Char } from "../char";

import {
  CharacterNode,
  CharacterClassNode,
  CharacterSetNode,
  CharacterRangeNode,
  NodeType,
} from "../parser/node";
import { Flags } from "../regexp";
import { Range } from "../util";

const enum MatcherType {
  Character,
  CharacterRange,
  CharacterSet,
  CharacterClass,
}
export class Matcher {
  @lazy static _flags: Flags;

  constructor(readonly type: MatcherType) {}

  matches(code: u32): bool {
    return false;
  }

  static fromCharacterClassNode(
    node: CharacterSetNode,
    flags: Flags
  ): CharacterSetMatcher {
    return new CharacterSetMatcher(node.charClass, flags.dotAll);
  }

  static fromCharacterRangeNode(
    node: CharacterRangeNode,
    flags: Flags
  ): CharacterRangeMatcher {
    return new CharacterRangeMatcher(
      new Range(node.from, node.to),
      flags.ignoreCase
    );
  }

  static fromCharacterSetNode(
    node: CharacterClassNode,
    flags: Flags
  ): CharacterClassMatcher {
    Matcher._flags = flags;
    const matchers = node.expressions.map<Matcher>((exp) => {
      switch (exp.type) {
        case NodeType.CharacterRange:
          return Matcher.fromCharacterRangeNode(
            exp as CharacterRangeNode,
            Matcher._flags
          );
        case NodeType.Character:
          return Matcher.fromCharacterNode(
            exp as CharacterNode,
            Matcher._flags
          );
        case NodeType.CharacterSet:
          return Matcher.fromCharacterClassNode(
            exp as CharacterSetNode,
            Matcher._flags
          );
        default:
          throw new Error("unsupported node type within character set");
      }
    });
    return new CharacterClassMatcher(matchers, node.negated);
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

// @ts-ignore
@lazy const LOWERCASE_LETTERS = new Range(Char.a, Char.z);
// @ts-ignore
@lazy const UPPERCASE_LETTERS = new Range(Char.A, Char.Z);
// @ts-ignore
@lazy const UPPER_LOWER_OFFSET = Char.a - Char.A;

export class CharacterRangeMatcher extends Matcher {
  private ranges: Range[];

  constructor(private range: Range, ignoreCase: bool) {
    super(MatcherType.CharacterRange);
    this.ranges = [range];

    if (ignoreCase) {
      const lowerIntersect = range.intersection(LOWERCASE_LETTERS);
      if (lowerIntersect) {
        this.ranges.push(lowerIntersect.offset(-UPPER_LOWER_OFFSET));
      }
      const upperIntersect = range.intersection(UPPERCASE_LETTERS);
      if (upperIntersect) {
        this.ranges.push(upperIntersect.offset(UPPER_LOWER_OFFSET));
      }
    }
  }

  matches(code: u32): bool {
    for (let i = 0, len = this.ranges.length; i < len; i++) {
      if (this.ranges[i].contains(code)) {
        return true;
      }
    }
    return false;
  }
}

export class CharacterSetMatcher extends Matcher {
  constructor(public charClass: Char, private dotAll: bool) {
    super(MatcherType.CharacterSet);
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

export class CharacterClassMatcher extends Matcher {
  constructor(public matchers: Matcher[], public negated: bool) {
    super(MatcherType.CharacterClass);
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

        case MatcherType.CharacterSet:
          match = (matcher as CharacterSetMatcher).matches(code);
          break;

        case MatcherType.CharacterClass:
          match = (matcher as CharacterClassMatcher).matches(code);
          break;
      }
      if (match) break;
    }
    return this.negated ? !match : match;
  }
}
