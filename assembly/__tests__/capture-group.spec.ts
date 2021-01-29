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

xit("should not return captured values for non-matching alternations", () => {
  const match = exec("(a|b)c|a(b|c)", "ab");
  expect(match.matches[0]).toBe("ab");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("b");
});
