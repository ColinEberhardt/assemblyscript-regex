const { RegExp, expectNotMatch, expectMatch, matches } = require("./util");

it.skip("should throw with un-supported classes", () => {
  expect(() => new RegExp("\\o")).toThrow();
});

it("dot", () => {
  expectMatch(".", [" ", "B", "|", "9"]);
  expectNotMatch(".", ["", "\n"]);
});

it("digit", () => {
  expectMatch("\\d", ["0", "9"]);
  expectNotMatch("\\d", ["", "b"]);
});

it("non-digit", () => {
  expectNotMatch("\\D", ["0", "9", ""]);
  expectMatch("\\D", ["b", "|"]);
});

it("word", () => {
  expectMatch("\\w", ["A", "a", "Z", "z", "0", "9", "_"]);
  expectNotMatch("\\w", ["", "$"]);
});

it("not word", () => {
  expectNotMatch("\\W", ["A", "a", "Z", "z", "0", "9", "_", ""]);
  expectMatch("\\W", ["&", "$"]);
});

it("whitespace", () => {
  expectMatch("\\s", ["\f", "\n", "\r", "\t", "\v"]);
  expectNotMatch("\\s", ["", "a", "0"]);
});

it("not whitespace", () => {
  expectNotMatch("\\S", ["", "\f", "\n", "\r", "\t", "\v"]);
  expectMatch("\\S", ["a", "0"]);
});

it("tab, cr, lf, vt, ff", () => {
  expectMatch("\\t", ["\t"]);
  expectMatch("\\r", ["\r"]);
  expectMatch("\\n", ["\n"]);
  expectMatch("\\v", ["\v"]);
  expectMatch("\\f", ["\f"]);
  expectNotMatch("\\t", ["a", " ", ""]);
});

it("escaped dot", () => {
  expectMatch("\\.", ["."]);
  expectNotMatch("\\.", ["", "a"]);
});

describe("hexadecimal character encodings", () => {
  it("supports one word character codes", () => {
    expectMatch("\\x42", ["B"]);
    expectMatch("\\x3f", ["?"]);
    expectNotMatch("\\x42", ["a", ""]);
  });

  it("supports two word character codes", () => {
    expectMatch("\\u0042", ["B"]);
    expectMatch("\\u0566", ["զ"]);
  });

  it("if lookahead finds non hex chars, treat as literal", () => {
    expectMatch("\\x4g", ["x4g"]);
    expectMatch("\\u3j", ["u3j"]);
  });

  it("if lookahead finds end of string, treat as literal", () => {
    expectMatch("\\x4", ["x4"]);
  });
});
