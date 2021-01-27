import { expectMatch, expectNotMatch, exec} from "./utils";

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
  let match = exec("a*", "aaaaa");
  expect(match).not.toBeNull();
  expect(match.matches[0]).toStrictEqual("aaaaa");
});

it("one or more is greedy", () => {
  let match = exec("a+", "aaaaa");
  log(match);
  expect(match).not.toBeNull();
  expect(match.matches[0]).toStrictEqual("aaaaa");
});