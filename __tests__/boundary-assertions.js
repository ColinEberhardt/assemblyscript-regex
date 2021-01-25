const { RegExp, expectNotMatch, expectMatch, matches } = require("./util");

it("matches end of string", () => {
  const regex = new RegExp("a$");
  const match = regex.exec("ba");
  expect(match.index).toEqual(1);
  expect(match.matches[0]).toEqual("a");
  expectNotMatch("a$", ["ab"]);
});

it("matches start of string", () => {
  expectMatch("^a", ["a"]);
  expectNotMatch("^a", ["ba"]);
});

it("handles escaped boundaries", () => {
  expectMatch("\\^a", ["^a"]);
  expectMatch("a\\$", ["a$"]);
});
