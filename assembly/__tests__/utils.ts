import { RegExp, Match } from "..";

export function expectMatch(
  regex: string,
  arr: string[],
  flags: string = ""
): void {
  let regexp = new RegExp(regex, flags);
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const match = exec(regexp, value);
    expect(match.matches[0]).toStrictEqual(value);
  }
}

export function expectNotMatch(
  regex: string,
  arr: string[],
  flags: string = ""
): void {
  let regexp = new RegExp(regex, flags);
  for (let i = 0; i < arr.length; i++) {
    const match = regexp.exec(arr[i]);
    expect(match).toBeNull(
      "string: " + arr[i] + " should not match regex: " + regex
    );
  }
}

export function exec<T = string>(
  regex: T,
  value: string,
  flags: string = ""
): Match {
  let regexp: RegExp;
  if (regex instanceof RegExp) {
    regexp = regex;
  } else if (isString<T>()) {
    // @ts-ignore
    regexp = new RegExp(<string>regex, flags);
  } else {
    ERROR("Only RegExp and string are valid types");
  }
  // @ts-ignore
  let res = regexp.exec(value);
  // @ts-ignore
  expect(res).not.toBe(
    null,
    // @ts-ignore
    "string: " + value + " should match regex: " + regexp.toString()
  );
  return <Match>res;
}
