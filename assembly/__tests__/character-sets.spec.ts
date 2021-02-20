import { expectMatch, expectNotMatch } from "./utils";

it("throws an error if no closing bracket is found", () => {
  // expect(() => new RegExp("[abce")).toThrow();
});

it("matches discrete characters", () => {
  expectMatch("[abce]", ["a", "b", "c", "e"]);
  expectNotMatch("[abce]", ["", "f", "h"]);
});

it("matches character ranges", () => {
  expectMatch("[a-c]", ["a", "b", "c"]);
  expectNotMatch("[a-c]", ["d", "e", ""]);
  expectMatch("[K-M]", ["K", "L", "M"]);
  expectNotMatch("[K-M]", ["9", "J"]);
  expectMatch("[0-9]", ["0", "9"]);
  expectNotMatch("[0-9]", ["a", "A"]);
});

it("matches multiple ranges", () => {
  expectMatch("[a-ce-f]", ["a", "b", "c", "e", "f"]);
  expectNotMatch("[a-ce-f]", ["d"]);
});

it("supports closing brackets", () => {
  expectMatch("[]a]", ["]", "a"]);
});

it("supports negated sets", () => {
  expectNotMatch("[^a-c]", ["a", "b", "c"]);
  expectMatch("[^a-c]", ["d", "e"]);
  expectNotMatch("[^a-ce-f]", ["a", "b", "c", "e", "f"]);
  expectMatch("[^a-ce-f]", ["d"]);
});

it("treats - as a literal", () => {
  expectMatch("[-abc]", ["-", "a", "b", "c"]);
  expectMatch("[abc-]", ["-", "a", "b", "c"]);
});

it("treats - as a literal in negated sets", () => {
  expectNotMatch("[^-abc]", ["-", "a", "b", "c"]);
  expectMatch("[^-abc]", ["1", "A"]);
});

it("supports case insensitive matching", () => {
  // simple ranges
  expectMatch("[a-c]", ["A", "C", "a", "c"], "i");
  expectNotMatch("[a-c]", ["D", "d"], "i");
  // complex
  expectMatch("[W-c]", ["W", "w", "C", "c"], "i");
  expectNotMatch("[W-c]", ["V", "v", "D", "d"], "i");
});
