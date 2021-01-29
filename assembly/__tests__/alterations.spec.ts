import { expectMatch, expectNotMatch } from "./utils";

it("or", () => {
  expectMatch("a|b", ["b", "a"]);
  expectNotMatch("a|b", ["c"]);
  expectMatch("a|br", ["br", "a"]);
  expectNotMatch("a|br", ["b", "c"]);
});

it("or multi-term", () => {
  expectMatch("a|b|c", ["b", "a", "c"]);
  expectNotMatch("a|b|c", ["d"]);
  expectMatch("a|br|pc", ["br", "a", "pc"]);
  expectNotMatch("a|br|pc", ["b", "pr"]);
});
