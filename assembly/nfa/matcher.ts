import {
  isDigit,
  isAlpha,
  isUnderscore,
  isWhitespace,
  CharClass,
} from "./characters";

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
  constructor(public character: CharClass) {
    super();
  }

  matches(code: u32): bool {
    return this.character == code;
  }
}

export class CharacterClassMatcher extends Matcher {
  constructor(public charClass: CharClass) {
    super();
  }

  matches(code: u32): bool {
    switch (this.charClass) {
      case CharClass.d:
        return isDigit(code);
      case CharClass.D:
        return !isDigit(code);
      case CharClass.Dot:
        return code != 13 && code != 10 && code != 8232 && code != 8233;
      case CharClass.w:
        return isAlpha(code) || isUnderscore(code) || isDigit(code);
      case CharClass.W:
        return !(isAlpha(code) || isUnderscore(code) || isDigit(code));
      case CharClass.s:
        return isWhitespace(code);
      case CharClass.S:
        return !isWhitespace(code);
      case CharClass.t:
        return code == 9;
      case CharClass.r:
        return code == 13;
      case CharClass.n:
        return code == 10;
      case CharClass.v:
        return code == 11;
      case CharClass.f:
        return code == 12;

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
