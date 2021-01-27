export const enum Char {
  None = -1,
  HorizontalTab = 0x09,
  VerticalTab = 0x0b,
  FormFeed = 0x0c,
  CarriageReturn = 0x0d,
  LineFeed = 0x0a,
  Dollar = 0x24, // "$"
  LeftParenthesis = 0x28,
  RightParenthesis = 0x29,
  Asterisk = 0x2a, // "*"
  Plus = 0x2b, // "+"
  Comma = 0x2c, // "*"
  Minus = 0x2d, // "-"
  Dot = 0x2e, // "."
  Zero = 0x30,
  Question = 0x3f, // "?"
  A = 0x41,
  D = 0x44,
  S = 0x53,
  W = 0x57,
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
  v = 0x76,
  w = 0x77,
  x = 0x78,
  LeftCurlyBrace = 0x7b /* { */,
  VerticalBar = 0x7c /* | */,
  RightCurlyBrace = 0x7d /*  */,
}

export function isDigit(code: u32): bool {
  return code - Char.Zero < 10;
}

export function isLowercaseAlpha(code: u32): bool {
  return code - Char.a < 26;
}

export function isUppercaseAlpha(code: u32): bool {
  return code - Char.A < 26;
}

export function isAlpha(code: u32): bool {
  return (code | 32) - Char.a < 26;
}

export function isWhitespace(code: u32): bool {
  if (code < 0x1680) {
    // < <LS> (1)
    // <SP>, <TAB>, <LF>, <VT>, <FF>, <CR> and <NBSP>
    // @ts-ignore: cast
    return ((code | 0x80) == 0xa0) | (code - 0x09 <= 0x0d - 0x09);
  }
  if (code - 0x2000 <= 0x200a - 0x2000) return true;
  switch (code) {
    case 0x1680: // <LS> (1)
    case 0x2028: // <LS> (2)
    case 0x2029: // <PS>
    case 0x202f: // <NNS>
    case 0x205f: // <MMSP>
    case 0x3000: // <IS>
    case 0xfeff:
      return true; // <ZWNBSP>
  }
  return false;
}
