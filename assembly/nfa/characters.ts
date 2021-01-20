export function isDigit(code: i32): bool {
  return code >= 48 && code <= 57;
}

export function isLowercaseAlpha(code: i32): bool {
  return code >= 97 && code <= 122;
}

export function isUppercaseAlpha(code: i32): bool {
  return code >= 65 && code <= 90;
}

export function isUnderscore(code: i32): bool {
  return code == 95;
}

export function isWhitespace(code: i32): bool {
  return (
    (code >= 9 && code <= 13) ||
    code == 32 ||
    code == 0x00a0 ||
    code == 0x1680 ||
    code == 0x2000 ||
    code == 0x200a ||
    code == 0x2028 ||
    code == 0x2029 ||
    code == 0x202f ||
    code == 0x205f ||
    code == 0x3000 ||
    code == 0xfeff
  );
}
