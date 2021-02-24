import { expectMatch, expectNotMatch, exec } from "./utils";

it("supports capture groups", () => {
  let match = exec("a(\\d)a", "a3a");
  expect(match.index).toBe(0);
  expect(match.input).toBe("a3a");
  expect(match.matches[0]).toBe("a3a");
  expect(match.matches[1]).toBe("3");

  match = exec("a(\\d)a", "  a3a");
  expect(match.index).toBe(2);
  expect(match.input).toBe("  a3a");
  expect(match.matches[0]).toBe("a3a");
  expect(match.matches[1]).toBe("3");

  match = exec("a(\\d*)a", "a3456a");
  expect(match.index).toBe(0);
  expect(match.input).toBe("a3456a");
  expect(match.matches[0]).toBe("a3456a");
  expect(match.matches[1]).toBe("3456");

  match = exec("a*(\\d*)(a*)", "aaa456aaa");
  expect(match.index).toBe(0);
  expect(match.input).toBe("aaa456aaa");
  expect(match.matches[0]).toBe("aaa456aaa");
  expect(match.matches[1]).toBe("456");
  expect(match.matches[2]).toBe("aaa");
});

it("should not return captured values for non-matching alternations", () => {
  const match = exec("(a|b)c|a(b|c)", "ab");
  expect(match.matches[0]).toBe("ab");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("b");
});

it("repeated capture groups should return the last match", () => {
  const match = exec("([a-c])+", "ac");
  expect(match.matches[0]).toBe("ac");
  expect(match.matches[1]).toBe("c");
});

it("range repitition capture groups should return the last match", () => {
  const match = exec("([a-c]){2}", "ac");
  expect(match.matches[0]).toBe("ac");
  expect(match.matches[1]).toBe("c");
});

it("non-capturing groups should not capture", () => {
  const match = exec("(?:foo)bar(baz)", "foobarbaz");
  expect(match.matches[0]).toBe("foobarbaz");
  expect(match.matches[1]).toBe("baz");
});
