export const enum CharClass {
  None = -1,

  Dot    = 0x2E, // "."
  Dollar = 0x24, // "$"
  Caret  = 0x5E, // "^"

  D = 0x44,
  S = 0x53,
  W = 0x57,
  d = 0x64,
  f = 0x66,
  n = 0x6e,
  r = 0x72,
  s = 0x73,
  t = 0x74,
  v = 0x76,
  w = 0x77,
}

export const enum QuantifierClass {
  Star     = 0x2A, // "*"
  Plus     = 0x2B, // "+"
  Question = 0x3F, // "?"
}

export function isDigit(code: u32): bool {
  return code - 48 < 10;
}

export function isLowercaseAlpha(code: u32): bool {
  return code - 97 < 26;
}

export function isUppercaseAlpha(code: u32): bool {
  return code - 65 < 26;
}

export function isAlpha(code: u32): bool {
  return (code | 32) - 97 < 26;
}

export function isUnderscore(code: u32): bool {
  return code == 95;
}

export function isWhitespace(code: u32): bool {
  if (code < 0x1680) { // < <LS> (1)
    // <SP>, <TAB>, <LF>, <VT>, <FF>, <CR> and <NBSP>
    // @ts-ignore: cast
    return ((code | 0x80) == 0xA0) | (code - 0x09 <= 0x0D - 0x09);
  }
  if (code - 0x2000 <= 0x200A - 0x2000) return true;
  switch (code) {
    case 0x1680: // <LS> (1)
    case 0x2028: // <LS> (2)
    case 0x2029: // <PS>
    case 0x202F: // <NNS>
    case 0x205F: // <MMSP>
    case 0x3000: // <IS>
    case 0xFEFF: return true; // <ZWNBSP>
  }
  return false;
}
