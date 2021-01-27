import { expectMatch, expectNotMatch } from "./utils";

it("single character", () => {
  expectMatch("a", ["a"]);
  expectNotMatch("a", ["fish", ""]);
});

it("concatenation", () => {
  expectMatch("ab", ["ab"]);
  expectNotMatch("ab", ["aac", "aa", ""]);
});
