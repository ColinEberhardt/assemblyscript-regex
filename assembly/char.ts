// @ts-ignore
@lazy
export const enum Char {
  None = -1,
  HorizontalTab = 0x09,
  LineFeed = 0x0a,
  VerticalTab = 0x0b,
  FormFeed = 0x0c,
  CarriageReturn = 0x0d,
  Space = 0x20,
  Dollar = 0x24, // "$"
  LeftParenthesis = 0x28,
  RightParenthesis = 0x29,
  Asterisk = 0x2a, // "*"
  Plus = 0x2b, // "+"
  Comma = 0x2c, // "*"
  Minus = 0x2d, // "-"
  Dot = 0x2e, // "."
  Zero = 0x30,
  Nine = 0x39,
  Colon = 0x3a,
  Question = 0x3f, // "?"
  A = 0x41,
  D = 0x44,
  S = 0x53,
  W = 0x57,
  Z = 0x5a,
  LeftSquareBracket = 0x5b, // "["
  Backslash = 0x5c, // "\"
  RightSquareBracket = 0x5d, // "]"
  Caret = 0x5e, // "^"
  Underscore = 0x5f,
  a = 0x61,
  d = 0x64,
  f = 0x66,
  n = 0x6e,
  r = 0x72,
  s = 0x73,
  t = 0x74,
  u = 0x75,
  v = 0x76,
  w = 0x77,
  x = 0x78,
  z = 0x7a,
  LeftCurlyBrace = 0x7b /* { */,
  VerticalBar = 0x7c /* | */,
  RightCurlyBrace = 0x7d /* { */,
  NonBreakingSpace = 0xa0,
}

// @ts-ignore 
@inline
function inRange(value: u32, from: u32, to: u32): bool {
  if (ASC_TARGET == 1) {
    // makes use of unsigned integer operations, making this
    // approach a little faster when compiled to WASM
    return value - from < (to - from + 1);
  } else {
    return value >= from && value <= to;
  }
}

export function isDigit(code: u32): bool {
  return inRange(code, Char.Zero, Char.Nine);
}

export function isHexadecimalDigit(code: u32): bool {
  return isDigit(code) || inRange(code, Char.a, Char.f);
}

export function isLowercaseAlpha(code: u32): bool {
  return inRange(code, Char.a, Char.z);
}

export function isUppercaseAlpha(code: u32): bool {
  return inRange(code, Char.A, Char.Z);
}

export function isAlpha(code: u32): bool {
  if (ASC_TARGET == 1) {
    return (code | 32) - Char.a < 26;
  } else {
    return inRange(code, Char.a, Char.z) || inRange(code, Char.A, Char.Z);
  }
}

export function isWhitespace(code: u32): bool {
  switch (code) {
    case Char.Space:
    case Char.HorizontalTab:
    case Char.VerticalTab:
    case Char.FormFeed:
    case Char.LineFeed:
    case Char.CarriageReturn:
    case Char.NonBreakingSpace:
    case 0x1680: // <LS> (1)
    case 0x2028: // <LS> (2)
    case 0x2029: // <PS>
    case 0x202f: // <NNS>
    case 0x205f: // <MMSP>
    case 0x3000: // <IS>
    case 0xfeff:
      return true; // <ZWNBSP>
  }
  if (inRange(code, 0x2000, 0x200a)) {
    return true;
  }
  return false;
}
