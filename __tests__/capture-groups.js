const { RegExp, expectNotMatch, expectMatch, matches } = require("./util");

it("supports capture groups", () => {
  let match = matches("a(\\d)a", "a3a");
  expect(match.index).toEqual(0);
  expect(match.input).toEqual("a3a");
  expect(match.matches[0]).toEqual("a3a");
  expect(match.matches[1]).toEqual("3");

  match = matches("a(\\d)a", "  a3a");
  expect(match.index).toEqual(2);
  expect(match.input).toEqual("  a3a");
  expect(match.matches[0]).toEqual("a3a");
  expect(match.matches[1]).toEqual("3");

  match = matches("a(\\d*)a", "a3456a");
  expect(match.index).toEqual(0);
  expect(match.input).toEqual("a3456a");
  expect(match.matches[0]).toEqual("a3456a");
  expect(match.matches[1]).toEqual("3456");

  match = matches("a*(\\d*)(a*)", "aaa456aaa");
  expect(match.index).toEqual(0);
  expect(match.input).toEqual("aaa456aaa");
  expect(match.matches[0]).toEqual("aaa456aaa");
  expect(match.matches[1]).toEqual("456");
  expect(match.matches[2]).toEqual("aaa");
});

it.skip("should not return captured values for non-matching alternations", () => {
  const match = matches("(a|b)c|a(b|c)", "ab");
  expect(match.matches[0]).toEqual("ab");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("b");
});
