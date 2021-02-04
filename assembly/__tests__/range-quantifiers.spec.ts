/* eslint-disable no-invalid-regexp */
import { RegExp } from "..";
import { expectMatch, expectNotMatch, exec } from "./utils";

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
  const match = exec("a{2,4}", "aaaaaaaaaa");
  expect(match.matches[0]).toBe("aaaa");
});

it("handles zero value quantifier", () => {
  expectMatch("ba{0}b", ["bb"]);
});

it("handles quantifiers within alternates", () => {
  expectMatch("a{2}|b{2}", ["bb", "aa"]);
  expectNotMatch("a{2}|b{2}", ["cc"]);
});

it("handles imcomplete quantifier ", () => {
  expectMatch("a{2", ["a{2"]);
  expectMatch("a{2,", ["a{2,"]);
  expectMatch("a{2,3", ["a{2,3"]);
  expectMatch("a{2,3a", ["a{2,3a"]);
  expectMatch("a{2,3a}", ["a{2,3a}"]);
});

it("handles nested quantifiers", () => {
  expectMatch("(a{3}){2}", ["aaaaaa"]);
});

it("handles nongreedy quantifiers", () => {
  const match = exec("a{2,4}?", "aaaaaaaaaa");
  expect(match.matches[0]).toBe("aa");
});

it("throws if quantifying a quantifier!", () => {
  expect(() => {
    let foo = new RegExp("a{3}{2}");
  }).toThrow();
});
