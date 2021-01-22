export function isDigit(code: u32): bool {
  return code - 48 < 10;
}

export function isLowercaseAlpha(code: u32): bool {
  return code - 97 < 26;
}

export function isUppercaseAlpha(code: u32): bool {
  return code - 65 < 26;
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
