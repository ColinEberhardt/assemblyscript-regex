const { RegExp, expectNotMatch, expectMatch, matches } = require("./util");

it("matches empty strings", () => {
  expectMatch("a?", [""]);
  expectMatch("a*", [""]);
});

it("zero or one", () => {
  expectMatch("a?", ["a"]);
  // expectNotMatch("a?", ["bc"]);
});

it("one or more", () => {
  expectMatch("a+", ["a", "aa"]);
  expectNotMatch("a+", [""]);
});

it("zero or more", () => {
  expectMatch("a*", ["aa", "aaaa"]);
});

it("multiple rules", () => {
  expectMatch("a*b", ["b", "ab", "aaaab"]);
  expectNotMatch("a*b", ["aaaad"]);
});

it("zero or more is greedy", () => {
  let match = matches("a*", "aaaaa");
  expect(match).not.toBeNull();
  expect(match.matches[0]).toEqual("aaaaa");
});

it("one or more is greedy", () => {
  let match = matches("a+", "aaaaa");
  expect(match).not.toBeNull();
  expect(match.matches[0]).toEqual("aaaaa");
});
