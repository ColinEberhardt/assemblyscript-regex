/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegExp, Match } from "..";
import { expectMatch, expectNotMatch, exec } from "../__tests__/utils";

it("line: 0 - matches the quick brown fox against 'the quick brown fox'", () => {
  const match = exec("the quick brown fox", "the quick brown fox", "");
  expect(match.matches[0]).toBe("the quick brown fox");
});
it("line: 1 - matches the quick brown fox against 'The quick brown FOX'", () => {
  expectNotMatch("the quick brown fox", ["The quick brown FOX"]);
});
it("line: 2 - matches the quick brown fox against 'What do you know about the quick brown fox?'", () => {
  const match = exec(
    "the quick brown fox",
    "What do you know about the quick brown fox?",
    ""
  );
  expect(match.matches[0]).toBe("the quick brown fox");
});
it("line: 3 - matches the quick brown fox against 'What do you know about THE QUICK BROWN FOX?'", () => {
  expectNotMatch("the quick brown fox", [
    "What do you know about THE QUICK BROWN FOX?",
  ]);
});
it("line: 4 - matches The quick brown fox against 'the quick brown fox'", () => {
  const match = exec("The quick brown fox", "the quick brown fox", "i");
  expect(match.matches[0]).toBe("the quick brown fox");
});
it("line: 5 - matches The quick brown fox against 'The quick brown FOX'", () => {
  const match = exec("The quick brown fox", "The quick brown FOX", "i");
  expect(match.matches[0]).toBe("The quick brown FOX");
});
it("line: 6 - matches The quick brown fox against 'What do you know about the quick brown fox?'", () => {
  const match = exec(
    "The quick brown fox",
    "What do you know about the quick brown fox?",
    "i"
  );
  expect(match.matches[0]).toBe("the quick brown fox");
});
it("line: 7 - matches The quick brown fox against 'What do you know about THE QUICK BROWN FOX?'", () => {
  const match = exec(
    "The quick brown fox",
    "What do you know about THE QUICK BROWN FOX?",
    "i"
  );
  expect(match.matches[0]).toBe("THE QUICK BROWN FOX");
});
it("line: 9 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("abxyzpqrrrabbxyyyypqAzz");
});
it("line: 10 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("abxyzpqrrrabbxyyyypqAzz");
});
it("line: 11 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aabxyzpqrrrabbxyyyypqAzz");
});
it("line: 12 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabxyzpqrrrabbxyyyypqAzz");
});
it("line: 13 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaaabxyzpqrrrabbxyyyypqAzz");
});
it("line: 14 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abcxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("abcxyzpqrrrabbxyyyypqAzz");
});
it("line: 15 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabcxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aabcxyzpqrrrabbxyyyypqAzz");
});
it("line: 16 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypAzz");
});
it("line: 17 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypqAzz");
});
it("line: 18 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypqqAzz");
});
it("line: 19 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypqqqAzz");
});
it("line: 20 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypqqqqAzz");
});
it("line: 21 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqqqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypqqqqqAzz");
});
it("line: 22 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqqqqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypqqqqqqAzz");
});
it("line: 23 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaaabcxyzpqrrrabbxyyyypqAzz");
});
it("line: 24 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abxyzzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("abxyzzpqrrrabbxyyyypqAzz");
});
it("line: 25 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabxyzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabxyzzzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aabxyzzzpqrrrabbxyyyypqAzz");
});
it("line: 26 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabxyzzzzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabxyzzzzpqrrrabbxyyyypqAzz");
});
it("line: 27 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabxyzzzzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaaabxyzzzzpqrrrabbxyyyypqAzz");
});
it("line: 28 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abcxyzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abcxyzzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("abcxyzzpqrrrabbxyyyypqAzz");
});
it("line: 29 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabcxyzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabcxyzzzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aabcxyzzzpqrrrabbxyyyypqAzz");
});
it("line: 30 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzzzzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabcxyzzzzpqrrrabbxyyyypqAzz");
});
it("line: 31 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzzzzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaaabcxyzzzzpqrrrabbxyyyypqAzz");
});
it("line: 32 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzzzzpqrrrabbbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaaabcxyzzzzpqrrrabbbxyyyypqAzz");
});
it("line: 33 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbbxyyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzzzzpqrrrabbbxyyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaaabcxyzzzzpqrrrabbbxyyyyypqAzz");
});
it("line: 34 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypABzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypABzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypABzz");
});
it("line: 35 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypABBzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypABBzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypABBzz");
});
it("line: 36 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against '>>>aaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    ">>>aaabxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaabxyzpqrrrabbxyyyypqAzz");
});
it("line: 37 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against '>aaaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    ">aaaabxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("aaaabxyzpqrrrabbxyyyypqAzz");
});
it("line: 38 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against '>>>>abcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    ">>>>abcxyzpqrrrabbxyyyypqAzz",
    ""
  );
  expect(match.matches[0]).toBe("abcxyzpqrrrabbxyyyypqAzz");
});
it("line: 39 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrabbxyyyypqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "abxyzpqrrabbxyyyypqAzz",
  ]);
});
it("line: 40 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrrrabbxyyyypqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "abxyzpqrrrrabbxyyyypqAzz",
  ]);
});
it("line: 41 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrrabxyyyypqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "abxyzpqrrrabxyyyypqAzz",
  ]);
});
it("line: 42 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbbxyyyyyypqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "aaaabcxyzzzzpqrrrabbbxyyyyyypqAzz",
  ]);
});
it("line: 43 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbbxyyypqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "aaaabcxyzzzzpqrrrabbbxyyypqAzz",
  ]);
});
it("line: 44 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqqqqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "aaabcxyzpqrrrabbxyyyypqqqqqqqAzz",
  ]);
});
it("line: 45 - matches ^(abc){1,2}zz against 'abczz'", () => {
  const match = exec("^(abc){1,2}zz", "abczz", "");
  expect(match.matches[0]).toBe("abczz");
  expect(match.matches[1]).toBe("abc");
});
it("line: 46 - matches ^(abc){1,2}zz against 'abcabczz'", () => {
  const match = exec("^(abc){1,2}zz", "abcabczz", "");
  expect(match.matches[0]).toBe("abcabczz");
  expect(match.matches[1]).toBe("abc");
});
it("line: 47 - matches ^(abc){1,2}zz against 'zz'", () => {
  expectNotMatch("^(abc){1,2}zz", ["zz"]);
});
it("line: 48 - matches ^(abc){1,2}zz against 'abcabcabczz'", () => {
  expectNotMatch("^(abc){1,2}zz", ["abcabcabczz"]);
});
it("line: 49 - matches ^(abc){1,2}zz against '>>abczz'", () => {
  expectNotMatch("^(abc){1,2}zz", [">>abczz"]);
});
it("line: 50 - matches ^(b+?|a){1,2}?c against 'bc'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bc", "");
  expect(match.matches[0]).toBe("bc");
  expect(match.matches[1]).toBe("b");
});
it("line: 51 - matches ^(b+?|a){1,2}?c against 'bbc'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bbc", "");
  expect(match.matches[0]).toBe("bbc");
  expect(match.matches[1]).toBe("b");
});
it("line: 52 - matches ^(b+?|a){1,2}?c against 'bbbc'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bbbc", "");
  expect(match.matches[0]).toBe("bbbc");
  expect(match.matches[1]).toBe("bb");
});
it("line: 53 - matches ^(b+?|a){1,2}?c against 'bac'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bac", "");
  expect(match.matches[0]).toBe("bac");
  expect(match.matches[1]).toBe("a");
});
it("line: 54 - matches ^(b+?|a){1,2}?c against 'bbac'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bbac", "");
  expect(match.matches[0]).toBe("bbac");
  expect(match.matches[1]).toBe("a");
});
it("line: 55 - matches ^(b+?|a){1,2}?c against 'aac'", () => {
  const match = exec("^(b+?|a){1,2}?c", "aac", "");
  expect(match.matches[0]).toBe("aac");
  expect(match.matches[1]).toBe("a");
});
it("line: 56 - matches ^(b+?|a){1,2}?c against 'abbbbbbbbbbbc'", () => {
  const match = exec("^(b+?|a){1,2}?c", "abbbbbbbbbbbc", "");
  expect(match.matches[0]).toBe("abbbbbbbbbbbc");
  expect(match.matches[1]).toBe("bbbbbbbbbbb");
});
it("line: 57 - matches ^(b+?|a){1,2}?c against 'bbbbbbbbbbbac'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bbbbbbbbbbbac", "");
  expect(match.matches[0]).toBe("bbbbbbbbbbbac");
  expect(match.matches[1]).toBe("a");
});
it("line: 58 - matches ^(b+?|a){1,2}?c against 'aaac'", () => {
  expectNotMatch("^(b+?|a){1,2}?c", ["aaac"]);
});
it("line: 59 - matches ^(b+?|a){1,2}?c against 'abbbbbbbbbbbac'", () => {
  expectNotMatch("^(b+?|a){1,2}?c", ["abbbbbbbbbbbac"]);
});
it("line: 60 - matches ^(b+|a){1,2}c against 'bc'", () => {
  const match = exec("^(b+|a){1,2}c", "bc", "");
  expect(match.matches[0]).toBe("bc");
  expect(match.matches[1]).toBe("b");
});
it("line: 61 - matches ^(b+|a){1,2}c against 'bbc'", () => {
  const match = exec("^(b+|a){1,2}c", "bbc", "");
  expect(match.matches[0]).toBe("bbc");
  expect(match.matches[1]).toBe("bb");
});
it("line: 62 - matches ^(b+|a){1,2}c against 'bbbc'", () => {
  const match = exec("^(b+|a){1,2}c", "bbbc", "");
  expect(match.matches[0]).toBe("bbbc");
  expect(match.matches[1]).toBe("bbb");
});
it("line: 63 - matches ^(b+|a){1,2}c against 'bac'", () => {
  const match = exec("^(b+|a){1,2}c", "bac", "");
  expect(match.matches[0]).toBe("bac");
  expect(match.matches[1]).toBe("a");
});
it("line: 64 - matches ^(b+|a){1,2}c against 'bbac'", () => {
  const match = exec("^(b+|a){1,2}c", "bbac", "");
  expect(match.matches[0]).toBe("bbac");
  expect(match.matches[1]).toBe("a");
});
it("line: 65 - matches ^(b+|a){1,2}c against 'aac'", () => {
  const match = exec("^(b+|a){1,2}c", "aac", "");
  expect(match.matches[0]).toBe("aac");
  expect(match.matches[1]).toBe("a");
});
it("line: 66 - matches ^(b+|a){1,2}c against 'abbbbbbbbbbbc'", () => {
  const match = exec("^(b+|a){1,2}c", "abbbbbbbbbbbc", "");
  expect(match.matches[0]).toBe("abbbbbbbbbbbc");
  expect(match.matches[1]).toBe("bbbbbbbbbbb");
});
it("line: 67 - matches ^(b+|a){1,2}c against 'bbbbbbbbbbbac'", () => {
  const match = exec("^(b+|a){1,2}c", "bbbbbbbbbbbac", "");
  expect(match.matches[0]).toBe("bbbbbbbbbbbac");
  expect(match.matches[1]).toBe("a");
});
it("line: 68 - matches ^(b+|a){1,2}c against 'aaac'", () => {
  expectNotMatch("^(b+|a){1,2}c", ["aaac"]);
});
it("line: 69 - matches ^(b+|a){1,2}c against 'abbbbbbbbbbbac'", () => {
  expectNotMatch("^(b+|a){1,2}c", ["abbbbbbbbbbbac"]);
});
it("line: 70 - matches ^(b+|a){1,2}?bc against 'bbc'", () => {
  const match = exec("^(b+|a){1,2}?bc", "bbc", "");
  expect(match.matches[0]).toBe("bbc");
  expect(match.matches[1]).toBe("b");
});
it("line: 71 - matches ^(b*|ba){1,2}?bc against 'babc'", () => {
  const match = exec("^(b*|ba){1,2}?bc", "babc", "");
  expect(match.matches[0]).toBe("babc");
  expect(match.matches[1]).toBe("ba");
});
it("line: 72 - matches ^(b*|ba){1,2}?bc against 'bbabc'", () => {
  const match = exec("^(b*|ba){1,2}?bc", "bbabc", "");
  expect(match.matches[0]).toBe("bbabc");
  expect(match.matches[1]).toBe("ba");
});
it("line: 73 - matches ^(b*|ba){1,2}?bc against 'bababc'", () => {
  const match = exec("^(b*|ba){1,2}?bc", "bababc", "");
  expect(match.matches[0]).toBe("bababc");
  expect(match.matches[1]).toBe("ba");
});
it("line: 74 - matches ^(b*|ba){1,2}?bc against 'bababbc'", () => {
  expectNotMatch("^(b*|ba){1,2}?bc", ["bababbc"]);
});
it("line: 75 - matches ^(b*|ba){1,2}?bc against 'babababc'", () => {
  expectNotMatch("^(b*|ba){1,2}?bc", ["babababc"]);
});
it("line: 76 - matches ^(ba|b*){1,2}?bc against 'babc'", () => {
  const match = exec("^(ba|b*){1,2}?bc", "babc", "");
  expect(match.matches[0]).toBe("babc");
  expect(match.matches[1]).toBe("ba");
});
it("line: 77 - matches ^(ba|b*){1,2}?bc against 'bbabc'", () => {
  const match = exec("^(ba|b*){1,2}?bc", "bbabc", "");
  expect(match.matches[0]).toBe("bbabc");
  expect(match.matches[1]).toBe("ba");
});
it("line: 78 - matches ^(ba|b*){1,2}?bc against 'bababc'", () => {
  const match = exec("^(ba|b*){1,2}?bc", "bababc", "");
  expect(match.matches[0]).toBe("bababc");
  expect(match.matches[1]).toBe("ba");
});
it("line: 79 - matches ^(ba|b*){1,2}?bc against 'bababbc'", () => {
  expectNotMatch("^(ba|b*){1,2}?bc", ["bababbc"]);
});
it("line: 80 - matches ^(ba|b*){1,2}?bc against 'babababc'", () => {
  expectNotMatch("^(ba|b*){1,2}?bc", ["babababc"]);
});
it("line: 91 - matches ^[]cde] against ']thing'", () => {
  const match = exec("^[]cde]", "]thing", "");
  expect(match.matches[0]).toBe("]");
});
it("line: 92 - matches ^[]cde] against 'cthing'", () => {
  const match = exec("^[]cde]", "cthing", "");
  expect(match.matches[0]).toBe("c");
});
it("line: 93 - matches ^[]cde] against 'dthing'", () => {
  const match = exec("^[]cde]", "dthing", "");
  expect(match.matches[0]).toBe("d");
});
it("line: 94 - matches ^[]cde] against 'ething'", () => {
  const match = exec("^[]cde]", "ething", "");
  expect(match.matches[0]).toBe("e");
});
it("line: 95 - matches ^[]cde] against 'athing'", () => {
  expectNotMatch("^[]cde]", ["athing"]);
});
it("line: 96 - matches ^[]cde] against 'fthing'", () => {
  expectNotMatch("^[]cde]", ["fthing"]);
});
it("line: 106 - matches ^[^]cde] against 'athing'", () => {
  const match = exec("^[^]cde]", "athing", "");
  expect(match.matches[0]).toBe("a");
});
it("line: 107 - matches ^[^]cde] against 'fthing'", () => {
  const match = exec("^[^]cde]", "fthing", "");
  expect(match.matches[0]).toBe("f");
});
it("line: 108 - matches ^[^]cde] against ']thing'", () => {
  expectNotMatch("^[^]cde]", ["]thing"]);
});
it("line: 109 - matches ^[^]cde] against 'cthing'", () => {
  expectNotMatch("^[^]cde]", ["cthing"]);
});
it("line: 110 - matches ^[^]cde] against 'dthing'", () => {
  expectNotMatch("^[^]cde]", ["dthing"]);
});
it("line: 111 - matches ^[^]cde] against 'ething'", () => {
  expectNotMatch("^[^]cde]", ["ething"]);
});
it("line: 113 - matches ^� against '�'", () => {
  const match = exec("^�", "�", "");
  expect(match.matches[0]).toBe("�");
});
it("line: 114 - matches ^[0-9]+$ against '0'", () => {
  const match = exec("^[0-9]+$", "0", "");
  expect(match.matches[0]).toBe("0");
});
it("line: 115 - matches ^[0-9]+$ against '1'", () => {
  const match = exec("^[0-9]+$", "1", "");
  expect(match.matches[0]).toBe("1");
});
it("line: 116 - matches ^[0-9]+$ against '2'", () => {
  const match = exec("^[0-9]+$", "2", "");
  expect(match.matches[0]).toBe("2");
});
it("line: 117 - matches ^[0-9]+$ against '3'", () => {
  const match = exec("^[0-9]+$", "3", "");
  expect(match.matches[0]).toBe("3");
});
it("line: 118 - matches ^[0-9]+$ against '4'", () => {
  const match = exec("^[0-9]+$", "4", "");
  expect(match.matches[0]).toBe("4");
});
it("line: 119 - matches ^[0-9]+$ against '5'", () => {
  const match = exec("^[0-9]+$", "5", "");
  expect(match.matches[0]).toBe("5");
});
it("line: 120 - matches ^[0-9]+$ against '6'", () => {
  const match = exec("^[0-9]+$", "6", "");
  expect(match.matches[0]).toBe("6");
});
it("line: 121 - matches ^[0-9]+$ against '7'", () => {
  const match = exec("^[0-9]+$", "7", "");
  expect(match.matches[0]).toBe("7");
});
it("line: 122 - matches ^[0-9]+$ against '8'", () => {
  const match = exec("^[0-9]+$", "8", "");
  expect(match.matches[0]).toBe("8");
});
it("line: 123 - matches ^[0-9]+$ against '9'", () => {
  const match = exec("^[0-9]+$", "9", "");
  expect(match.matches[0]).toBe("9");
});
it("line: 124 - matches ^[0-9]+$ against '10'", () => {
  const match = exec("^[0-9]+$", "10", "");
  expect(match.matches[0]).toBe("10");
});
it("line: 125 - matches ^[0-9]+$ against '100'", () => {
  const match = exec("^[0-9]+$", "100", "");
  expect(match.matches[0]).toBe("100");
});
it("line: 126 - matches ^[0-9]+$ against 'abc'", () => {
  expectNotMatch("^[0-9]+$", ["abc"]);
});
it("line: 127 - matches ^.*nter against 'enter'", () => {
  const match = exec("^.*nter", "enter", "");
  expect(match.matches[0]).toBe("enter");
});
it("line: 128 - matches ^.*nter against 'inter'", () => {
  const match = exec("^.*nter", "inter", "");
  expect(match.matches[0]).toBe("inter");
});
it("line: 129 - matches ^.*nter against 'uponter'", () => {
  const match = exec("^.*nter", "uponter", "");
  expect(match.matches[0]).toBe("uponter");
});
it("line: 130 - matches ^xxx[0-9]+$ against 'xxx0'", () => {
  const match = exec("^xxx[0-9]+$", "xxx0", "");
  expect(match.matches[0]).toBe("xxx0");
});
it("line: 131 - matches ^xxx[0-9]+$ against 'xxx1234'", () => {
  const match = exec("^xxx[0-9]+$", "xxx1234", "");
  expect(match.matches[0]).toBe("xxx1234");
});
it("line: 132 - matches ^xxx[0-9]+$ against 'xxx'", () => {
  expectNotMatch("^xxx[0-9]+$", ["xxx"]);
});
it("line: 133 - matches ^.+[0-9][0-9][0-9]$ against 'x123'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "x123", "");
  expect(match.matches[0]).toBe("x123");
});
it("line: 134 - matches ^.+[0-9][0-9][0-9]$ against 'xx123'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "xx123", "");
  expect(match.matches[0]).toBe("xx123");
});
it("line: 135 - matches ^.+[0-9][0-9][0-9]$ against '123456'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "123456", "");
  expect(match.matches[0]).toBe("123456");
});
it("line: 136 - matches ^.+[0-9][0-9][0-9]$ against '123'", () => {
  expectNotMatch("^.+[0-9][0-9][0-9]$", ["123"]);
});
it("line: 137 - matches ^.+[0-9][0-9][0-9]$ against 'x1234'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "x1234", "");
  expect(match.matches[0]).toBe("x1234");
});
it("line: 138 - matches ^.+?[0-9][0-9][0-9]$ against 'x123'", () => {
  const match = exec("^.+?[0-9][0-9][0-9]$", "x123", "");
  expect(match.matches[0]).toBe("x123");
});
it("line: 139 - matches ^.+?[0-9][0-9][0-9]$ against 'xx123'", () => {
  const match = exec("^.+?[0-9][0-9][0-9]$", "xx123", "");
  expect(match.matches[0]).toBe("xx123");
});
it("line: 140 - matches ^.+?[0-9][0-9][0-9]$ against '123456'", () => {
  const match = exec("^.+?[0-9][0-9][0-9]$", "123456", "");
  expect(match.matches[0]).toBe("123456");
});
it("line: 141 - matches ^.+?[0-9][0-9][0-9]$ against '123'", () => {
  expectNotMatch("^.+?[0-9][0-9][0-9]$", ["123"]);
});
it("line: 142 - matches ^.+?[0-9][0-9][0-9]$ against 'x1234'", () => {
  const match = exec("^.+?[0-9][0-9][0-9]$", "x1234", "");
  expect(match.matches[0]).toBe("x1234");
});
it("line: 148 - matches : against 'Well, we need a colon: somewhere'", () => {
  const match = exec(":", "Well, we need a colon: somewhere", "");
  expect(match.matches[0]).toBe(":");
});
it("line: 149 - matches : against '*** Fail if we don't'", () => {
  expectNotMatch(":", ["*** Fail if we don't"]);
});
it("line: 185 - matches ^(?=ab(de))(abd)(e) against 'abde'", () => {
  const match = exec("^(?=ab(de))(abd)(e)", "abde", "");
  expect(match.matches[0]).toBe("abde");
  expect(match.matches[1]).toBe("de");
  expect(match.matches[2]).toBe("abd");
  expect(match.matches[3]).toBe("e");
});
it("line: 186 - matches ^(?!(ab)de|x)(abd)(f) against 'abdf'", () => {
  const match = exec("^(?!(ab)de|x)(abd)(f)", "abdf", "");
  expect(match.matches[0]).toBe("abdf");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("abd");
  expect(match.matches[3]).toBe("f");
});
it("line: 187 - matches ^(?=(ab(cd)))(ab) against 'abcd'", () => {
  const match = exec("^(?=(ab(cd)))(ab)", "abcd", "");
  expect(match.matches[0]).toBe("ab");
  expect(match.matches[1]).toBe("abcd");
  expect(match.matches[2]).toBe("cd");
  expect(match.matches[3]).toBe("ab");
});
it("line: 195 - matches ^$ against ''", () => {
  const match = exec("^$", "", "");
  expect(match.matches[0]).toBe("");
});
it("line: 206 - matches ^(a(b(c)))(d(e(f)))(h(i(j)))(k(l(m)))$ against 'abcdefhijklm'", () => {
  const match = exec(
    "^(a(b(c)))(d(e(f)))(h(i(j)))(k(l(m)))$",
    "abcdefhijklm",
    ""
  );
  expect(match.matches[0]).toBe("abcdefhijklm");
  expect(match.matches[1]).toBe("abc");
  expect(match.matches[2]).toBe("bc");
  expect(match.matches[3]).toBe("c");
  expect(match.matches[4]).toBe("def");
  expect(match.matches[5]).toBe("ef");
  expect(match.matches[6]).toBe("f");
  expect(match.matches[7]).toBe("hij");
  expect(match.matches[8]).toBe("ij");
  expect(match.matches[9]).toBe("j");
  expect(match.matches[10]).toBe("klm");
  expect(match.matches[11]).toBe("lm");
  expect(match.matches[12]).toBe("m");
});
it("line: 207 - matches ^(?:a(b(c)))(?:d(e(f)))(?:h(i(j)))(?:k(l(m)))$ against 'abcdefhijklm'", () => {
  const match = exec(
    "^(?:a(b(c)))(?:d(e(f)))(?:h(i(j)))(?:k(l(m)))$",
    "abcdefhijklm",
    ""
  );
  expect(match.matches[0]).toBe("abcdefhijklm");
  expect(match.matches[1]).toBe("bc");
  expect(match.matches[2]).toBe("c");
  expect(match.matches[3]).toBe("ef");
  expect(match.matches[4]).toBe("f");
  expect(match.matches[5]).toBe("ij");
  expect(match.matches[6]).toBe("j");
  expect(match.matches[7]).toBe("lm");
  expect(match.matches[8]).toBe("m");
});
it("line: 209 - matches ^[.^$|()*+?{,}]+ against '.^$(*+)|{?,?}'", () => {
  const match = exec("^[.^$|()*+?{,}]+", ".^$(*+)|{?,?}", "");
  expect(match.matches[0]).toBe(".^$(*+)|{?,?}");
});
it("line: 255 - matches ^(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(?11)*((?3)(?4))(?1)(?#)2$ against 'abcdefghijkcda2'", () => {
  const match = exec(
    "^(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(?11)*((?3)(?4))(?1)(?#)2$",
    "abcdefghijkcda2",
    ""
  );
  expect(match.matches[0]).toBe("abcdefghijkcda2");
  expect(match.matches[1]).toBe("a");
  expect(match.matches[2]).toBe("b");
  expect(match.matches[3]).toBe("c");
  expect(match.matches[4]).toBe("d");
  expect(match.matches[5]).toBe("e");
  expect(match.matches[6]).toBe("f");
  expect(match.matches[7]).toBe("g");
  expect(match.matches[8]).toBe("h");
  expect(match.matches[9]).toBe("i");
  expect(match.matches[10]).toBe("j");
  expect(match.matches[11]).toBe("k");
  expect(match.matches[12]).toBe("cd");
});
it("line: 256 - matches ^(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(?11)*((?3)(?4))(?1)(?#)2$ against 'abcdefghijkkkkcda2'", () => {
  const match = exec(
    "^(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(?11)*((?3)(?4))(?1)(?#)2$",
    "abcdefghijkkkkcda2",
    ""
  );
  expect(match.matches[0]).toBe("abcdefghijkkkkcda2");
  expect(match.matches[1]).toBe("a");
  expect(match.matches[2]).toBe("b");
  expect(match.matches[3]).toBe("c");
  expect(match.matches[4]).toBe("d");
  expect(match.matches[5]).toBe("e");
  expect(match.matches[6]).toBe("f");
  expect(match.matches[7]).toBe("g");
  expect(match.matches[8]).toBe("h");
  expect(match.matches[9]).toBe("i");
  expect(match.matches[10]).toBe("j");
  expect(match.matches[11]).toBe("k");
  expect(match.matches[12]).toBe("cd");
});
it("line: 260 - matches ^From +([^ ]+) +[a-zA-Z][a-zA-Z][a-zA-Z] +[a-zA-Z][a-zA-Z][a-zA-Z] +[0-9]?[0-9] +[0-9][0-9]:[0-9][0-9] against 'From abcd  Mon Sep 01 12:33:02 1997'", () => {
  const match = exec(
    "^From +([^ ]+) +[a-zA-Z][a-zA-Z][a-zA-Z] +[a-zA-Z][a-zA-Z][a-zA-Z] +[0-9]?[0-9] +[0-9][0-9]:[0-9][0-9]",
    "From abcd  Mon Sep 01 12:33:02 1997",
    ""
  );
  expect(match.matches[0]).toBe("From abcd  Mon Sep 01 12:33");
  expect(match.matches[1]).toBe("abcd");
});
it("line: 267 - matches foo(?!bar)(.*) against 'foobar is foolish see?'", () => {
  const match = exec("foo(?!bar)(.*)", "foobar is foolish see?", "");
  expect(match.matches[0]).toBe("foolish see?");
  expect(match.matches[1]).toBe("lish see?");
});
it("line: 268 - matches (?:(?!foo)...|^.{0,2})bar(.*) against 'foobar crowbar etc'", () => {
  const match = exec("(?:(?!foo)...|^.{0,2})bar(.*)", "foobar crowbar etc", "");
  expect(match.matches[0]).toBe("rowbar etc");
  expect(match.matches[1]).toBe(" etc");
});
it("line: 269 - matches (?:(?!foo)...|^.{0,2})bar(.*) against 'barrel'", () => {
  const match = exec("(?:(?!foo)...|^.{0,2})bar(.*)", "barrel", "");
  expect(match.matches[0]).toBe("barrel");
  expect(match.matches[1]).toBe("rel");
});
it("line: 270 - matches (?:(?!foo)...|^.{0,2})bar(.*) against '2barrel'", () => {
  const match = exec("(?:(?!foo)...|^.{0,2})bar(.*)", "2barrel", "");
  expect(match.matches[0]).toBe("2barrel");
  expect(match.matches[1]).toBe("rel");
});
it("line: 271 - matches (?:(?!foo)...|^.{0,2})bar(.*) against 'A barrel'", () => {
  const match = exec("(?:(?!foo)...|^.{0,2})bar(.*)", "A barrel", "");
  expect(match.matches[0]).toBe("A barrel");
  expect(match.matches[1]).toBe("rel");
});
it("line: 280 - matches ^abcd#rhubarb against 'abcd'", () => {
  const match = exec("^abcd#rhubarb", "abcd", "");
  expect(match.matches[0]).toBe("abcd");
});
it("line: 285 - matches (?!^)abc against 'the abc'", () => {
  const match = exec("(?!^)abc", "the abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 286 - matches (?!^)abc against 'abc'", () => {
  expectNotMatch("(?!^)abc", ["abc"]);
});
it("line: 287 - matches (?=^)abc against 'abc'", () => {
  const match = exec("(?=^)abc", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 288 - matches (?=^)abc against 'the abc'", () => {
  expectNotMatch("(?=^)abc", ["the abc"]);
});
it("line: 289 - matches ^[ab]{1,3}(ab*|b) against 'aabbbbb'", () => {
  const match = exec("^[ab]{1,3}(ab*|b)", "aabbbbb", "");
  expect(match.matches[0]).toBe("aabbbbb");
  expect(match.matches[1]).toBe("abbbbb");
});
it("line: 290 - matches ^[ab]{1,3}?(ab*|b) against 'aabbbbb'", () => {
  const match = exec("^[ab]{1,3}?(ab*|b)", "aabbbbb", "");
  expect(match.matches[0]).toBe("aabbbbb");
  expect(match.matches[1]).toBe("abbbbb");
});
it("line: 291 - matches ^[ab]{1,3}?(ab*?|b) against 'aabbbbb'", () => {
  const match = exec("^[ab]{1,3}?(ab*?|b)", "aabbbbb", "");
  expect(match.matches[0]).toBe("aa");
  expect(match.matches[1]).toBe("a");
});
it("line: 292 - matches ^[ab]{1,3}(ab*?|b) against 'aabbbbb'", () => {
  const match = exec("^[ab]{1,3}(ab*?|b)", "aabbbbb", "");
  expect(match.matches[0]).toBe("aabb");
  expect(match.matches[1]).toBe("b");
});
it("line: 487 - matches ^[ab]{1,3}(ab*?|b) against '<user@dom.ain>'", () => {
  const match = exec("^[ab]{1,3}(ab*?|b)", "<user@dom.ain>", "");
  expect(match.matches[0]).toBe("user@dom.ain");
});
it("line: 488 - matches ^[ab]{1,3}(ab*?|b) against 'user@dom.ain'", () => {
  const match = exec("^[ab]{1,3}(ab*?|b)", "user@dom.ain", "");
  expect(match.matches[0]).toBe("user@dom.ain");
});
it("line: 490 - matches ^[ab]{1,3}(ab*?|b) against 'A. Other <user.1234@dom.ain> (a comment)'", () => {
  const match = exec(
    "^[ab]{1,3}(ab*?|b)",
    "A. Other <user.1234@dom.ain> (a comment)",
    ""
  );
  expect(match.matches[0]).toBe(" Other <user.1234@dom.ain> (a comment)");
});
it("line: 492 - matches ^[ab]{1,3}(ab*?|b) against 'A missing angle <user@some.where'", () => {
  const match = exec(
    "^[ab]{1,3}(ab*?|b)",
    "A missing angle <user@some.where",
    ""
  );
  expect(match.matches[0]).toBe("user@some.where");
});
it("line: 493 - matches ^[ab]{1,3}(ab*?|b) against 'The quick brown fox'", () => {
  expectNotMatch("^[ab]{1,3}(ab*?|b)", ["The quick brown fox"]);
});
it("line: 1076 - matches ^[ab]{1,3}(ab*?|b) against '<user@dom.ain>'", () => {
  const match = exec("^[ab]{1,3}(ab*?|b)", "<user@dom.ain>", "");
  expect(match.matches[0]).toBe("user@dom.ain");
});
it("line: 1077 - matches ^[ab]{1,3}(ab*?|b) against 'user@dom.ain'", () => {
  const match = exec("^[ab]{1,3}(ab*?|b)", "user@dom.ain", "");
  expect(match.matches[0]).toBe("user@dom.ain");
});
it("line: 1079 - matches ^[ab]{1,3}(ab*?|b) against 'A. Other <user.1234@dom.ain> (a comment)'", () => {
  const match = exec(
    "^[ab]{1,3}(ab*?|b)",
    "A. Other <user.1234@dom.ain> (a comment)",
    ""
  );
  expect(match.matches[0]).toBe(" Other <user.1234@dom.ain>");
});
it("line: 1081 - matches ^[ab]{1,3}(ab*?|b) against 'A missing angle <user@some.where'", () => {
  const match = exec(
    "^[ab]{1,3}(ab*?|b)",
    "A missing angle <user@some.where",
    ""
  );
  expect(match.matches[0]).toBe("user@some.where");
});
it("line: 1082 - matches ^[ab]{1,3}(ab*?|b) against 'The quick brown fox'", () => {
  expectNotMatch("^[ab]{1,3}(ab*?|b)", ["The quick brown fox"]);
});
it("line: 1135 - matches ab{1,3}bc against 'abbbbc'", () => {
  const match = exec("ab{1,3}bc", "abbbbc", "");
  expect(match.matches[0]).toBe("abbbbc");
});
it("line: 1136 - matches ab{1,3}bc against 'abbbc'", () => {
  const match = exec("ab{1,3}bc", "abbbc", "");
  expect(match.matches[0]).toBe("abbbc");
});
it("line: 1137 - matches ab{1,3}bc against 'abbc'", () => {
  const match = exec("ab{1,3}bc", "abbc", "");
  expect(match.matches[0]).toBe("abbc");
});
it("line: 1138 - matches ab{1,3}bc against 'abc'", () => {
  expectNotMatch("ab{1,3}bc", ["abc"]);
});
it("line: 1139 - matches ab{1,3}bc against 'abbbbbc'", () => {
  expectNotMatch("ab{1,3}bc", ["abbbbbc"]);
});
it("line: 1143 - matches ^[W-c]+$ against 'WXY_^abc'", () => {
  const match = exec("^[W-c]+$", "WXY_^abc", "");
  expect(match.matches[0]).toBe("WXY_^abc");
});
it("line: 1144 - matches ^[W-c]+$ against 'wxy'", () => {
  expectNotMatch("^[W-c]+$", ["wxy"]);
});
it("line: 1145 - matches ^[W-c]+$ against 'WXY_^abc'", () => {
  const match = exec("^[W-c]+$", "WXY_^abc", "i");
  expect(match.matches[0]).toBe("WXY_^abc");
});
it("line: 1146 - matches ^[W-c]+$ against 'wxy_^ABC'", () => {
  const match = exec("^[W-c]+$", "wxy_^ABC", "i");
  expect(match.matches[0]).toBe("wxy_^ABC");
});
it("line: 1149 - matches ^abc$ against 'abc'", () => {
  const match = exec("^abc$", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 1153 - matches ^abc$ against 'abc'", () => {
  const match = exec("^abc$", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 1164 - matches (?:b)|(?::+) against 'b::c'", () => {
  const match = exec("(?:b)|(?::+)", "b::c", "");
  expect(match.matches[0]).toBe("b");
});
it("line: 1165 - matches (?:b)|(?::+) against 'c::b'", () => {
  const match = exec("(?:b)|(?::+)", "c::b", "");
  expect(match.matches[0]).toBe("::");
});
it("line: 1166 - matches [-az]+ against 'az-'", () => {
  const match = exec("[-az]+", "az-", "");
  expect(match.matches[0]).toBe("az-");
});
it("line: 1167 - matches [-az]+ against 'b'", () => {
  expectNotMatch("[-az]+", ["b"]);
});
it("line: 1168 - matches [az-]+ against 'za-'", () => {
  const match = exec("[az-]+", "za-", "");
  expect(match.matches[0]).toBe("za-");
});
it("line: 1169 - matches [az-]+ against 'b'", () => {
  expectNotMatch("[az-]+", ["b"]);
});
it("line: 1172 - matches [a-z]+ against 'abcdxyz'", () => {
  const match = exec("[a-z]+", "abcdxyz", "");
  expect(match.matches[0]).toBe("abcdxyz");
});
it("line: 1183 - matches (main(O)?)+ against 'mainmain'", () => {
  const match = exec("(main(O)?)+", "mainmain", "");
  expect(match.matches[0]).toBe("mainmain");
  expect(match.matches[1]).toBe("main");
});
it("line: 1184 - matches (main(O)?)+ against 'mainOmain'", () => {
  const match = exec("(main(O)?)+", "mainOmain", "");
  expect(match.matches[0]).toBe("mainOmain");
  expect(match.matches[1]).toBe("main");
});
it("line: 1185 - matches ab{3cd against 'ab{3cd'", () => {
  expect(() => new RegExp("ab{3cd")).toThrow();
});
it("line: 1186 - matches ab{3,cd against 'ab{3,cd'", () => {
  expect(() => new RegExp("ab{3,cd")).toThrow();
});
it("line: 1187 - matches ab{3,4a}cd against 'ab{3,4a}cd'", () => {
  expect(() => new RegExp("ab{3,4a}cd")).toThrow();
});
it("line: 1188 - matches {4,5a}bc against '{4,5a}bc'", () => {
  expect(() => new RegExp("{4,5a}bc")).toThrow();
});
it("line: 1191 - matches abc$ against 'abc'", () => {
  const match = exec("abc$", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 1223 - matches a{0}bc against 'bc'", () => {
  const match = exec("a{0}bc", "bc", "");
  expect(match.matches[0]).toBe("bc");
});
it("line: 1224 - matches (a|(bc)){0,0}?xyz against 'xyz'", () => {
  const match = exec("(a|(bc)){0,0}?xyz", "xyz", "");
  expect(match.matches[0]).toBe("xyz");
});
it("line: 1239 - matches [^a] against 'Abc'", () => {
  const match = exec("[^a]", "Abc", "");
  expect(match.matches[0]).toBe("A");
});
it("line: 1240 - matches [^a] against 'Abc '", () => {
  const match = exec("[^a]", "Abc ", "i");
  expect(match.matches[0]).toBe("b");
});
it("line: 1241 - matches [^a]+ against 'AAAaAbc'", () => {
  const match = exec("[^a]+", "AAAaAbc", "");
  expect(match.matches[0]).toBe("AAA");
});
it("line: 1242 - matches [^a]+ against 'AAAaAbc '", () => {
  const match = exec("[^a]+", "AAAaAbc ", "i");
  expect(match.matches[0]).toBe("bc ");
});
it("line: 1244 - matches [^k]$ against 'abc'", () => {
  const match = exec("[^k]$", "abc", "");
  expect(match.matches[0]).toBe("c");
});
it("line: 1245 - matches [^k]$ against 'abk   '", () => {
  const match = exec("[^k]$", "abk   ", "");
  expect(match.matches[0]).toBe(" ");
});
it("line: 1246 - matches [^k]{2,3}$ against 'abc'", () => {
  const match = exec("[^k]{2,3}$", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 1247 - matches [^k]{2,3}$ against 'kbc'", () => {
  const match = exec("[^k]{2,3}$", "kbc", "");
  expect(match.matches[0]).toBe("bc");
});
it("line: 1248 - matches [^k]{2,3}$ against 'kabc '", () => {
  const match = exec("[^k]{2,3}$", "kabc ", "");
  expect(match.matches[0]).toBe("bc ");
});
it("line: 1249 - matches [^k]{2,3}$ against 'abk'", () => {
  expectNotMatch("[^k]{2,3}$", ["abk"]);
});
it("line: 1250 - matches [^k]{2,3}$ against 'akb'", () => {
  expectNotMatch("[^k]{2,3}$", ["akb"]);
});
it("line: 1251 - matches [^k]{2,3}$ against 'akk '", () => {
  expectNotMatch("[^k]{2,3}$", ["akk "]);
});
it("line: 1259 - matches [^a] against 'aaaabcd'", () => {
  const match = exec("[^a]", "aaaabcd", "");
  expect(match.matches[0]).toBe("b");
});
it("line: 1260 - matches [^a] against 'aaAabcd '", () => {
  const match = exec("[^a]", "aaAabcd ", "");
  expect(match.matches[0]).toBe("A");
});
it("line: 1261 - matches [^a] against 'aaaabcd'", () => {
  const match = exec("[^a]", "aaaabcd", "i");
  expect(match.matches[0]).toBe("b");
});
it("line: 1262 - matches [^a] against 'aaAabcd '", () => {
  const match = exec("[^a]", "aaAabcd ", "i");
  expect(match.matches[0]).toBe("b");
});
it("line: 1263 - matches [^az] against 'aaaabcd'", () => {
  const match = exec("[^az]", "aaaabcd", "");
  expect(match.matches[0]).toBe("b");
});
it("line: 1264 - matches [^az] against 'aaAabcd '", () => {
  const match = exec("[^az]", "aaAabcd ", "");
  expect(match.matches[0]).toBe("A");
});
it("line: 1265 - matches [^az] against 'aaaabcd'", () => {
  const match = exec("[^az]", "aaaabcd", "i");
  expect(match.matches[0]).toBe("b");
});
it("line: 1266 - matches [^az] against 'aaAabcd '", () => {
  const match = exec("[^az]", "aaAabcd ", "i");
  expect(match.matches[0]).toBe("b");
});
it("line: 1268 - matches P[^*]TAIRE[^*]{1,6}?LL against 'xxxxxxxxxxxPSTAIREISLLxxxxxxxxx'", () => {
  const match = exec(
    "P[^*]TAIRE[^*]{1,6}?LL",
    "xxxxxxxxxxxPSTAIREISLLxxxxxxxxx",
    ""
  );
  expect(match.matches[0]).toBe("PSTAIREISLL");
});
it("line: 1269 - matches P[^*]TAIRE[^*]{1,}?LL against 'xxxxxxxxxxxPSTAIREISLLxxxxxxxxx'", () => {
  const match = exec(
    "P[^*]TAIRE[^*]{1,}?LL",
    "xxxxxxxxxxxPSTAIREISLLxxxxxxxxx",
    ""
  );
  expect(match.matches[0]).toBe("PSTAIREISLL");
});
it("line: 1277 - matches a(?)b against 'ab '", () => {
  const match = exec("a(?)b", "ab ", "");
  expect(match.matches[0]).toBe("ab");
});
it("line: 1278 - matches a(?#)b against 'ab '", () => {
  const match = exec("a(?#)b", "ab ", "");
  expect(match.matches[0]).toBe("ab");
});
it("line: 1280 - matches foo(.*)bar against 'The food is under the bar in the barn.'", () => {
  const match = exec(
    "foo(.*)bar",
    "The food is under the bar in the barn.",
    ""
  );
  expect(match.matches[0]).toBe("food is under the bar in the bar");
  expect(match.matches[1]).toBe("d is under the bar in the ");
});
it("line: 1281 - matches foo(.*?)bar against 'The food is under the bar in the barn.'", () => {
  const match = exec(
    "foo(.*?)bar",
    "The food is under the bar in the barn.",
    ""
  );
  expect(match.matches[0]).toBe("food is under the bar");
  expect(match.matches[1]).toBe("d is under the ");
});
it("line: 1293 - matches ^[W-]46] against 'W46]789 '", () => {
  const match = exec("^[W-]46]", "W46]789 ", "");
  expect(match.matches[0]).toBe("W46]");
});
it("line: 1294 - matches ^[W-]46] against '-46]789'", () => {
  const match = exec("^[W-]46]", "-46]789", "");
  expect(match.matches[0]).toBe("-46]");
});
it("line: 1295 - matches ^[W-]46] against 'Wall'", () => {
  expectNotMatch("^[W-]46]", ["Wall"]);
});
it("line: 1296 - matches ^[W-]46] against 'Zebra'", () => {
  expectNotMatch("^[W-]46]", ["Zebra"]);
});
it("line: 1297 - matches ^[W-]46] against '42'", () => {
  expectNotMatch("^[W-]46]", ["42"]);
});
it("line: 1298 - matches ^[W-]46] against '[abcd] '", () => {
  expectNotMatch("^[W-]46]", ["[abcd] "]);
});
it("line: 1299 - matches ^[W-]46] against ']abcd['", () => {
  expectNotMatch("^[W-]46]", ["]abcd["]);
});
it("line: 1311 - matches word (?:[a-zA-Z0-9]+ ){0,10}otherword against 'word cat dog elephant mussel cow horse canary baboon snake shark otherword'", () => {
  const match = exec(
    "word (?:[a-zA-Z0-9]+ ){0,10}otherword",
    "word cat dog elephant mussel cow horse canary baboon snake shark otherword",
    ""
  );
  expect(match.matches[0]).toBe(
    "word cat dog elephant mussel cow horse canary baboon snake shark otherword"
  );
});
it("line: 1312 - matches word (?:[a-zA-Z0-9]+ ){0,10}otherword against 'word cat dog elephant mussel cow horse canary baboon snake shark'", () => {
  expectNotMatch("word (?:[a-zA-Z0-9]+ ){0,10}otherword", [
    "word cat dog elephant mussel cow horse canary baboon snake shark",
  ]);
});
it("line: 1313 - matches word (?:[a-zA-Z0-9]+ ){0,300}otherword against 'word cat dog elephant mussel cow horse canary baboon snake shark the quick brown fox and the lazy dog and several other words getting close to thirty by now I hope'", () => {
  expectNotMatch("word (?:[a-zA-Z0-9]+ ){0,300}otherword", [
    "word cat dog elephant mussel cow horse canary baboon snake shark the quick brown fox and the lazy dog and several other words getting close to thirty by now I hope",
  ]);
});
it("line: 1314 - matches ^(a){0,0} against 'bcd'", () => {
  const match = exec("^(a){0,0}", "bcd", "");
  expect(match.matches[0]).toBe("");
});
it("line: 1315 - matches ^(a){0,0} against 'abc'", () => {
  const match = exec("^(a){0,0}", "abc", "");
  expect(match.matches[0]).toBe("");
});
it("line: 1316 - matches ^(a){0,0} against 'aab     '", () => {
  const match = exec("^(a){0,0}", "aab     ", "");
  expect(match.matches[0]).toBe("");
});
it("line: 1317 - matches ^(a){0,1} against 'bcd'", () => {
  const match = exec("^(a){0,1}", "bcd", "");
  expect(match.matches[0]).toBe("");
});
it("line: 1318 - matches ^(a){0,1} against 'abc'", () => {
  const match = exec("^(a){0,1}", "abc", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 1319 - matches ^(a){0,1} against 'aab  '", () => {
  const match = exec("^(a){0,1}", "aab  ", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 1320 - matches ^(a){0,2} against 'bcd'", () => {
  const match = exec("^(a){0,2}", "bcd", "");
  expect(match.matches[0]).toBe("");
});
it("line: 1321 - matches ^(a){0,2} against 'abc'", () => {
  const match = exec("^(a){0,2}", "abc", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 1322 - matches ^(a){0,2} against 'aab  '", () => {
  const match = exec("^(a){0,2}", "aab  ", "");
  expect(match.matches[0]).toBe("aa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1323 - matches ^(a){0,3} against 'bcd'", () => {
  const match = exec("^(a){0,3}", "bcd", "");
  expect(match.matches[0]).toBe("");
});
it("line: 1324 - matches ^(a){0,3} against 'abc'", () => {
  const match = exec("^(a){0,3}", "abc", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 1325 - matches ^(a){0,3} against 'aab'", () => {
  const match = exec("^(a){0,3}", "aab", "");
  expect(match.matches[0]).toBe("aa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1326 - matches ^(a){0,3} against 'aaa   '", () => {
  const match = exec("^(a){0,3}", "aaa   ", "");
  expect(match.matches[0]).toBe("aaa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1327 - matches ^(a){0,} against 'bcd'", () => {
  const match = exec("^(a){0,}", "bcd", "");
  expect(match.matches[0]).toBe("");
});
it("line: 1328 - matches ^(a){0,} against 'abc'", () => {
  const match = exec("^(a){0,}", "abc", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 1329 - matches ^(a){0,} against 'aab'", () => {
  const match = exec("^(a){0,}", "aab", "");
  expect(match.matches[0]).toBe("aa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1330 - matches ^(a){0,} against 'aaa'", () => {
  const match = exec("^(a){0,}", "aaa", "");
  expect(match.matches[0]).toBe("aaa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1331 - matches ^(a){0,} against 'aaaaaaaa    '", () => {
  const match = exec("^(a){0,}", "aaaaaaaa    ", "");
  expect(match.matches[0]).toBe("aaaaaaaa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1332 - matches ^(a){1,1} against 'bcd'", () => {
  expectNotMatch("^(a){1,1}", ["bcd"]);
});
it("line: 1333 - matches ^(a){1,1} against 'abc'", () => {
  const match = exec("^(a){1,1}", "abc", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 1334 - matches ^(a){1,1} against 'aab  '", () => {
  const match = exec("^(a){1,1}", "aab  ", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 1335 - matches ^(a){1,2} against 'bcd'", () => {
  expectNotMatch("^(a){1,2}", ["bcd"]);
});
it("line: 1336 - matches ^(a){1,2} against 'abc'", () => {
  const match = exec("^(a){1,2}", "abc", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 1337 - matches ^(a){1,2} against 'aab  '", () => {
  const match = exec("^(a){1,2}", "aab  ", "");
  expect(match.matches[0]).toBe("aa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1338 - matches ^(a){1,3} against 'bcd'", () => {
  expectNotMatch("^(a){1,3}", ["bcd"]);
});
it("line: 1339 - matches ^(a){1,3} against 'abc'", () => {
  const match = exec("^(a){1,3}", "abc", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 1340 - matches ^(a){1,3} against 'aab'", () => {
  const match = exec("^(a){1,3}", "aab", "");
  expect(match.matches[0]).toBe("aa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1341 - matches ^(a){1,3} against 'aaa   '", () => {
  const match = exec("^(a){1,3}", "aaa   ", "");
  expect(match.matches[0]).toBe("aaa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1342 - matches ^(a){1,} against 'bcd'", () => {
  expectNotMatch("^(a){1,}", ["bcd"]);
});
it("line: 1343 - matches ^(a){1,} against 'abc'", () => {
  const match = exec("^(a){1,}", "abc", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 1344 - matches ^(a){1,} against 'aab'", () => {
  const match = exec("^(a){1,}", "aab", "");
  expect(match.matches[0]).toBe("aa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1345 - matches ^(a){1,} against 'aaa'", () => {
  const match = exec("^(a){1,}", "aaa", "");
  expect(match.matches[0]).toBe("aaa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1346 - matches ^(a){1,} against 'aaaaaaaa    '", () => {
  const match = exec("^(a){1,}", "aaaaaaaa    ", "");
  expect(match.matches[0]).toBe("aaaaaaaa");
  expect(match.matches[1]).toBe("a");
});
it("line: 1361 - matches (.*X|^B) against 'BarFoo '", () => {
  const match = exec("(.*X|^B)", "BarFoo ", "");
  expect(match.matches[0]).toBe("B");
  expect(match.matches[1]).toBe("B");
});
it("line: 1364 - matches (.*X|^B) against 'BarFoo '", () => {
  const match = exec("(.*X|^B)", "BarFoo ", "");
  expect(match.matches[0]).toBe("B");
  expect(match.matches[1]).toBe("B");
});
it("line: 1367 - matches (.*X|^B) against 'BarFoo '", () => {
  const match = exec("(.*X|^B)", "BarFoo ", "");
  expect(match.matches[0]).toBe("B");
  expect(match.matches[1]).toBe("B");
});
it("line: 1370 - matches (.*X|^B) against 'BarFoo '", () => {
  const match = exec("(.*X|^B)", "BarFoo ", "");
  expect(match.matches[0]).toBe("B");
  expect(match.matches[1]).toBe("B");
});
it("line: 1373 - matches (?s)(.*X|^B) against 'BarFoo '", () => {
  const match = exec("(?s)(.*X|^B)", "BarFoo ", "");
  expect(match.matches[0]).toBe("B");
  expect(match.matches[1]).toBe("B");
});
it("line: 1376 - matches (?s:.*X|^B) against 'BarFoo '", () => {
  const match = exec("(?s:.*X|^B)", "BarFoo ", "");
  expect(match.matches[0]).toBe("B");
});
it("line: 1386 - matches ^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9] against '123456654321'", () => {
  const match = exec(
    "^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]",
    "123456654321",
    ""
  );
  expect(match.matches[0]).toBe("123456654321");
});
it("line: 1389 - matches ^[abc]{12} against 'abcabcabcabc'", () => {
  const match = exec("^[abc]{12}", "abcabcabcabc", "");
  expect(match.matches[0]).toBe("abcabcabcabc");
});
it("line: 1390 - matches ^[a-c]{12} against 'abcabcabcabc'", () => {
  const match = exec("^[a-c]{12}", "abcabcabcabc", "");
  expect(match.matches[0]).toBe("abcabcabcabc");
});
it("line: 1391 - matches ^(a|b|c){12} against 'abcabcabcabc '", () => {
  const match = exec("^(a|b|c){12}", "abcabcabcabc ", "");
  expect(match.matches[0]).toBe("abcabcabcabc");
  expect(match.matches[1]).toBe("c");
});
it("line: 1392 - matches ^[abcdefghijklmnopqrstuvwxy0123456789] against 'n'", () => {
  const match = exec("^[abcdefghijklmnopqrstuvwxy0123456789]", "n", "");
  expect(match.matches[0]).toBe("n");
});
it("line: 1393 - matches ^[abcdefghijklmnopqrstuvwxy0123456789] against 'z '", () => {
  expectNotMatch("^[abcdefghijklmnopqrstuvwxy0123456789]", ["z "]);
});
it("line: 1394 - matches abcde{0,0} against 'abcd'", () => {
  const match = exec("abcde{0,0}", "abcd", "");
  expect(match.matches[0]).toBe("abcd");
});
it("line: 1395 - matches abcde{0,0} against 'abce  '", () => {
  expectNotMatch("abcde{0,0}", ["abce  "]);
});
it("line: 1396 - matches ab[cd]{0,0}e against 'abe'", () => {
  const match = exec("ab[cd]{0,0}e", "abe", "");
  expect(match.matches[0]).toBe("abe");
});
it("line: 1397 - matches ab[cd]{0,0}e against 'abcde '", () => {
  expectNotMatch("ab[cd]{0,0}e", ["abcde "]);
});
it("line: 1398 - matches ab(c){0,0}d against 'abd'", () => {
  const match = exec("ab(c){0,0}d", "abd", "");
  expect(match.matches[0]).toBe("abd");
});
it("line: 1399 - matches ab(c){0,0}d against 'abcd   '", () => {
  expectNotMatch("ab(c){0,0}d", ["abcd   "]);
});
it("line: 1400 - matches a(b*) against 'a'", () => {
  const match = exec("a(b*)", "a", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("");
});
it("line: 1401 - matches a(b*) against 'ab'", () => {
  const match = exec("a(b*)", "ab", "");
  expect(match.matches[0]).toBe("ab");
  expect(match.matches[1]).toBe("b");
});
it("line: 1402 - matches a(b*) against 'abbbb'", () => {
  const match = exec("a(b*)", "abbbb", "");
  expect(match.matches[0]).toBe("abbbb");
  expect(match.matches[1]).toBe("bbbb");
});
it("line: 1403 - matches a(b*) against 'bbbbb    '", () => {
  expectNotMatch("a(b*)", ["bbbbb    "]);
});
it("line: 1408 - matches .*? against 'abc'", () => {
  const match = exec(".*?", "abc", "");
  expect(match.matches[0]).toBe("");
});
it("line: 1411 - matches NULL against 'abc'", () => {
  const match = exec("NULL", "abc", "");
  expect(match.matches[0]).toBe("");
});
it("line: 1413 - matches a[^a]b against 'acb'", () => {
  const match = exec("a[^a]b", "acb", "");
  expect(match.matches[0]).toBe("acb");
});
it("line: 1415 - matches a.b against 'acb'", () => {
  const match = exec("a.b", "acb", "");
  expect(match.matches[0]).toBe("acb");
});
it("line: 1417 - matches a[^a]b against 'acb'", () => {
  const match = exec("a[^a]b", "acb", "");
  expect(match.matches[0]).toBe("acb");
});
it("line: 1419 - matches a.b against 'acb'", () => {
  const match = exec("a.b", "acb", "");
  expect(match.matches[0]).toBe("acb");
});
