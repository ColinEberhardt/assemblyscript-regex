import { expectMatch, expectNotMatch, exec } from "./utils";

it("matches end of string", () => {
  const match = exec("a$", "ba");
  expect(match.index).toBe(1);
  expect(match.matches[0]).toBe("a");
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
