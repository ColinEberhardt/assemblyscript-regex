import { isDigit, isAlpha, isWhitespace, Char } from "../char";

import {
  CharacterNode,
  CharacterSetNode,
  CharacterClassNode,
  CharacterRangeNode,
} from "../parser/node";
import { Match } from "../regexp";

export class Matcher {
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
    const matchers = new Array<Matcher>();
    for (let i = 0; i < node.expressions.length; i++) {
      const exp = node.expressions[i];
      if (CharacterRangeNode.is(exp)) {
        matchers.push(
          Matcher.fromCharacterRangeNode(exp as CharacterRangeNode)
        );
      } else if (CharacterNode.is(exp)) {
        matchers.push(Matcher.fromCharacterNode(exp as CharacterNode));
      } else {
        throw new Error("unsupported node type within character set");
      }
    }
    return new CharacterSetMatcher(matchers, node.negated);
  }

  static fromCharacterNode(node: CharacterNode): CharacterMatcher {
    return new CharacterMatcher(node.char);
  }
}

export class CharacterMatcher extends Matcher {
  constructor(public character: Char) {
    super();
  }

  matches(code: u32): bool {
    return this.character == code;
  }
}

export class CharacterRangeMatcher extends Matcher {
  constructor(public from: u32, public to: u32) {
    super();
  }

  matches(code: u32): bool {
    return code >= this.from && code <= this.to;
  }
}

export class CharacterClassMatcher extends Matcher {
  constructor(public charClass: Char) {
    super();
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

// no closure support
let _code: u32;

export class CharacterSetMatcher extends Matcher {
  constructor(public matchers: Matcher[], public negated: bool) {
    super();
  }

  matches(code: u32): bool {
    _code = code;
    if (!this.negated) {
      return this.matchers.some((m) => m.matches(_code));
    } else {
      return !this.matchers.some((m) => m.matches(_code));
    }
  }
}
