import {
  isDigit,
  isUnderscore,
  isUppercaseAlpha,
  isLowercaseAlpha,
  isWhitespace
} from "./characters";
import { CharacterClassNode, CharacterNode, CharacterSetNode } from "../parser/node";

export abstract class Matcher {
  abstract matches(value: string): bool;

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
  character: string;

  constructor(character: string) {
    super();
    this.character = character;
  }

  matches(character: string): bool {
    return this.character == character;
  }
}

export class CharacterClassMatcher extends Matcher {
  charClass: string;

  constructor(charClass: string) {
    super();
    this.charClass = charClass;
  }

  matches(symbol: string): bool {
    const code = symbol.charCodeAt(0);
    if (this.charClass == "d") {
      return isDigit(code);
    }
    if (this.charClass == "D") {
      return !isDigit(code);
    }
    if (this.charClass == ".") {
      return code != 13 && code != 10 && code != 8232 && code != 8233;
    }
    if (this.charClass == "w") {
      return (
        isLowercaseAlpha(code) ||
        isUppercaseAlpha(code) ||
        isUnderscore(code) ||
        isDigit(code)
      );
    }
    if (this.charClass == "W") {
      return !(
        isLowercaseAlpha(code) ||
        isUppercaseAlpha(code) ||
        isUnderscore(code) ||
        isDigit(code)
      );
    }
    if (this.charClass == "s") {
      return isWhitespace(code);
    }
    if (this.charClass == "S") {
      return !isWhitespace(code);
    }
    if (this.charClass == "t") {
      return code == 9;
    }
    if (this.charClass == "r") {
      return code == 13;
    }
    if (this.charClass == "n") {
      return code == 10;
    }
    if (this.charClass == "v") {
      return code == 11;
    }
    if (this.charClass == "f") {
      return code == 12;
    }

    throw new Error("unsupported character class - " + this.charClass);
  }
}

export class CharacterSetMatcher extends Matcher {
  set: string;
  negated: bool;

  constructor(set: string, negated: bool) {
    super();
    this.set = set;
    this.negated = negated;
  }

  matchesSet(set: string, char: i32): bool {
    for (let i = 0; i < set.length; i++) {
      // TODO - perform the set parsing logic in the constructor?
      // TODO - move into the parser?
      if (i < set.length - 2 && set.charAt(i + 1) == "-") {
        const from = set.charCodeAt(i);
        const to = set.charCodeAt(i + 2);
        if (char >= from && char <= to) return true;
      } else {
        if (set.charCodeAt(i) == char) return true;
      }
    }
    return false;
  }

  matches(value: string): bool {
    const char = value.charCodeAt(0);
    const matches = this.matchesSet(this.set, char);
    return this.negated ? !matches : matches;
  }
}
