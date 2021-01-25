const { RegExp, expectNotMatch, expectMatch, matches } = require("./util");

it("handles single quantifier", () => {
  expectMatch("a{2}", ["aa"]);
  expectMatch("ba{2}", ["baa"]);
  expectMatch("ba{1}b", ["bab"]);
});

it("handles open upper bound quantifiers", () => {
  expectMatch("a{2,}", ["aa", "aaaaa"]);
  expectMatch("ba{2,}", ["baa", "baaaaaaa"]);
  expectMatch("ba{1,}b", ["bab", "baaaaaab"]);
});

it("handles explicit upper bound quantifiers", () => {
  const match = matches("a{2,4}", "aaaaaaaaaa");
  expect(match.matches[0]).toEqual("aaaa");
});

it("handles zero value quantifier", () => {
  expectMatch("ba{0}b", ["bb"]);
});

it("handles quantifiers within alternates", () => {
  expectMatch("a{2}|b{2}", ["bb", "aa"]);
  expectNotMatch("a{2}|b{2}", ["cc"]);
});
