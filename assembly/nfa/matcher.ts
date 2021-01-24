import { isDigit, isAlpha, isWhitespace, Char } from "../char";

import {
  CharacterNode,
  CharacterSetNode,
  CharacterClassNode,
} from "../parser/node";

export abstract class Matcher {
  abstract matches(code: u32): bool;

  static fromCharacterClassNode(
    node: CharacterClassNode
  ): CharacterClassMatcher {
    return new CharacterClassMatcher(node.charClass);
  }

  static fromCharacterSetNode(node: CharacterSetNode): CharacterSetMatcher {
    return new CharacterSetMatcher(node.chars, node.negated);
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

export class CharacterSetMatcher extends Matcher {
  constructor(public set: string, public negated: bool) {
    super();
  }

  matchesSet(set: string, code: u32): bool {
    for (let i = 0, len = set.length; i < len; i++) {
      // TODO - perform the set parsing logic in the constructor?
      // TODO - move into the parser?
      if (i < len - 2 && set.charCodeAt(i + 1) == 45 /*-*/) {
        const from = set.charCodeAt(i) as u32;
        const to = set.charCodeAt(i + 2) as u32;
        if (code >= from && code <= to) return true;
      } else {
        if (set.charCodeAt(i) == code) return true;
      }
    }
    return false;
  }

  matches(code: u32): bool {
    const matches = this.matchesSet(this.set, code);
    return this.negated ? !matches : matches;
  }
}
