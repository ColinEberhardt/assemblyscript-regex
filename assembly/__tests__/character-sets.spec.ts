import { RegExp } from "..";
import { expectMatch, expectNotMatch, exec } from "./utils";

it("dot", () => {
  expectMatch(".", [" ", "B", "|", "9"]);
  expectNotMatch(".", ["", "\n"]);
});

it("digit", () => {
  expectMatch("\\d", ["0", "9"]);
  expectNotMatch("\\d", ["", "b"]);
});

it("non-digit", () => {
  expectNotMatch("\\D", ["0", "9", ""]);
  expectMatch("\\D", ["b", "|"]);
});

it("word", () => {
  expectMatch("\\w", ["A", "a", "Z", "z", "0", "9", "_"]);
  expectNotMatch("\\w", ["", "$"]);
});

it("not word", () => {
  expectNotMatch("\\W", ["A", "a", "Z", "z", "0", "9", "_", ""]);
  expectMatch("\\W", ["&", "$"]);
});

it("whitespace", () => {
  expectMatch("\\s", ["\f", "\n", "\r", "\t", "\v"]);
  expectNotMatch("\\s", ["", "a", "0"]);
});

it("not whitespace", () => {
  expectNotMatch("\\S", ["", "\f", "\n", "\r", "\t", "\v"]);
  expectMatch("\\S", ["a", "0"]);
});

it("tab, cr, lf, vt, ff", () => {
  expectMatch("\\t", ["\t"]);
  expectMatch("\\r", ["\r"]);
  expectMatch("\\n", ["\n"]);
  expectMatch("\\v", ["\v"]);
  expectMatch("\\f", ["\f"]);
  expectNotMatch("\\t", ["a", " ", ""]);
});

it("escaped dot", () => {
  expectMatch("\\.", ["."]);
  expectNotMatch("\\.", ["", "a"]);
});

it("unrecognised character classes are treated as characters", () => {
  expectMatch("\\g\\m", ["gm"]);
});
