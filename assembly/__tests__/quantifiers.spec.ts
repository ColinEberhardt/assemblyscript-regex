import { expectMatch, expectNotMatch, exec } from "./utils";

it("matches empty strings", () => {
  expectMatch("a?", [""]);
  expectMatch("a*", [""]);
});

it("zero or one", () => {
  expectMatch("a?", ["a"]);
  let match = exec("a?", "bc");
  expect(match).not.toBeNull();
  expect(match.matches[0]).toStrictEqual("");
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
  expect(match).not.toBeNull();
  expect(match.matches[0]).toStrictEqual("aaaaa");
});

describe("non-greedy", () => {
  it("one or more supports non-greedy mode", () => {
    let match = exec("[a-c]+?b", "abb");
    expect(match).not.toBeNull();
    expect(match.matches[0]).toStrictEqual("ab");
  });

  it("zero or more supports non-greedy mode", () => {
    let match = exec("[a-c]*?b", "abb");
    expect(match).not.toBeNull();
    expect(match.matches[0]).toStrictEqual("ab");
  });

  // it("zero or one supports non-greedy mode", () => {
  //   expectMatch("a?", ["a"]);
  //   let match = exec("a??", "bc");
  //   expect(match).not.toBeNull();
  //   expect(match.matches[0]).toStrictEqual("");
  // });
});
