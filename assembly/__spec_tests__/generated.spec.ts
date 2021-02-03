/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegExp, Match } from "..";
import { expectMatch, expectNotMatch, exec } from "../__tests__/utils";

it("line: 1 - matches the quick brown fox against 'the quick brown fox'", () => {
  const match = exec("the quick brown fox", "the quick brown fox", "s");
  expect(match.matches[0]).toBe("the quick brown fox".substring(0, 19));
});
it("line: 2 - matches the quick brown fox against 'The quick brown FOX'", () => {
  expectNotMatch("the quick brown fox", ["The quick brown FOX"]);
});
it("line: 3 - matches the quick brown fox against 'What do you know about the quick brown fox?'", () => {
  const match = exec(
    "the quick brown fox",
    "What do you know about the quick brown fox?",
    "s"
  );
  expect(match.matches[0]).toBe(
    "What do you know about the quick brown fox?".substring(23, 42)
  );
});
it("line: 4 - matches the quick brown fox against 'What do you know about THE QUICK BROWN FOX?'", () => {
  expectNotMatch("the quick brown fox", [
    "What do you know about THE QUICK BROWN FOX?",
  ]);
});
it("line: 5 - matches The quick brown fox against 'the quick brown fox'", () => {
  const match = exec("The quick brown fox", "the quick brown fox", "is");
  expect(match.matches[0]).toBe("the quick brown fox".substring(0, 19));
});
it("line: 6 - matches The quick brown fox against 'The quick brown FOX'", () => {
  const match = exec("The quick brown fox", "The quick brown FOX", "is");
  expect(match.matches[0]).toBe("The quick brown FOX".substring(0, 19));
});
it("line: 7 - matches The quick brown fox against 'What do you know about the quick brown fox?'", () => {
  const match = exec(
    "The quick brown fox",
    "What do you know about the quick brown fox?",
    "is"
  );
  expect(match.matches[0]).toBe(
    "What do you know about the quick brown fox?".substring(23, 42)
  );
});
it("line: 8 - matches The quick brown fox against 'What do you know about THE QUICK BROWN FOX?'", () => {
  const match = exec(
    "The quick brown fox",
    "What do you know about THE QUICK BROWN FOX?",
    "is"
  );
  expect(match.matches[0]).toBe(
    "What do you know about THE QUICK BROWN FOX?".substring(23, 42)
  );
});
xit("line: 9 - back references are not supported", () => {});
it("line: 10 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("abxyzpqrrrabbxyyyypqAzz".substring(0, 23));
});
it("line: 11 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("abxyzpqrrrabbxyyyypqAzz".substring(0, 23));
});
it("line: 12 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("aabxyzpqrrrabbxyyyypqAzz".substring(0, 24));
});
it("line: 13 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("aaabxyzpqrrrabbxyyyypqAzz".substring(0, 25));
});
it("line: 14 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("aaaabxyzpqrrrabbxyyyypqAzz".substring(0, 26));
});
it("line: 15 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abcxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("abcxyzpqrrrabbxyyyypqAzz".substring(0, 24));
});
it("line: 16 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabcxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("aabcxyzpqrrrabbxyyyypqAzz".substring(0, 25));
});
it("line: 17 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypAzz",
    "s"
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypAzz".substring(0, 25));
});
it("line: 18 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypqAzz".substring(0, 26));
});
it("line: 19 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypqqAzz".substring(0, 27));
});
it("line: 20 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    "aaabcxyzpqrrrabbxyyyypqqqAzz".substring(0, 28)
  );
});
it("line: 21 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    "aaabcxyzpqrrrabbxyyyypqqqqAzz".substring(0, 29)
  );
});
it("line: 22 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqqqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    "aaabcxyzpqrrrabbxyyyypqqqqqAzz".substring(0, 30)
  );
});
it("line: 23 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqqqqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    "aaabcxyzpqrrrabbxyyyypqqqqqqAzz".substring(0, 31)
  );
});
it("line: 24 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("aaaabcxyzpqrrrabbxyyyypqAzz".substring(0, 27));
});
it("line: 25 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abxyzzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("abxyzzpqrrrabbxyyyypqAzz".substring(0, 24));
});
it("line: 26 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabxyzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabxyzzzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("aabxyzzzpqrrrabbxyyyypqAzz".substring(0, 26));
});
it("line: 27 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabxyzzzzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    "aaabxyzzzzpqrrrabbxyyyypqAzz".substring(0, 28)
  );
});
it("line: 28 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabxyzzzzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    "aaaabxyzzzzpqrrrabbxyyyypqAzz".substring(0, 29)
  );
});
it("line: 29 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abcxyzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abcxyzzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("abcxyzzpqrrrabbxyyyypqAzz".substring(0, 25));
});
it("line: 30 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabcxyzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabcxyzzzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe("aabcxyzzzpqrrrabbxyyyypqAzz".substring(0, 27));
});
it("line: 31 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzzzzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    "aaabcxyzzzzpqrrrabbxyyyypqAzz".substring(0, 29)
  );
});
it("line: 32 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzzzzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    "aaaabcxyzzzzpqrrrabbxyyyypqAzz".substring(0, 30)
  );
});
it("line: 33 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzzzzpqrrrabbbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    "aaaabcxyzzzzpqrrrabbbxyyyypqAzz".substring(0, 31)
  );
});
it("line: 34 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbbxyyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzzzzpqrrrabbbxyyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    "aaaabcxyzzzzpqrrrabbbxyyyyypqAzz".substring(0, 32)
  );
});
it("line: 35 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypABzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypABzz",
    "s"
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypABzz".substring(0, 26));
});
it("line: 36 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypABBzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypABBzz",
    "s"
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypABBzz".substring(0, 27));
});
it("line: 37 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against '>>>aaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    ">>>aaabxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    ">>>aaabxyzpqrrrabbxyyyypqAzz".substring(3, 28)
  );
});
it("line: 38 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against '>aaaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    ">aaaabxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(">aaaabxyzpqrrrabbxyyyypqAzz".substring(1, 27));
});
it("line: 39 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against '>>>>abcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    ">>>>abcxyzpqrrrabbxyyyypqAzz",
    "s"
  );
  expect(match.matches[0]).toBe(
    ">>>>abcxyzpqrrrabbxyyyypqAzz".substring(4, 28)
  );
});
it("line: 40 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrabbxyyyypqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "abxyzpqrrabbxyyyypqAzz",
  ]);
});
it("line: 41 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrrrabbxyyyypqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "abxyzpqrrrrabbxyyyypqAzz",
  ]);
});
it("line: 42 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrrabxyyyypqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "abxyzpqrrrabxyyyypqAzz",
  ]);
});
it("line: 43 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbbxyyyyyypqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "aaaabcxyzzzzpqrrrabbbxyyyyyypqAzz",
  ]);
});
it("line: 44 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbbxyyypqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "aaaabcxyzzzzpqrrrabbbxyyypqAzz",
  ]);
});
it("line: 45 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqqqqAzz'", () => {
  expectNotMatch("a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz", [
    "aaabcxyzpqrrrabbxyyyypqqqqqqqAzz",
  ]);
});
it("line: 46 - matches ^(abc){1,2}zz against 'abczz'", () => {
  const match = exec("^(abc){1,2}zz", "abczz", "s");
  expect(match.matches[0]).toBe("abczz".substring(0, 5));
  expect(match.matches[1]).toBe("abczz".substring(0, 3));
});
it("line: 47 - matches ^(abc){1,2}zz against 'abcabczz'", () => {
  const match = exec("^(abc){1,2}zz", "abcabczz", "s");
  expect(match.matches[0]).toBe("abcabczz".substring(0, 8));
  expect(match.matches[1]).toBe("abcabczz".substring(3, 6));
});
it("line: 48 - matches ^(abc){1,2}zz against 'zz'", () => {
  expectNotMatch("^(abc){1,2}zz", ["zz"]);
});
it("line: 49 - matches ^(abc){1,2}zz against 'abcabcabczz'", () => {
  expectNotMatch("^(abc){1,2}zz", ["abcabcabczz"]);
});
it("line: 50 - matches ^(abc){1,2}zz against '>>abczz'", () => {
  expectNotMatch("^(abc){1,2}zz", [">>abczz"]);
});
xit("line: 51 - lazy quantifiers are not supported", () => {});
xit("line: 52 - lazy quantifiers are not supported", () => {});
xit("line: 53 - lazy quantifiers are not supported", () => {});
xit("line: 54 - lazy quantifiers are not supported", () => {});
xit("line: 55 - lazy quantifiers are not supported", () => {});
xit("line: 56 - lazy quantifiers are not supported", () => {});
xit("line: 57 - lazy quantifiers are not supported", () => {});
xit("line: 58 - lazy quantifiers are not supported", () => {});
xit("line: 59 - lazy quantifiers are not supported", () => {});
xit("line: 60 - lazy quantifiers are not supported", () => {});
it("line: 61 - matches ^(b+|a){1,2}c against 'bc'", () => {
  const match = exec("^(b+|a){1,2}c", "bc", "s");
  expect(match.matches[0]).toBe("bc".substring(0, 2));
  expect(match.matches[1]).toBe("bc".substring(0, 1));
});
it("line: 62 - matches ^(b+|a){1,2}c against 'bbc'", () => {
  const match = exec("^(b+|a){1,2}c", "bbc", "s");
  expect(match.matches[0]).toBe("bbc".substring(0, 3));
  expect(match.matches[1]).toBe("bbc".substring(0, 2));
});
xit("line: 63 - issues with repeated capture groups", () => {});
xit("line: 64 - issues with repeated capture groups", () => {});
xit("line: 65 - issues with repeated capture groups", () => {});
xit("line: 66 - issues with repeated capture groups", () => {});
xit("line: 67 - issues with repeated capture groups", () => {});
xit("line: 68 - issues with repeated capture groups", () => {});
it("line: 69 - matches ^(b+|a){1,2}c against 'aaac'", () => {
  expectNotMatch("^(b+|a){1,2}c", ["aaac"]);
});
it("line: 70 - matches ^(b+|a){1,2}c against 'abbbbbbbbbbbac'", () => {
  expectNotMatch("^(b+|a){1,2}c", ["abbbbbbbbbbbac"]);
});
xit("line: 71 - lazy quantifiers are not supported", () => {});
xit("line: 72 - lazy quantifiers are not supported", () => {});
xit("line: 73 - lazy quantifiers are not supported", () => {});
xit("line: 74 - lazy quantifiers are not supported", () => {});
xit("line: 75 - lazy quantifiers are not supported", () => {});
xit("line: 76 - lazy quantifiers are not supported", () => {});
xit("line: 77 - lazy quantifiers are not supported", () => {});
xit("line: 78 - lazy quantifiers are not supported", () => {});
xit("line: 79 - lazy quantifiers are not supported", () => {});
xit("line: 80 - lazy quantifiers are not supported", () => {});
xit("line: 81 - lazy quantifiers are not supported", () => {});
xit("line: 82 - test regex contains syntax not supported in JS", () => {});
it("line: 83 - matches ^[ab\\]cde] against 'athing'", () => {
  const match = exec("^[ab\\]cde]", "athing", "s");
  expect(match.matches[0]).toBe("athing".substring(0, 1));
});
it("line: 84 - matches ^[ab\\]cde] against 'bthing'", () => {
  const match = exec("^[ab\\]cde]", "bthing", "s");
  expect(match.matches[0]).toBe("bthing".substring(0, 1));
});
it("line: 85 - matches ^[ab\\]cde] against ']thing'", () => {
  const match = exec("^[ab\\]cde]", "]thing", "s");
  expect(match.matches[0]).toBe("]thing".substring(0, 1));
});
it("line: 86 - matches ^[ab\\]cde] against 'cthing'", () => {
  const match = exec("^[ab\\]cde]", "cthing", "s");
  expect(match.matches[0]).toBe("cthing".substring(0, 1));
});
it("line: 87 - matches ^[ab\\]cde] against 'dthing'", () => {
  const match = exec("^[ab\\]cde]", "dthing", "s");
  expect(match.matches[0]).toBe("dthing".substring(0, 1));
});
it("line: 88 - matches ^[ab\\]cde] against 'ething'", () => {
  const match = exec("^[ab\\]cde]", "ething", "s");
  expect(match.matches[0]).toBe("ething".substring(0, 1));
});
it("line: 89 - matches ^[ab\\]cde] against 'fthing'", () => {
  expectNotMatch("^[ab\\]cde]", ["fthing"]);
});
it("line: 90 - matches ^[ab\\]cde] against '[thing'", () => {
  expectNotMatch("^[ab\\]cde]", ["[thing"]);
});
it("line: 91 - matches ^[ab\\]cde] against '\\\thing'", () => {
  expectNotMatch("^[ab\\]cde]", ["\\thing"]);
});
it("line: 92 - matches ^[]cde] against ']thing'", () => {
  const match = exec("^[]cde]", "]thing", "s");
  expect(match.matches[0]).toBe("]thing".substring(0, 1));
});
it("line: 93 - matches ^[]cde] against 'cthing'", () => {
  const match = exec("^[]cde]", "cthing", "s");
  expect(match.matches[0]).toBe("cthing".substring(0, 1));
});
it("line: 94 - matches ^[]cde] against 'dthing'", () => {
  const match = exec("^[]cde]", "dthing", "s");
  expect(match.matches[0]).toBe("dthing".substring(0, 1));
});
it("line: 95 - matches ^[]cde] against 'ething'", () => {
  const match = exec("^[]cde]", "ething", "s");
  expect(match.matches[0]).toBe("ething".substring(0, 1));
});
it("line: 96 - matches ^[]cde] against 'athing'", () => {
  expectNotMatch("^[]cde]", ["athing"]);
});
it("line: 97 - matches ^[]cde] against 'fthing'", () => {
  expectNotMatch("^[]cde]", ["fthing"]);
});
it("line: 98 - matches ^[^ab\\]cde] against 'fthing'", () => {
  const match = exec("^[^ab\\]cde]", "fthing", "s");
  expect(match.matches[0]).toBe("fthing".substring(0, 1));
});
it("line: 99 - matches ^[^ab\\]cde] against '[thing'", () => {
  const match = exec("^[^ab\\]cde]", "[thing", "s");
  expect(match.matches[0]).toBe("[thing".substring(0, 1));
});
it("line: 100 - matches ^[^ab\\]cde] against '\\\thing'", () => {
  const match = exec("^[^ab\\]cde]", "\\thing", "s");
  expect(match.matches[0]).toBe("\\thing".substring(0, 1));
});
it("line: 101 - matches ^[^ab\\]cde] against 'athing'", () => {
  expectNotMatch("^[^ab\\]cde]", ["athing"]);
});
it("line: 102 - matches ^[^ab\\]cde] against 'bthing'", () => {
  expectNotMatch("^[^ab\\]cde]", ["bthing"]);
});
it("line: 103 - matches ^[^ab\\]cde] against ']thing'", () => {
  expectNotMatch("^[^ab\\]cde]", ["]thing"]);
});
it("line: 104 - matches ^[^ab\\]cde] against 'cthing'", () => {
  expectNotMatch("^[^ab\\]cde]", ["cthing"]);
});
it("line: 105 - matches ^[^ab\\]cde] against 'dthing'", () => {
  expectNotMatch("^[^ab\\]cde]", ["dthing"]);
});
it("line: 106 - matches ^[^ab\\]cde] against 'ething'", () => {
  expectNotMatch("^[^ab\\]cde]", ["ething"]);
});
it("line: 107 - matches ^[^]cde] against 'athing'", () => {
  const match = exec("^[^]cde]", "athing", "s");
  expect(match.matches[0]).toBe("athing".substring(0, 1));
});
it("line: 108 - matches ^[^]cde] against 'fthing'", () => {
  const match = exec("^[^]cde]", "fthing", "s");
  expect(match.matches[0]).toBe("fthing".substring(0, 1));
});
it("line: 109 - matches ^[^]cde] against ']thing'", () => {
  expectNotMatch("^[^]cde]", ["]thing"]);
});
it("line: 110 - matches ^[^]cde] against 'cthing'", () => {
  expectNotMatch("^[^]cde]", ["cthing"]);
});
it("line: 111 - matches ^[^]cde] against 'dthing'", () => {
  expectNotMatch("^[^]cde]", ["dthing"]);
});
it("line: 112 - matches ^[^]cde] against 'ething'", () => {
  expectNotMatch("^[^]cde]", ["ething"]);
});
it("line: 113 - matches ^\\� against '�'", () => {
  const match = exec("^\\�", "�", "s");
  expect(match.matches[0]).toBe("�".substring(0, 1));
});
it("line: 114 - matches ^� against '�'", () => {
  const match = exec("^�", "�", "s");
  expect(match.matches[0]).toBe("�".substring(0, 1));
});
it("line: 115 - matches ^[0-9]+$ against '0'", () => {
  const match = exec("^[0-9]+$", "0", "s");
  expect(match.matches[0]).toBe("0".substring(0, 1));
});
it("line: 116 - matches ^[0-9]+$ against '1'", () => {
  const match = exec("^[0-9]+$", "1", "s");
  expect(match.matches[0]).toBe("1".substring(0, 1));
});
it("line: 117 - matches ^[0-9]+$ against '2'", () => {
  const match = exec("^[0-9]+$", "2", "s");
  expect(match.matches[0]).toBe("2".substring(0, 1));
});
it("line: 118 - matches ^[0-9]+$ against '3'", () => {
  const match = exec("^[0-9]+$", "3", "s");
  expect(match.matches[0]).toBe("3".substring(0, 1));
});
it("line: 119 - matches ^[0-9]+$ against '4'", () => {
  const match = exec("^[0-9]+$", "4", "s");
  expect(match.matches[0]).toBe("4".substring(0, 1));
});
it("line: 120 - matches ^[0-9]+$ against '5'", () => {
  const match = exec("^[0-9]+$", "5", "s");
  expect(match.matches[0]).toBe("5".substring(0, 1));
});
it("line: 121 - matches ^[0-9]+$ against '6'", () => {
  const match = exec("^[0-9]+$", "6", "s");
  expect(match.matches[0]).toBe("6".substring(0, 1));
});
it("line: 122 - matches ^[0-9]+$ against '7'", () => {
  const match = exec("^[0-9]+$", "7", "s");
  expect(match.matches[0]).toBe("7".substring(0, 1));
});
it("line: 123 - matches ^[0-9]+$ against '8'", () => {
  const match = exec("^[0-9]+$", "8", "s");
  expect(match.matches[0]).toBe("8".substring(0, 1));
});
it("line: 124 - matches ^[0-9]+$ against '9'", () => {
  const match = exec("^[0-9]+$", "9", "s");
  expect(match.matches[0]).toBe("9".substring(0, 1));
});
it("line: 125 - matches ^[0-9]+$ against '10'", () => {
  const match = exec("^[0-9]+$", "10", "s");
  expect(match.matches[0]).toBe("10".substring(0, 2));
});
it("line: 126 - matches ^[0-9]+$ against '100'", () => {
  const match = exec("^[0-9]+$", "100", "s");
  expect(match.matches[0]).toBe("100".substring(0, 3));
});
it("line: 127 - matches ^[0-9]+$ against 'abc'", () => {
  expectNotMatch("^[0-9]+$", ["abc"]);
});
it("line: 128 - matches ^.*nter against 'enter'", () => {
  const match = exec("^.*nter", "enter", "s");
  expect(match.matches[0]).toBe("enter".substring(0, 5));
});
it("line: 129 - matches ^.*nter against 'inter'", () => {
  const match = exec("^.*nter", "inter", "s");
  expect(match.matches[0]).toBe("inter".substring(0, 5));
});
it("line: 130 - matches ^.*nter against 'uponter'", () => {
  const match = exec("^.*nter", "uponter", "s");
  expect(match.matches[0]).toBe("uponter".substring(0, 7));
});
it("line: 131 - matches ^xxx[0-9]+$ against 'xxx0'", () => {
  const match = exec("^xxx[0-9]+$", "xxx0", "s");
  expect(match.matches[0]).toBe("xxx0".substring(0, 4));
});
it("line: 132 - matches ^xxx[0-9]+$ against 'xxx1234'", () => {
  const match = exec("^xxx[0-9]+$", "xxx1234", "s");
  expect(match.matches[0]).toBe("xxx1234".substring(0, 7));
});
it("line: 133 - matches ^xxx[0-9]+$ against 'xxx'", () => {
  expectNotMatch("^xxx[0-9]+$", ["xxx"]);
});
it("line: 134 - matches ^.+[0-9][0-9][0-9]$ against 'x123'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "x123", "s");
  expect(match.matches[0]).toBe("x123".substring(0, 4));
});
it("line: 135 - matches ^.+[0-9][0-9][0-9]$ against 'xx123'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "xx123", "s");
  expect(match.matches[0]).toBe("xx123".substring(0, 5));
});
it("line: 136 - matches ^.+[0-9][0-9][0-9]$ against '123456'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "123456", "s");
  expect(match.matches[0]).toBe("123456".substring(0, 6));
});
it("line: 137 - matches ^.+[0-9][0-9][0-9]$ against '123'", () => {
  expectNotMatch("^.+[0-9][0-9][0-9]$", ["123"]);
});
it("line: 138 - matches ^.+[0-9][0-9][0-9]$ against 'x1234'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "x1234", "s");
  expect(match.matches[0]).toBe("x1234".substring(0, 5));
});
xit("line: 139 - lazy quantifiers are not supported", () => {});
xit("line: 140 - lazy quantifiers are not supported", () => {});
xit("line: 141 - lazy quantifiers are not supported", () => {});
xit("line: 142 - lazy quantifiers are not supported", () => {});
xit("line: 143 - lazy quantifiers are not supported", () => {});
it("line: 144 - matches ^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$ against 'abc!pqr=apquxz.ixr.zzz.ac.uk'", () => {
  const match = exec(
    "^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$",
    "abc!pqr=apquxz.ixr.zzz.ac.uk",
    "s"
  );
  expect(match.matches[0]).toBe(
    "abc!pqr=apquxz.ixr.zzz.ac.uk".substring(0, 28)
  );
  expect(match.matches[1]).toBe("abc!pqr=apquxz.ixr.zzz.ac.uk".substring(0, 3));
  expect(match.matches[2]).toBe("abc!pqr=apquxz.ixr.zzz.ac.uk".substring(4, 7));
});
it("line: 145 - matches ^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$ against '!pqr=apquxz.ixr.zzz.ac.uk'", () => {
  expectNotMatch("^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$", [
    "!pqr=apquxz.ixr.zzz.ac.uk",
  ]);
});
it("line: 146 - matches ^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$ against 'abc!=apquxz.ixr.zzz.ac.uk'", () => {
  expectNotMatch("^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$", [
    "abc!=apquxz.ixr.zzz.ac.uk",
  ]);
});
it("line: 147 - matches ^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$ against 'abc!pqr=apquxz:ixr.zzz.ac.uk'", () => {
  expectNotMatch("^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$", [
    "abc!pqr=apquxz:ixr.zzz.ac.uk",
  ]);
});
it("line: 148 - matches ^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$ against 'abc!pqr=apquxz.ixr.zzz.ac.ukk'", () => {
  expectNotMatch("^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$", [
    "abc!pqr=apquxz.ixr.zzz.ac.ukk",
  ]);
});
it("line: 149 - matches : against 'Well, we need a colon: somewhere'", () => {
  const match = exec(":", "Well, we need a colon: somewhere", "s");
  expect(match.matches[0]).toBe(
    "Well, we need a colon: somewhere".substring(21, 22)
  );
});
it("line: 150 - matches : against '*** Fail if we don't'", () => {
  expectNotMatch(":", ["*** Fail if we don't"]);
});
it("line: 151 - matches ([\\da-f:]+)$ against '0abc'", () => {
  const match = exec("([\\da-f:]+)$", "0abc", "is");
  expect(match.matches[0]).toBe("0abc".substring(0, 4));
  expect(match.matches[1]).toBe("0abc".substring(0, 4));
});
it("line: 152 - matches ([\\da-f:]+)$ against 'abc'", () => {
  const match = exec("([\\da-f:]+)$", "abc", "is");
  expect(match.matches[0]).toBe("abc".substring(0, 3));
  expect(match.matches[1]).toBe("abc".substring(0, 3));
});
xit("line: 153 - aspect [Actual]: <Match>null vs [Expected]: Not <Match>null issue", () => {});
it("line: 154 - matches ([\\da-f:]+)$ against 'E'", () => {
  const match = exec("([\\da-f:]+)$", "E", "is");
  expect(match.matches[0]).toBe("E".substring(0, 1));
  expect(match.matches[1]).toBe("E".substring(0, 1));
});
it("line: 155 - matches ([\\da-f:]+)$ against '::'", () => {
  const match = exec("([\\da-f:]+)$", "::", "is");
  expect(match.matches[0]).toBe("::".substring(0, 2));
  expect(match.matches[1]).toBe("::".substring(0, 2));
});
it("line: 156 - matches ([\\da-f:]+)$ against '5f03:12C0::932e'", () => {
  const match = exec("([\\da-f:]+)$", "5f03:12C0::932e", "is");
  expect(match.matches[0]).toBe("5f03:12C0::932e".substring(0, 15));
  expect(match.matches[1]).toBe("5f03:12C0::932e".substring(0, 15));
});
it("line: 157 - matches ([\\da-f:]+)$ against 'fed def'", () => {
  const match = exec("([\\da-f:]+)$", "fed def", "is");
  expect(match.matches[0]).toBe("fed def".substring(4, 7));
  expect(match.matches[1]).toBe("fed def".substring(4, 7));
});
it("line: 158 - matches ([\\da-f:]+)$ against 'Any old stuff'", () => {
  const match = exec("([\\da-f:]+)$", "Any old stuff", "is");
  expect(match.matches[0]).toBe("Any old stuff".substring(11, 13));
  expect(match.matches[1]).toBe("Any old stuff".substring(11, 13));
});
it("line: 159 - matches ([\\da-f:]+)$ against '0zzz'", () => {
  expectNotMatch("([\\da-f:]+)$", ["0zzz"]);
});
it("line: 160 - matches ([\\da-f:]+)$ against 'gzzz'", () => {
  expectNotMatch("([\\da-f:]+)$", ["gzzz"]);
});
it("line: 161 - matches ([\\da-f:]+)$ against 'fed\\x20'", () => {
  expectNotMatch("([\\da-f:]+)$", ["fed\x20"]);
});
it("line: 162 - matches ([\\da-f:]+)$ against 'Any old rubbish'", () => {
  expectNotMatch("([\\da-f:]+)$", ["Any old rubbish"]);
});
it("line: 163 - matches ^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$ against '.1.2.3'", () => {
  const match = exec(
    "^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$",
    ".1.2.3",
    "s"
  );
  expect(match.matches[0]).toBe(".1.2.3".substring(0, 6));
  expect(match.matches[1]).toBe(".1.2.3".substring(1, 2));
  expect(match.matches[2]).toBe(".1.2.3".substring(3, 4));
  expect(match.matches[3]).toBe(".1.2.3".substring(5, 6));
});
it("line: 164 - matches ^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$ against 'A.12.123.0'", () => {
  const match = exec(
    "^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$",
    "A.12.123.0",
    "s"
  );
  expect(match.matches[0]).toBe("A.12.123.0".substring(0, 10));
  expect(match.matches[1]).toBe("A.12.123.0".substring(2, 4));
  expect(match.matches[2]).toBe("A.12.123.0".substring(5, 8));
  expect(match.matches[3]).toBe("A.12.123.0".substring(9, 10));
});
it("line: 165 - matches ^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$ against '.1.2.3333'", () => {
  expectNotMatch("^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$", [".1.2.3333"]);
});
it("line: 166 - matches ^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$ against '1.2.3'", () => {
  expectNotMatch("^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$", ["1.2.3"]);
});
it("line: 167 - matches ^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$ against '1234.2.3'", () => {
  expectNotMatch("^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$", ["1234.2.3"]);
});
it("line: 168 - matches ^(\\d+)\\s+IN\\s+SOA\\s+(\\S+)\\s+(\\S+)\\s*\\(\\s*$ against '1 IN SOA non-sp1 non-sp2('", () => {
  const match = exec(
    "^(\\d+)\\s+IN\\s+SOA\\s+(\\S+)\\s+(\\S+)\\s*\\(\\s*$",
    "1 IN SOA non-sp1 non-sp2(",
    "s"
  );
  expect(match.matches[0]).toBe("1 IN SOA non-sp1 non-sp2(".substring(0, 25));
  expect(match.matches[1]).toBe("1 IN SOA non-sp1 non-sp2(".substring(0, 1));
  expect(match.matches[2]).toBe("1 IN SOA non-sp1 non-sp2(".substring(9, 16));
  expect(match.matches[3]).toBe("1 IN SOA non-sp1 non-sp2(".substring(17, 24));
});
it("line: 169 - matches ^(\\d+)\\s+IN\\s+SOA\\s+(\\S+)\\s+(\\S+)\\s*\\(\\s*$ against '1    IN    SOA    non-sp1    non-sp2   ('", () => {
  const match = exec(
    "^(\\d+)\\s+IN\\s+SOA\\s+(\\S+)\\s+(\\S+)\\s*\\(\\s*$",
    "1    IN    SOA    non-sp1    non-sp2   (",
    "s"
  );
  expect(match.matches[0]).toBe(
    "1    IN    SOA    non-sp1    non-sp2   (".substring(0, 40)
  );
  expect(match.matches[1]).toBe(
    "1    IN    SOA    non-sp1    non-sp2   (".substring(0, 1)
  );
  expect(match.matches[2]).toBe(
    "1    IN    SOA    non-sp1    non-sp2   (".substring(18, 25)
  );
  expect(match.matches[3]).toBe(
    "1    IN    SOA    non-sp1    non-sp2   (".substring(29, 36)
  );
});
it("line: 170 - matches ^(\\d+)\\s+IN\\s+SOA\\s+(\\S+)\\s+(\\S+)\\s*\\(\\s*$ against '1IN SOA non-sp1 non-sp2('", () => {
  expectNotMatch("^(\\d+)\\s+IN\\s+SOA\\s+(\\S+)\\s+(\\S+)\\s*\\(\\s*$", [
    "1IN SOA non-sp1 non-sp2(",
  ]);
});
it("line: 171 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against 'a.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "a.",
    "s"
  );
  expect(match.matches[0]).toBe("a.".substring(0, 2));
});
it("line: 172 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against 'Z.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "Z.",
    "s"
  );
  expect(match.matches[0]).toBe("Z.".substring(0, 2));
});
it("line: 173 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against '2.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "2.",
    "s"
  );
  expect(match.matches[0]).toBe("2.".substring(0, 2));
});
it("line: 174 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against 'ab-c.pq-r.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "ab-c.pq-r.",
    "s"
  );
  expect(match.matches[0]).toBe("ab-c.pq-r.".substring(0, 10));
  expect(match.matches[1]).toBe("ab-c.pq-r.".substring(4, 9));
});
it("line: 175 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against 'sxk.zzz.ac.uk.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "sxk.zzz.ac.uk.",
    "s"
  );
  expect(match.matches[0]).toBe("sxk.zzz.ac.uk.".substring(0, 14));
  expect(match.matches[1]).toBe("sxk.zzz.ac.uk.".substring(10, 13));
});
it("line: 176 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against 'x-.y-.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "x-.y-.",
    "s"
  );
  expect(match.matches[0]).toBe("x-.y-.".substring(0, 6));
  expect(match.matches[1]).toBe("x-.y-.".substring(2, 5));
});
it("line: 177 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against '-abc.peq.'", () => {
  expectNotMatch(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    ["-abc.peq."]
  );
});
it("line: 178 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.a'", () => {
  const match = exec(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    "*.a",
    "s"
  );
  expect(match.matches[0]).toBe("*.a".substring(0, 3));
});
it("line: 179 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.b0-a'", () => {
  const match = exec(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    "*.b0-a",
    "s"
  );
  expect(match.matches[0]).toBe("*.b0-a".substring(0, 6));
  expect(match.matches[1]).toBe("*.b0-a".substring(3, 6));
});
it("line: 180 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.c3-b.c'", () => {
  const match = exec(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    "*.c3-b.c",
    "s"
  );
  expect(match.matches[0]).toBe("*.c3-b.c".substring(0, 8));
  expect(match.matches[1]).toBe("*.c3-b.c".substring(3, 6));
  expect(match.matches[2]).toBe("*.c3-b.c".substring(6, 8));
});
it("line: 181 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.c-a.b-c'", () => {
  const match = exec(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    "*.c-a.b-c",
    "s"
  );
  expect(match.matches[0]).toBe("*.c-a.b-c".substring(0, 9));
  expect(match.matches[1]).toBe("*.c-a.b-c".substring(3, 5));
  expect(match.matches[2]).toBe("*.c-a.b-c".substring(5, 9));
  expect(match.matches[3]).toBe("*.c-a.b-c".substring(7, 9));
});
it("line: 182 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.0'", () => {
  expectNotMatch(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    ["*.0"]
  );
});
it("line: 183 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.a-'", () => {
  expectNotMatch(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    ["*.a-"]
  );
});
it("line: 184 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.a-b.c-'", () => {
  expectNotMatch(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    ["*.a-b.c-"]
  );
});
it("line: 185 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.c-a.0-c'", () => {
  expectNotMatch(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    ["*.c-a.0-c"]
  );
});
xit("line: 186 - non capturing groups not supported", () => {});
xit("line: 187 - non capturing groups not supported", () => {});
xit("line: 188 - non capturing groups not supported", () => {});
it("line: 189 - matches ^[\\da-f](\\.[\\da-f])*$ against 'a.b.c.d'", () => {
  const match = exec("^[\\da-f](\\.[\\da-f])*$", "a.b.c.d", "is");
  expect(match.matches[0]).toBe("a.b.c.d".substring(0, 7));
  expect(match.matches[1]).toBe("a.b.c.d".substring(5, 7));
});
it("line: 190 - matches ^[\\da-f](\\.[\\da-f])*$ against 'A.B.C.D'", () => {
  const match = exec("^[\\da-f](\\.[\\da-f])*$", "A.B.C.D", "is");
  expect(match.matches[0]).toBe("A.B.C.D".substring(0, 7));
  expect(match.matches[1]).toBe("A.B.C.D".substring(5, 7));
});
it("line: 191 - matches ^[\\da-f](\\.[\\da-f])*$ against 'a.b.c.1.2.3.C'", () => {
  const match = exec("^[\\da-f](\\.[\\da-f])*$", "a.b.c.1.2.3.C", "is");
  expect(match.matches[0]).toBe("a.b.c.1.2.3.C".substring(0, 13));
  expect(match.matches[1]).toBe("a.b.c.1.2.3.C".substring(11, 13));
});
xit("line: 192 - test cases with quotes are not supported yet!", () => {});
xit("line: 193 - test cases with quotes are not supported yet!", () => {});
xit("line: 194 - test cases with quotes are not supported yet!", () => {});
xit("line: 195 - test cases with quotes are not supported yet!", () => {});
it("line: 196 - matches ^$ against ''", () => {
  const match = exec("^$", "", "s");
  expect(match.matches[0]).toBe("".substring(0, 0));
});
xit("line: 197 - non capturing groups not supported", () => {});
xit("line: 198 - non capturing groups not supported", () => {});
xit("line: 199 - non capturing groups not supported", () => {});
xit("line: 200 - non capturing groups not supported", () => {});
xit("line: 201 - non capturing groups not supported", () => {});
xit("line: 202 - non capturing groups not supported", () => {});
xit("line: 203 - aspect [Actual]: <Match>null vs [Expected]: Not <Match>null issue", () => {});
xit("line: 204 - aspect [Actual]: <Match>null vs [Expected]: Not <Match>null issue", () => {});
it("line: 205 - matches ^   a\\ b[c ]d       $ against 'abcd'", () => {
  expectNotMatch("^   a\\ b[c ]d       $", ["abcd"]);
});
it("line: 206 - matches ^   a\\ b[c ]d       $ against 'ab d'", () => {
  expectNotMatch("^   a\\ b[c ]d       $", ["ab d"]);
});
it("line: 207 - matches ^(a(b(c)))(d(e(f)))(h(i(j)))(k(l(m)))$ against 'abcdefhijklm'", () => {
  const match = exec(
    "^(a(b(c)))(d(e(f)))(h(i(j)))(k(l(m)))$",
    "abcdefhijklm",
    "s"
  );
  expect(match.matches[0]).toBe("abcdefhijklm".substring(0, 12));
  expect(match.matches[1]).toBe("abcdefhijklm".substring(0, 3));
  expect(match.matches[2]).toBe("abcdefhijklm".substring(1, 3));
  expect(match.matches[3]).toBe("abcdefhijklm".substring(2, 3));
  expect(match.matches[4]).toBe("abcdefhijklm".substring(3, 6));
  expect(match.matches[5]).toBe("abcdefhijklm".substring(4, 6));
  expect(match.matches[6]).toBe("abcdefhijklm".substring(5, 6));
  expect(match.matches[7]).toBe("abcdefhijklm".substring(6, 9));
  expect(match.matches[8]).toBe("abcdefhijklm".substring(7, 9));
  expect(match.matches[9]).toBe("abcdefhijklm".substring(8, 9));
  expect(match.matches[10]).toBe("abcdefhijklm".substring(9, 12));
  expect(match.matches[11]).toBe("abcdefhijklm".substring(10, 12));
  expect(match.matches[12]).toBe("abcdefhijklm".substring(11, 12));
});
xit("line: 208 - non capturing groups not supported", () => {});
xit("line: 209 - back references are not supported", () => {});
xit("line: 210 - lazy quantifiers are not supported", () => {});
it("line: 211 - matches ^a*\\w against 'z'", () => {
  const match = exec("^a*\\w", "z", "s");
  expect(match.matches[0]).toBe("z".substring(0, 1));
});
it("line: 212 - matches ^a*\\w against 'az'", () => {
  const match = exec("^a*\\w", "az", "s");
  expect(match.matches[0]).toBe("az".substring(0, 2));
});
it("line: 213 - matches ^a*\\w against 'aaaz'", () => {
  const match = exec("^a*\\w", "aaaz", "s");
  expect(match.matches[0]).toBe("aaaz".substring(0, 4));
});
it("line: 214 - matches ^a*\\w against 'a'", () => {
  const match = exec("^a*\\w", "a", "s");
  expect(match.matches[0]).toBe("a".substring(0, 1));
});
it("line: 215 - matches ^a*\\w against 'aa'", () => {
  const match = exec("^a*\\w", "aa", "s");
  expect(match.matches[0]).toBe("aa".substring(0, 2));
});
it("line: 216 - matches ^a*\\w against 'aaaa'", () => {
  const match = exec("^a*\\w", "aaaa", "s");
  expect(match.matches[0]).toBe("aaaa".substring(0, 4));
});
it("line: 217 - matches ^a*\\w against 'a+'", () => {
  const match = exec("^a*\\w", "a+", "s");
  expect(match.matches[0]).toBe("a+".substring(0, 1));
});
it("line: 218 - matches ^a*\\w against 'aa+'", () => {
  const match = exec("^a*\\w", "aa+", "s");
  expect(match.matches[0]).toBe("aa+".substring(0, 2));
});
xit("line: 219 - lazy quantifiers are not supported", () => {});
xit("line: 220 - lazy quantifiers are not supported", () => {});
xit("line: 221 - lazy quantifiers are not supported", () => {});
xit("line: 222 - lazy quantifiers are not supported", () => {});
xit("line: 223 - lazy quantifiers are not supported", () => {});
xit("line: 224 - lazy quantifiers are not supported", () => {});
xit("line: 225 - lazy quantifiers are not supported", () => {});
xit("line: 226 - lazy quantifiers are not supported", () => {});
it("line: 227 - matches ^a+\\w against 'az'", () => {
  const match = exec("^a+\\w", "az", "s");
  expect(match.matches[0]).toBe("az".substring(0, 2));
});
it("line: 228 - matches ^a+\\w against 'aaaz'", () => {
  const match = exec("^a+\\w", "aaaz", "s");
  expect(match.matches[0]).toBe("aaaz".substring(0, 4));
});
it("line: 229 - matches ^a+\\w against 'aa'", () => {
  const match = exec("^a+\\w", "aa", "s");
  expect(match.matches[0]).toBe("aa".substring(0, 2));
});
it("line: 230 - matches ^a+\\w against 'aaaa'", () => {
  const match = exec("^a+\\w", "aaaa", "s");
  expect(match.matches[0]).toBe("aaaa".substring(0, 4));
});
it("line: 231 - matches ^a+\\w against 'aa+'", () => {
  const match = exec("^a+\\w", "aa+", "s");
  expect(match.matches[0]).toBe("aa+".substring(0, 2));
});
xit("line: 232 - lazy quantifiers are not supported", () => {});
xit("line: 233 - lazy quantifiers are not supported", () => {});
xit("line: 234 - lazy quantifiers are not supported", () => {});
xit("line: 235 - lazy quantifiers are not supported", () => {});
xit("line: 236 - lazy quantifiers are not supported", () => {});
it("line: 237 - matches ^\\d{8}\\w{2,} against '1234567890'", () => {
  const match = exec("^\\d{8}\\w{2,}", "1234567890", "s");
  expect(match.matches[0]).toBe("1234567890".substring(0, 10));
});
it("line: 238 - matches ^\\d{8}\\w{2,} against '12345678ab'", () => {
  const match = exec("^\\d{8}\\w{2,}", "12345678ab", "s");
  expect(match.matches[0]).toBe("12345678ab".substring(0, 10));
});
it("line: 239 - matches ^\\d{8}\\w{2,} against '12345678__'", () => {
  const match = exec("^\\d{8}\\w{2,}", "12345678__", "s");
  expect(match.matches[0]).toBe("12345678__".substring(0, 10));
});
it("line: 240 - matches ^\\d{8}\\w{2,} against '1234567'", () => {
  expectNotMatch("^\\d{8}\\w{2,}", ["1234567"]);
});
it("line: 241 - matches ^[aeiou\\d]{4,5}$ against 'uoie'", () => {
  const match = exec("^[aeiou\\d]{4,5}$", "uoie", "s");
  expect(match.matches[0]).toBe("uoie".substring(0, 4));
});
it("line: 242 - matches ^[aeiou\\d]{4,5}$ against '1234'", () => {
  const match = exec("^[aeiou\\d]{4,5}$", "1234", "s");
  expect(match.matches[0]).toBe("1234".substring(0, 4));
});
it("line: 243 - matches ^[aeiou\\d]{4,5}$ against '12345'", () => {
  const match = exec("^[aeiou\\d]{4,5}$", "12345", "s");
  expect(match.matches[0]).toBe("12345".substring(0, 5));
});
it("line: 244 - matches ^[aeiou\\d]{4,5}$ against 'aaaaa'", () => {
  const match = exec("^[aeiou\\d]{4,5}$", "aaaaa", "s");
  expect(match.matches[0]).toBe("aaaaa".substring(0, 5));
});
it("line: 245 - matches ^[aeiou\\d]{4,5}$ against '123456'", () => {
  expectNotMatch("^[aeiou\\d]{4,5}$", ["123456"]);
});
xit("line: 246 - lazy quantifiers are not supported", () => {});
xit("line: 247 - lazy quantifiers are not supported", () => {});
xit("line: 248 - lazy quantifiers are not supported", () => {});
xit("line: 249 - lazy quantifiers are not supported", () => {});
xit("line: 250 - lazy quantifiers are not supported", () => {});
xit("line: 251 - back references are not supported", () => {});
xit("line: 252 - back references are not supported", () => {});
xit("line: 253 - back references are not supported", () => {});
xit("line: 254 - non capturing groups not supported", () => {});
xit("line: 255 - non capturing groups not supported", () => {});
xit("line: 256 - non capturing groups not supported", () => {});
xit("line: 257 - non capturing groups not supported", () => {});
xit("line: 258 - back references are not supported", () => {});
xit("line: 259 - back references are not supported", () => {});
xit("line: 260 - back references are not supported", () => {});
it("line: 261 - matches ^From +([^ ]+) +[a-zA-Z][a-zA-Z][a-zA-Z] +[a-zA-Z][a-zA-Z][a-zA-Z] +[0-9]?[0-9] +[0-9][0-9]:[0-9][0-9] against 'From abcd  Mon Sep 01 12:33:02 1997'", () => {
  const match = exec(
    "^From +([^ ]+) +[a-zA-Z][a-zA-Z][a-zA-Z] +[a-zA-Z][a-zA-Z][a-zA-Z] +[0-9]?[0-9] +[0-9][0-9]:[0-9][0-9]",
    "From abcd  Mon Sep 01 12:33:02 1997",
    "s"
  );
  expect(match.matches[0]).toBe(
    "From abcd  Mon Sep 01 12:33:02 1997".substring(0, 27)
  );
  expect(match.matches[1]).toBe(
    "From abcd  Mon Sep 01 12:33:02 1997".substring(5, 9)
  );
});
xit("line: 262 - issues with repeated capture groups", () => {});
xit("line: 263 - issues with repeated capture groups", () => {});
it("line: 264 - matches ^From\\s+\\S+\\s+([a-zA-Z]{3}\\s+){2}\\d{1,2}\\s+\\d\\d:\\d\\d against 'From abcd  Sep 01 12:33:02 1997'", () => {
  expectNotMatch(
    "^From\\s+\\S+\\s+([a-zA-Z]{3}\\s+){2}\\d{1,2}\\s+\\d\\d:\\d\\d",
    ["From abcd  Sep 01 12:33:02 1997"]
  );
});
it("line: 265 - matches ^12.34 against '12\\n34'", () => {
  const match = exec("^12.34", "12\n34", "s");
  expect(match.matches[0]).toBe("12\n34".substring(0, 5));
});
it("line: 266 - matches ^12.34 against '12\\r34'", () => {
  const match = exec("^12.34", "12\r34", "s");
  expect(match.matches[0]).toBe("12\r34".substring(0, 5));
});
xit("line: 267 - non capturing groups not supported", () => {});
xit("line: 268 - non capturing groups not supported", () => {});
xit("line: 269 - non capturing groups not supported", () => {});
xit("line: 270 - non capturing groups not supported", () => {});
xit("line: 271 - non capturing groups not supported", () => {});
xit("line: 272 - non capturing groups not supported", () => {});
xit("line: 273 - non capturing groups not supported", () => {});
xit("line: 274 - non capturing groups not supported", () => {});
xit("line: 281 - test regex contains syntax not supported in JS", () => {});
xit("line: 282 - back references are not supported", () => {});
xit("line: 283 - back references are not supported", () => {});
xit("line: 284 - back references are not supported", () => {});
xit("line: 285 - back references are not supported", () => {});
xit("line: 286 - non capturing groups not supported", () => {});
xit("line: 287 - non capturing groups not supported", () => {});
xit("line: 288 - non capturing groups not supported", () => {});
xit("line: 289 - non capturing groups not supported", () => {});
xit("line: 290 - the test behaviour differs between PCRE and JS", () => {});
xit("line: 291 - lazy quantifiers are not supported", () => {});
xit("line: 292 - lazy quantifiers are not supported", () => {});
xit("line: 293 - lazy quantifiers are not supported", () => {});
xit("line: 488 - lazy quantifiers are not supported", () => {});
xit("line: 489 - lazy quantifiers are not supported", () => {});
xit("line: 490 - test cases with quotes are not supported yet!", () => {});
xit("line: 491 - lazy quantifiers are not supported", () => {});
xit("line: 492 - test cases with quotes are not supported yet!", () => {});
xit("line: 493 - lazy quantifiers are not supported", () => {});
xit("line: 494 - lazy quantifiers are not supported", () => {});
xit("line: 1077 - lazy quantifiers are not supported", () => {});
xit("line: 1078 - lazy quantifiers are not supported", () => {});
xit("line: 1079 - test cases with quotes are not supported yet!", () => {});
xit("line: 1080 - lazy quantifiers are not supported", () => {});
xit("line: 1081 - test cases with quotes are not supported yet!", () => {});
xit("line: 1082 - lazy quantifiers are not supported", () => {});
xit("line: 1083 - lazy quantifiers are not supported", () => {});
xit("line: 1084 - back references are not supported", () => {});
xit("line: 1085 - back references are not supported", () => {});
xit("line: 1086 - test encoding issue", () => {});
xit("line: 1087 - requires triage", () => {});
xit("line: 1088 - requires triage", () => {});
it("line: 1089 - matches abc\\\x0def\\x00pqr\\x000xyz\\x0000AB against 'abc456 abc\\x0def\x00pqr\x000xyz\x0000ABCDE'", () => {
  const match = exec(
    "abc\\\x0def\\x00pqr\\x000xyz\\x0000AB",
    "abc456 abc\x0def\x00pqr\x000xyz\x0000ABCDE",
    "s"
  );
  expect(match.matches[0]).toBe(
    "abc456 abc\x0def\x00pqr\x000xyz\x0000ABCDE".substring(7, 27)
  );
});
it("line: 1090 - matches abc\\\x0def\\x00pqr\\x000xyz\\x0000AB against 'abc456 abc\\x0def\x00pqr\x000xyz\x0000ABCDE'", () => {
  const match = exec(
    "abc\\\x0def\\x00pqr\\x000xyz\\x0000AB",
    "abc456 abc\x0def\x00pqr\x000xyz\x0000ABCDE",
    "s"
  );
  expect(match.matches[0]).toBe(
    "abc456 abc\x0def\x00pqr\x000xyz\x0000ABCDE".substring(7, 27)
  );
});
xit("line: 1091 - back references are not supported", () => {});
xit("line: 1092 - back references are not supported", () => {});
xit("line: 1093 - back references are not supported", () => {});
xit("line: 1094 - back references are not supported", () => {});
xit("line 1095 - issue with parsing the test itself", () => {});
xit("line 1096 - issue with parsing the test itself", () => {});
xit("line 1097 - issue with parsing the test itself", () => {});
xit("line 1098 - issue with parsing the test itself", () => {});
xit("line: 1099 - back references are not supported", () => {});
xit("line: 1100 - back references are not supported", () => {});
xit("line: 1101 - back references are not supported", () => {});
xit("line: 1102 - test contains an octal escape sequence", () => {});
xit("line 1103 - issue with parsing the test itself", () => {});
it("line: 1104 - matches ^\\s against '\\x0cxyz'", () => {
  const match = exec("^\\s", "\x0cxyz", "s");
  expect(match.matches[0]).toBe("\x0cxyz".substring(0, 1));
});
it("line: 1105 - matches ^\\s against '\\fabc'", () => {
  const match = exec("^\\s", "\fabc", "s");
  expect(match.matches[0]).toBe("\fabc".substring(0, 1));
});
it("line: 1106 - matches ^\\s against '\\nabc'", () => {
  const match = exec("^\\s", "\nabc", "s");
  expect(match.matches[0]).toBe("\nabc".substring(0, 1));
});
it("line: 1107 - matches ^\\s against '\\rabc'", () => {
  const match = exec("^\\s", "\rabc", "s");
  expect(match.matches[0]).toBe("\rabc".substring(0, 1));
});
it("line: 1108 - matches ^\\s against '\\tabc'", () => {
  const match = exec("^\\s", "\tabc", "s");
  expect(match.matches[0]).toBe("\tabc".substring(0, 1));
});
it("line: 1109 - matches ^\\s against 'abc'", () => {
  expectNotMatch("^\\s", ["abc"]);
});
xit("line: 1113 - back references are not supported", () => {});
xit("line: 1114 - back references are not supported", () => {});
xit("line: 1115 - back references are not supported", () => {});
xit("line: 1116 - back references are not supported", () => {});
xit("line: 1117 - back references are not supported", () => {});
xit("line: 1118 - back references are not supported", () => {});
xit("line: 1119 - back references are not supported", () => {});
xit("line: 1120 - back references are not supported", () => {});
xit("line: 1121 - back references are not supported", () => {});
xit("line: 1122 - back references are not supported", () => {});
xit("line: 1123 - back references are not supported", () => {});
xit("line: 1124 - back references are not supported", () => {});
xit("line: 1125 - back references are not supported", () => {});
xit("line: 1126 - back references are not supported", () => {});
xit("line: 1127 - back references are not supported", () => {});
xit("line: 1128 - back references are not supported", () => {});
xit("line: 1129 - back references are not supported", () => {});
xit("line: 1130 - back references are not supported", () => {});
xit("line: 1131 - back references are not supported", () => {});
xit("line: 1132 - back references are not supported", () => {});
xit("line: 1133 - back references are not supported", () => {});
xit("line: 1134 - back references are not supported", () => {});
xit("line: 1135 - back references are not supported", () => {});
it("line: 1136 - matches ab{1,3}bc against 'abbbbc'", () => {
  const match = exec("ab{1,3}bc", "abbbbc", "s");
  expect(match.matches[0]).toBe("abbbbc".substring(0, 6));
});
it("line: 1137 - matches ab{1,3}bc against 'abbbc'", () => {
  const match = exec("ab{1,3}bc", "abbbc", "s");
  expect(match.matches[0]).toBe("abbbc".substring(0, 5));
});
it("line: 1138 - matches ab{1,3}bc against 'abbc'", () => {
  const match = exec("ab{1,3}bc", "abbc", "s");
  expect(match.matches[0]).toBe("abbc".substring(0, 4));
});
it("line: 1139 - matches ab{1,3}bc against 'abc'", () => {
  expectNotMatch("ab{1,3}bc", ["abc"]);
});
it("line: 1140 - matches ab{1,3}bc against 'abbbbbc'", () => {
  expectNotMatch("ab{1,3}bc", ["abbbbbc"]);
});
it("line: 1141 - matches ([^.]*)\\.([^:]*):[T ]+(.*) against 'track1.title:TBlah blah blah'", () => {
  const match = exec(
    "([^.]*)\\.([^:]*):[T ]+(.*)",
    "track1.title:TBlah blah blah",
    "s"
  );
  expect(match.matches[0]).toBe(
    "track1.title:TBlah blah blah".substring(0, 28)
  );
  expect(match.matches[1]).toBe("track1.title:TBlah blah blah".substring(0, 6));
  expect(match.matches[2]).toBe(
    "track1.title:TBlah blah blah".substring(7, 12)
  );
  expect(match.matches[3]).toBe(
    "track1.title:TBlah blah blah".substring(14, 28)
  );
});
it("line: 1142 - matches ([^.]*)\\.([^:]*):[T ]+(.*) against 'track1.title:TBlah blah blah'", () => {
  const match = exec(
    "([^.]*)\\.([^:]*):[T ]+(.*)",
    "track1.title:TBlah blah blah",
    "is"
  );
  expect(match.matches[0]).toBe(
    "track1.title:TBlah blah blah".substring(0, 28)
  );
  expect(match.matches[1]).toBe("track1.title:TBlah blah blah".substring(0, 6));
  expect(match.matches[2]).toBe(
    "track1.title:TBlah blah blah".substring(7, 12)
  );
  expect(match.matches[3]).toBe(
    "track1.title:TBlah blah blah".substring(14, 28)
  );
});
it("line: 1143 - matches ([^.]*)\\.([^:]*):[t ]+(.*) against 'track1.title:TBlah blah blah'", () => {
  const match = exec(
    "([^.]*)\\.([^:]*):[t ]+(.*)",
    "track1.title:TBlah blah blah",
    "is"
  );
  expect(match.matches[0]).toBe(
    "track1.title:TBlah blah blah".substring(0, 28)
  );
  expect(match.matches[1]).toBe("track1.title:TBlah blah blah".substring(0, 6));
  expect(match.matches[2]).toBe(
    "track1.title:TBlah blah blah".substring(7, 12)
  );
  expect(match.matches[3]).toBe(
    "track1.title:TBlah blah blah".substring(14, 28)
  );
});
it("line: 1144 - matches ^[W-c]+$ against 'WXY_^abc'", () => {
  const match = exec("^[W-c]+$", "WXY_^abc", "s");
  expect(match.matches[0]).toBe("WXY_^abc".substring(0, 8));
});
xit("line: 1145 - as-pect test issue", () => {});
xit("line: 1146 - as-pect test issue", () => {});
xit("line: 1147 - requires triage", () => {});
xit("line: 1148 - requires triage", () => {});
xit("line: 1149 - requires triage", () => {});
xit("line: 1150 - multi line regex not supported yet!", () => {});
xit("line: 1151 - multi line regex not supported yet!", () => {});
xit("line: 1152 - multi line regex not supported yet!", () => {});
xit("line: 1153 - multi line regex not supported yet!", () => {});
it("line: 1154 - matches ^abc$ against 'abc'", () => {
  const match = exec("^abc$", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 3));
});
it("line: 1155 - matches ^abc$ against 'qqq\\nabc'", () => {
  expectNotMatch("^abc$", ["qqq\nabc"]);
});
it("line: 1156 - matches ^abc$ against 'abc\\nzzz'", () => {
  expectNotMatch("^abc$", ["abc\nzzz"]);
});
it("line: 1157 - matches ^abc$ against 'qqq\\nabc\nzzz'", () => {
  expectNotMatch("^abc$", ["qqq\nabc\nzzz"]);
});
xit("line: 1158 - multi line regex not supported yet!", () => {});
xit("line: 1159 - multi line regex not supported yet!", () => {});
xit("line: 1160 - multi line regex not supported yet!", () => {});
xit("line: 1161 - multi line regex not supported yet!", () => {});
xit("line: 1162 - multi line regex not supported yet!", () => {});
xit("line: 1163 - requires triage", () => {});
xit("line: 1164 - multi line regex not supported yet!", () => {});
xit("line: 1165 - non capturing groups not supported", () => {});
xit("line: 1166 - non capturing groups not supported", () => {});
it("line: 1167 - matches [-az]+ against 'az-'", () => {
  const match = exec("[-az]+", "az-", "s");
  expect(match.matches[0]).toBe("az-".substring(0, 3));
});
it("line: 1168 - matches [-az]+ against 'b'", () => {
  expectNotMatch("[-az]+", ["b"]);
});
it("line: 1169 - matches [az-]+ against 'za-'", () => {
  const match = exec("[az-]+", "za-", "s");
  expect(match.matches[0]).toBe("za-".substring(0, 3));
});
it("line: 1170 - matches [az-]+ against 'b'", () => {
  expectNotMatch("[az-]+", ["b"]);
});
it("line: 1171 - matches [a\\-z]+ against 'a-z'", () => {
  const match = exec("[a\\-z]+", "a-z", "s");
  expect(match.matches[0]).toBe("a-z".substring(0, 3));
});
it("line: 1172 - matches [a\\-z]+ against 'b'", () => {
  expectNotMatch("[a\\-z]+", ["b"]);
});
it("line: 1173 - matches [a-z]+ against 'abcdxyz'", () => {
  const match = exec("[a-z]+", "abcdxyz", "s");
  expect(match.matches[0]).toBe("abcdxyz".substring(0, 7));
});
it("line: 1174 - matches [\\d-]+ against '12-34'", () => {
  const match = exec("[\\d-]+", "12-34", "s");
  expect(match.matches[0]).toBe("12-34".substring(0, 5));
});
it("line: 1175 - matches [\\d-]+ against 'aaa'", () => {
  expectNotMatch("[\\d-]+", ["aaa"]);
});
it("line: 1178 - matches \\\x5c against '\\'", () => {
  const match = exec("\\\x5c", "\\", "s");
  expect(match.matches[0]).toBe("\\".substring(0, 1));
});
it("line: 1179 - matches \\\x20Z against 'the Zoo'", () => {
  const match = exec("\\\x20Z", "the Zoo", "s");
  expect(match.matches[0]).toBe("the Zoo".substring(3, 5));
});
it("line: 1180 - matches \\\x20Z against 'Zulu'", () => {
  expectNotMatch("\\\x20Z", ["Zulu"]);
});
xit("line: 1181 - back references are not supported", () => {});
xit("line: 1182 - back references are not supported", () => {});
xit("line: 1183 - back references are not supported", () => {});
it("line: 1184 - matches (main(O)?)+ against 'mainmain'", () => {
  const match = exec("(main(O)?)+", "mainmain", "s");
  expect(match.matches[0]).toBe("mainmain".substring(0, 8));
  expect(match.matches[1]).toBe("mainmain".substring(4, 8));
});
xit("line 1185 - issue with parsing the test itself", () => {});
xit("line 1186 - issue with parsing the test itself", () => {});
xit("line 1187 - issue with parsing the test itself", () => {});
xit("line 1188 - issue with parsing the test itself", () => {});
xit("line: 1189 - test indicates a malformed regex, whereas it appears OK in JS", () => {});
it("line: 1190 - matches ^a.b against 'a\\rb'", () => {
  const match = exec("^a.b", "a\rb", "s");
  expect(match.matches[0]).toBe("a\rb".substring(0, 3));
});
it("line: 1191 - matches ^a.b against 'a\\nb'", () => {
  const match = exec("^a.b", "a\nb", "s");
  expect(match.matches[0]).toBe("a\nb".substring(0, 3));
});
it("line: 1192 - matches abc$ against 'abc'", () => {
  const match = exec("abc$", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 3));
});
it("line: 1193 - matches abc$ against 'abc\\n'", () => {
  expectNotMatch("abc$", ["abc\n"]);
});
xit("line: 1194 - multi line regex not supported yet!", () => {});
it("line: 1195 - matches abc$ against 'abc\\ndef'", () => {
  expectNotMatch("abc$", ["abc\ndef"]);
});
xit("line: 1196 - multi line regex not supported yet!", () => {});
xit("line: 1197 - back references are not supported", () => {});
xit("line: 1198 - back references are not supported", () => {});
xit("line: 1199 - back references are not supported", () => {});
xit("line: 1200 - back references are not supported", () => {});
xit("line: 1201 - back references are not supported", () => {});
xit("line: 1202 - test encoding issue", () => {});
xit("line: 1203 - back references are not supported", () => {});
xit("line: 1204 - back references are not supported", () => {});
xit("line: 1205 - back references are not supported", () => {});
xit("line: 1206 - back references are not supported", () => {});
xit("line: 1207 - back references are not supported", () => {});
xit("line: 1208 - back references are not supported", () => {});
xit("line: 1209 - back references are not supported", () => {});
xit("line: 1210 - back references are not supported", () => {});
xit("line: 1211 - back references are not supported", () => {});
xit("line: 1212 - back references are not supported", () => {});
xit("line: 1213 - back references are not supported", () => {});
xit("line: 1214 - back references are not supported", () => {});
xit("line: 1215 - back references are not supported", () => {});
xit("line: 1216 - back references are not supported", () => {});
xit("line: 1217 - back references are not supported", () => {});
xit("line: 1218 - back references are not supported", () => {});
xit("line: 1219 - back references are not supported", () => {});
xit("line: 1220 - back references are not supported", () => {});
xit("line: 1221 - non capturing groups not supported", () => {});
it("line: 1223 - matches ab\\gdef against 'abgdef'", () => {
  const match = exec("ab\\gdef", "abgdef", "s");
  expect(match.matches[0]).toBe("abgdef".substring(0, 6));
});
it("line: 1224 - matches a{0}bc against 'bc'", () => {
  const match = exec("a{0}bc", "bc", "s");
  expect(match.matches[0]).toBe("bc".substring(0, 2));
});
xit("line: 1225 - lazy quantifiers are not supported", () => {});
xit("line: 1226 - back references are not supported", () => {});
xit("line: 1227 - back references are not supported", () => {});
xit("line: 1228 - back references are not supported", () => {});
xit("line: 1229 - back references are not supported", () => {});
xit("line: 1230 - back references are not supported", () => {});
xit("line: 1231 - non capturing groups not supported", () => {});
xit("line: 1232 - word boundary class not supported yet!", () => {});
xit("line: 1233 - word boundary class not supported yet!", () => {});
xit("line: 1234 - word boundary class not supported yet!", () => {});
xit("line: 1235 - word boundary class not supported yet!", () => {});
xit("line: 1236 - word boundary class not supported yet!", () => {});
xit("line: 1237 - word boundary class not supported yet!", () => {});
xit("line: 1238 - word boundary class not supported yet!", () => {});
xit("line: 1239 - requires triage", () => {});
it("line: 1240 - matches [^a] against 'Abc'", () => {
  const match = exec("[^a]", "Abc", "s");
  expect(match.matches[0]).toBe("Abc".substring(0, 1));
});
it("line: 1241 - matches [^a] against 'Abc '", () => {
  const match = exec("[^a]", "Abc ", "is");
  expect(match.matches[0]).toBe("Abc ".substring(1, 2));
});
it("line: 1242 - matches [^a]+ against 'AAAaAbc'", () => {
  const match = exec("[^a]+", "AAAaAbc", "s");
  expect(match.matches[0]).toBe("AAAaAbc".substring(0, 3));
});
it("line: 1243 - matches [^a]+ against 'AAAaAbc '", () => {
  const match = exec("[^a]+", "AAAaAbc ", "is");
  expect(match.matches[0]).toBe("AAAaAbc ".substring(5, 8));
});
it("line: 1244 - matches [^a]+ against 'bbb\\nccc'", () => {
  const match = exec("[^a]+", "bbb\nccc", "s");
  expect(match.matches[0]).toBe("bbb\nccc".substring(0, 7));
});
it("line: 1245 - matches [^k]$ against 'abc'", () => {
  const match = exec("[^k]$", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(2, 3));
});
it("line: 1246 - matches [^k]$ against 'abk   '", () => {
  const match = exec("[^k]$", "abk   ", "s");
  expect(match.matches[0]).toBe("abk   ".substring(5, 6));
});
it("line: 1247 - matches [^k]{2,3}$ against 'abc'", () => {
  const match = exec("[^k]{2,3}$", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 3));
});
it("line: 1248 - matches [^k]{2,3}$ against 'kbc'", () => {
  const match = exec("[^k]{2,3}$", "kbc", "s");
  expect(match.matches[0]).toBe("kbc".substring(1, 3));
});
it("line: 1249 - matches [^k]{2,3}$ against 'kabc '", () => {
  const match = exec("[^k]{2,3}$", "kabc ", "s");
  expect(match.matches[0]).toBe("kabc ".substring(2, 5));
});
it("line: 1250 - matches [^k]{2,3}$ against 'abk'", () => {
  expectNotMatch("[^k]{2,3}$", ["abk"]);
});
it("line: 1251 - matches [^k]{2,3}$ against 'akb'", () => {
  expectNotMatch("[^k]{2,3}$", ["akb"]);
});
it("line: 1252 - matches [^k]{2,3}$ against 'akk '", () => {
  expectNotMatch("[^k]{2,3}$", ["akk "]);
});
it("line: 1253 - matches ^\\d{8,}\\@.+[^k]$ against '12345678@a.b.c.d'", () => {
  const match = exec("^\\d{8,}\\@.+[^k]$", "12345678@a.b.c.d", "s");
  expect(match.matches[0]).toBe("12345678@a.b.c.d".substring(0, 16));
});
it("line: 1254 - matches ^\\d{8,}\\@.+[^k]$ against '123456789@x.y.z'", () => {
  const match = exec("^\\d{8,}\\@.+[^k]$", "123456789@x.y.z", "s");
  expect(match.matches[0]).toBe("123456789@x.y.z".substring(0, 15));
});
it("line: 1255 - matches ^\\d{8,}\\@.+[^k]$ against '12345678@x.y.uk'", () => {
  expectNotMatch("^\\d{8,}\\@.+[^k]$", ["12345678@x.y.uk"]);
});
it("line: 1256 - matches ^\\d{8,}\\@.+[^k]$ against '1234567@a.b.c.d       '", () => {
  expectNotMatch("^\\d{8,}\\@.+[^k]$", ["1234567@a.b.c.d       "]);
});
xit("line: 1257 - back references are not supported", () => {});
xit("line: 1258 - back references are not supported", () => {});
xit("line: 1259 - back references are not supported", () => {});
it("line: 1260 - matches [^a] against 'aaaabcd'", () => {
  const match = exec("[^a]", "aaaabcd", "s");
  expect(match.matches[0]).toBe("aaaabcd".substring(4, 5));
});
it("line: 1261 - matches [^a] against 'aaAabcd '", () => {
  const match = exec("[^a]", "aaAabcd ", "s");
  expect(match.matches[0]).toBe("aaAabcd ".substring(2, 3));
});
it("line: 1262 - matches [^a] against 'aaaabcd'", () => {
  const match = exec("[^a]", "aaaabcd", "is");
  expect(match.matches[0]).toBe("aaaabcd".substring(4, 5));
});
it("line: 1263 - matches [^a] against 'aaAabcd '", () => {
  const match = exec("[^a]", "aaAabcd ", "is");
  expect(match.matches[0]).toBe("aaAabcd ".substring(4, 5));
});
it("line: 1264 - matches [^az] against 'aaaabcd'", () => {
  const match = exec("[^az]", "aaaabcd", "s");
  expect(match.matches[0]).toBe("aaaabcd".substring(4, 5));
});
it("line: 1265 - matches [^az] against 'aaAabcd '", () => {
  const match = exec("[^az]", "aaAabcd ", "s");
  expect(match.matches[0]).toBe("aaAabcd ".substring(2, 3));
});
it("line: 1266 - matches [^az] against 'aaaabcd'", () => {
  const match = exec("[^az]", "aaaabcd", "is");
  expect(match.matches[0]).toBe("aaaabcd".substring(4, 5));
});
it("line: 1267 - matches [^az] against 'aaAabcd '", () => {
  const match = exec("[^az]", "aaAabcd ", "is");
  expect(match.matches[0]).toBe("aaAabcd ".substring(4, 5));
});
xit("line: 1268 - back references are not supported", () => {});
xit("line: 1269 - lazy quantifiers are not supported", () => {});
xit("line: 1270 - lazy quantifiers are not supported", () => {});
it("line: 1271 - matches (\\.\\d\\d[1-9]?)\\d+ against '1.230003938'", () => {
  const match = exec("(\\.\\d\\d[1-9]?)\\d+", "1.230003938", "s");
  expect(match.matches[0]).toBe("1.230003938".substring(1, 11));
  expect(match.matches[1]).toBe("1.230003938".substring(1, 4));
});
it("line: 1272 - matches (\\.\\d\\d[1-9]?)\\d+ against '1.875000282   '", () => {
  const match = exec("(\\.\\d\\d[1-9]?)\\d+", "1.875000282   ", "s");
  expect(match.matches[0]).toBe("1.875000282   ".substring(1, 11));
  expect(match.matches[1]).toBe("1.875000282   ".substring(1, 5));
});
it("line: 1273 - matches (\\.\\d\\d[1-9]?)\\d+ against '1.235  '", () => {
  const match = exec("(\\.\\d\\d[1-9]?)\\d+", "1.235  ", "s");
  expect(match.matches[0]).toBe("1.235  ".substring(1, 5));
  expect(match.matches[1]).toBe("1.235  ".substring(1, 4));
});
xit("line: 1274 - non capturing groups not supported", () => {});
xit("line: 1275 - non capturing groups not supported", () => {});
xit("line: 1276 - non capturing groups not supported", () => {});
xit("line: 1277 - non capturing groups not supported", () => {});
xit("line: 1278 - non capturing groups not supported", () => {});
xit("line: 1279 - non capturing groups not supported", () => {});
xit("line: 1280 - word boundary class not supported yet!", () => {});
it("line: 1281 - matches foo(.*)bar against 'The food is under the bar in the barn.'", () => {
  const match = exec(
    "foo(.*)bar",
    "The food is under the bar in the barn.",
    "s"
  );
  expect(match.matches[0]).toBe(
    "The food is under the bar in the barn.".substring(4, 36)
  );
  expect(match.matches[1]).toBe(
    "The food is under the bar in the barn.".substring(7, 33)
  );
});
xit("line: 1282 - lazy quantifiers are not supported", () => {});
it("line: 1283 - matches (.*)(\\d*) against 'I have 2 numbers: 53147'", () => {
  const match = exec("(.*)(\\d*)", "I have 2 numbers: 53147", "s");
  expect(match.matches[0]).toBe("I have 2 numbers: 53147".substring(0, 23));
  expect(match.matches[1]).toBe("I have 2 numbers: 53147".substring(0, 23));
  expect(match.matches[2]).toBe("I have 2 numbers: 53147".substring(23, 23));
});
it("line: 1284 - matches (.*)(\\d+) against 'I have 2 numbers: 53147'", () => {
  const match = exec("(.*)(\\d+)", "I have 2 numbers: 53147", "s");
  expect(match.matches[0]).toBe("I have 2 numbers: 53147".substring(0, 23));
  expect(match.matches[1]).toBe("I have 2 numbers: 53147".substring(0, 22));
  expect(match.matches[2]).toBe("I have 2 numbers: 53147".substring(22, 23));
});
xit("line: 1285 - lazy quantifiers are not supported", () => {});
xit("line: 1286 - lazy quantifiers are not supported", () => {});
it("line: 1287 - matches (.*)(\\d+)$ against 'I have 2 numbers: 53147'", () => {
  const match = exec("(.*)(\\d+)$", "I have 2 numbers: 53147", "s");
  expect(match.matches[0]).toBe("I have 2 numbers: 53147".substring(0, 23));
  expect(match.matches[1]).toBe("I have 2 numbers: 53147".substring(0, 22));
  expect(match.matches[2]).toBe("I have 2 numbers: 53147".substring(22, 23));
});
xit("line: 1288 - lazy quantifiers are not supported", () => {});
xit("line: 1289 - word boundary class not supported yet!", () => {});
it("line: 1290 - matches (.*\\D)(\\d+)$ against 'I have 2 numbers: 53147'", () => {
  const match = exec("(.*\\D)(\\d+)$", "I have 2 numbers: 53147", "s");
  expect(match.matches[0]).toBe("I have 2 numbers: 53147".substring(0, 23));
  expect(match.matches[1]).toBe("I have 2 numbers: 53147".substring(0, 18));
  expect(match.matches[2]).toBe("I have 2 numbers: 53147".substring(18, 23));
});
xit("line: 1291 - non capturing groups not supported", () => {});
xit("line: 1292 - non capturing groups not supported", () => {});
xit("line: 1293 - non capturing groups not supported", () => {});
it("line: 1294 - matches ^[W-]46] against 'W46]789 '", () => {
  const match = exec("^[W-]46]", "W46]789 ", "s");
  expect(match.matches[0]).toBe("W46]789 ".substring(0, 4));
});
it("line: 1295 - matches ^[W-]46] against '-46]789'", () => {
  const match = exec("^[W-]46]", "-46]789", "s");
  expect(match.matches[0]).toBe("-46]789".substring(0, 4));
});
it("line: 1296 - matches ^[W-]46] against 'Wall'", () => {
  expectNotMatch("^[W-]46]", ["Wall"]);
});
it("line: 1297 - matches ^[W-]46] against 'Zebra'", () => {
  expectNotMatch("^[W-]46]", ["Zebra"]);
});
it("line: 1298 - matches ^[W-]46] against '42'", () => {
  expectNotMatch("^[W-]46]", ["42"]);
});
it("line: 1299 - matches ^[W-]46] against '[abcd] '", () => {
  expectNotMatch("^[W-]46]", ["[abcd] "]);
});
it("line: 1300 - matches ^[W-]46] against ']abcd['", () => {
  expectNotMatch("^[W-]46]", ["]abcd["]);
});
xit("line: 1301 - requires triage", () => {});
xit("line: 1302 - requires triage", () => {});
xit("line: 1303 - requires triage", () => {});
xit("line: 1304 - requires triage", () => {});
xit("line: 1305 - requires triage", () => {});
xit("line: 1306 - requires triage", () => {});
xit("line: 1307 - requires triage", () => {});
xit("line: 1308 - requires triage", () => {});
it("line: 1309 - matches ^[W-\\]46] against '-46]789'", () => {
  expectNotMatch("^[W-\\]46]", ["-46]789"]);
});
it("line: 1310 - matches ^[W-\\]46] against 'well'", () => {
  expectNotMatch("^[W-\\]46]", ["well"]);
});
it("line: 1311 - matches \\d\\d/\\d\\d/\\d\\d\\d\\d against '01/01/2000'", () => {
  const match = exec("\\d\\d/\\d\\d/\\d\\d\\d\\d", "01/01/2000", "s");
  expect(match.matches[0]).toBe("01/01/2000".substring(0, 10));
});
xit("line: 1312 - non capturing groups not supported", () => {});
xit("line: 1313 - non capturing groups not supported", () => {});
xit("line: 1314 - non capturing groups not supported", () => {});
it("line: 1315 - matches ^(a){0,0} against 'bcd'", () => {
  const match = exec("^(a){0,0}", "bcd", "s");
  expect(match.matches[0]).toBe("bcd".substring(0, 0));
});
it("line: 1316 - matches ^(a){0,0} against 'abc'", () => {
  const match = exec("^(a){0,0}", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 0));
});
it("line: 1317 - matches ^(a){0,0} against 'aab     '", () => {
  const match = exec("^(a){0,0}", "aab     ", "s");
  expect(match.matches[0]).toBe("aab     ".substring(0, 0));
});
it("line: 1318 - matches ^(a){0,1} against 'bcd'", () => {
  const match = exec("^(a){0,1}", "bcd", "s");
  expect(match.matches[0]).toBe("bcd".substring(0, 0));
});
it("line: 1319 - matches ^(a){0,1} against 'abc'", () => {
  const match = exec("^(a){0,1}", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1320 - matches ^(a){0,1} against 'aab  '", () => {
  const match = exec("^(a){0,1}", "aab  ", "s");
  expect(match.matches[0]).toBe("aab  ".substring(0, 1));
  expect(match.matches[1]).toBe("aab  ".substring(0, 1));
});
it("line: 1321 - matches ^(a){0,2} against 'bcd'", () => {
  const match = exec("^(a){0,2}", "bcd", "s");
  expect(match.matches[0]).toBe("bcd".substring(0, 0));
});
it("line: 1322 - matches ^(a){0,2} against 'abc'", () => {
  const match = exec("^(a){0,2}", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1323 - matches ^(a){0,2} against 'aab  '", () => {
  const match = exec("^(a){0,2}", "aab  ", "s");
  expect(match.matches[0]).toBe("aab  ".substring(0, 2));
  expect(match.matches[1]).toBe("aab  ".substring(1, 2));
});
it("line: 1324 - matches ^(a){0,3} against 'bcd'", () => {
  const match = exec("^(a){0,3}", "bcd", "s");
  expect(match.matches[0]).toBe("bcd".substring(0, 0));
});
it("line: 1325 - matches ^(a){0,3} against 'abc'", () => {
  const match = exec("^(a){0,3}", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1326 - matches ^(a){0,3} against 'aab'", () => {
  const match = exec("^(a){0,3}", "aab", "s");
  expect(match.matches[0]).toBe("aab".substring(0, 2));
  expect(match.matches[1]).toBe("aab".substring(1, 2));
});
it("line: 1327 - matches ^(a){0,3} against 'aaa   '", () => {
  const match = exec("^(a){0,3}", "aaa   ", "s");
  expect(match.matches[0]).toBe("aaa   ".substring(0, 3));
  expect(match.matches[1]).toBe("aaa   ".substring(2, 3));
});
it("line: 1328 - matches ^(a){0,} against 'bcd'", () => {
  const match = exec("^(a){0,}", "bcd", "s");
  expect(match.matches[0]).toBe("bcd".substring(0, 0));
});
it("line: 1329 - matches ^(a){0,} against 'abc'", () => {
  const match = exec("^(a){0,}", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1330 - matches ^(a){0,} against 'aab'", () => {
  const match = exec("^(a){0,}", "aab", "s");
  expect(match.matches[0]).toBe("aab".substring(0, 2));
  expect(match.matches[1]).toBe("aab".substring(1, 2));
});
it("line: 1331 - matches ^(a){0,} against 'aaa'", () => {
  const match = exec("^(a){0,}", "aaa", "s");
  expect(match.matches[0]).toBe("aaa".substring(0, 3));
  expect(match.matches[1]).toBe("aaa".substring(2, 3));
});
it("line: 1332 - matches ^(a){0,} against 'aaaaaaaa    '", () => {
  const match = exec("^(a){0,}", "aaaaaaaa    ", "s");
  expect(match.matches[0]).toBe("aaaaaaaa    ".substring(0, 8));
  expect(match.matches[1]).toBe("aaaaaaaa    ".substring(7, 8));
});
it("line: 1333 - matches ^(a){1,1} against 'bcd'", () => {
  expectNotMatch("^(a){1,1}", ["bcd"]);
});
it("line: 1334 - matches ^(a){1,1} against 'abc'", () => {
  const match = exec("^(a){1,1}", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1335 - matches ^(a){1,1} against 'aab  '", () => {
  const match = exec("^(a){1,1}", "aab  ", "s");
  expect(match.matches[0]).toBe("aab  ".substring(0, 1));
  expect(match.matches[1]).toBe("aab  ".substring(0, 1));
});
it("line: 1336 - matches ^(a){1,2} against 'bcd'", () => {
  expectNotMatch("^(a){1,2}", ["bcd"]);
});
it("line: 1337 - matches ^(a){1,2} against 'abc'", () => {
  const match = exec("^(a){1,2}", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1338 - matches ^(a){1,2} against 'aab  '", () => {
  const match = exec("^(a){1,2}", "aab  ", "s");
  expect(match.matches[0]).toBe("aab  ".substring(0, 2));
  expect(match.matches[1]).toBe("aab  ".substring(1, 2));
});
it("line: 1339 - matches ^(a){1,3} against 'bcd'", () => {
  expectNotMatch("^(a){1,3}", ["bcd"]);
});
it("line: 1340 - matches ^(a){1,3} against 'abc'", () => {
  const match = exec("^(a){1,3}", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1341 - matches ^(a){1,3} against 'aab'", () => {
  const match = exec("^(a){1,3}", "aab", "s");
  expect(match.matches[0]).toBe("aab".substring(0, 2));
  expect(match.matches[1]).toBe("aab".substring(1, 2));
});
it("line: 1342 - matches ^(a){1,3} against 'aaa   '", () => {
  const match = exec("^(a){1,3}", "aaa   ", "s");
  expect(match.matches[0]).toBe("aaa   ".substring(0, 3));
  expect(match.matches[1]).toBe("aaa   ".substring(2, 3));
});
it("line: 1343 - matches ^(a){1,} against 'bcd'", () => {
  expectNotMatch("^(a){1,}", ["bcd"]);
});
it("line: 1344 - matches ^(a){1,} against 'abc'", () => {
  const match = exec("^(a){1,}", "abc", "s");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1345 - matches ^(a){1,} against 'aab'", () => {
  const match = exec("^(a){1,}", "aab", "s");
  expect(match.matches[0]).toBe("aab".substring(0, 2));
  expect(match.matches[1]).toBe("aab".substring(1, 2));
});
it("line: 1346 - matches ^(a){1,} against 'aaa'", () => {
  const match = exec("^(a){1,}", "aaa", "s");
  expect(match.matches[0]).toBe("aaa".substring(0, 3));
  expect(match.matches[1]).toBe("aaa".substring(2, 3));
});
it("line: 1347 - matches ^(a){1,} against 'aaaaaaaa    '", () => {
  const match = exec("^(a){1,}", "aaaaaaaa    ", "s");
  expect(match.matches[0]).toBe("aaaaaaaa    ".substring(0, 8));
  expect(match.matches[1]).toBe("aaaaaaaa    ".substring(7, 8));
});
it("line: 1348 - matches .{0,}\\.gif against 'borfle\\nbib.gif\nno'", () => {
  const match = exec(".{0,}\\.gif", "borfle\nbib.gif\nno", "s");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 14));
});
it("line: 1349 - matches .*\\.gif against 'borfle\\nbib.gif\nno'", () => {
  const match = exec(".*\\.gif", "borfle\nbib.gif\nno", "s");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 14));
});
xit("line: 1350 - multi line regex not supported yet!", () => {});
it("line: 1351 - matches .*\\.gif against 'borfle\\nbib.gif\nno'", () => {
  const match = exec(".*\\.gif", "borfle\nbib.gif\nno", "s");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 14));
});
xit("line: 1352 - multi line regex not supported yet!", () => {});
it("line: 1353 - matches .*$ against 'borfle\\nbib.gif\nno'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno", "s");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 17));
});
xit("line: 1354 - multi line regex not supported yet!", () => {});
it("line: 1355 - matches .*$ against 'borfle\\nbib.gif\nno'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno", "s");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 17));
});
xit("line: 1356 - multi line regex not supported yet!", () => {});
it("line: 1357 - matches .*$ against 'borfle\\nbib.gif\nno\n'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno\n", "s");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno\n".substring(0, 18));
});
xit("line: 1358 - multi line regex not supported yet!", () => {});
it("line: 1359 - matches .*$ against 'borfle\\nbib.gif\nno\n'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno\n", "s");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno\n".substring(0, 18));
});
xit("line: 1360 - multi line regex not supported yet!", () => {});
it("line: 1361 - matches (.*X|^B) against 'abcde\\n1234Xyz'", () => {
  const match = exec("(.*X|^B)", "abcde\n1234Xyz", "s");
  expect(match.matches[0]).toBe("abcde\n1234Xyz".substring(0, 11));
  expect(match.matches[1]).toBe("abcde\n1234Xyz".substring(0, 11));
});
it("line: 1362 - matches (.*X|^B) against 'BarFoo '", () => {
  const match = exec("(.*X|^B)", "BarFoo ", "s");
  expect(match.matches[0]).toBe("BarFoo ".substring(0, 1));
  expect(match.matches[1]).toBe("BarFoo ".substring(0, 1));
});
xit("line: 1363 - requires triage", () => {});
xit("line: 1364 - multi line regex not supported yet!", () => {});
xit("line: 1365 - multi line regex not supported yet!", () => {});
xit("line: 1366 - multi line regex not supported yet!", () => {});
it("line: 1367 - matches (.*X|^B) against 'abcde\\n1234Xyz'", () => {
  const match = exec("(.*X|^B)", "abcde\n1234Xyz", "s");
  expect(match.matches[0]).toBe("abcde\n1234Xyz".substring(0, 11));
  expect(match.matches[1]).toBe("abcde\n1234Xyz".substring(0, 11));
});
it("line: 1368 - matches (.*X|^B) against 'BarFoo '", () => {
  const match = exec("(.*X|^B)", "BarFoo ", "s");
  expect(match.matches[0]).toBe("BarFoo ".substring(0, 1));
  expect(match.matches[1]).toBe("BarFoo ".substring(0, 1));
});
xit("line: 1369 - requires triage", () => {});
xit("line: 1370 - multi line regex not supported yet!", () => {});
xit("line: 1371 - multi line regex not supported yet!", () => {});
xit("line: 1372 - multi line regex not supported yet!", () => {});
xit("line: 1373 - non capturing groups not supported", () => {});
xit("line: 1374 - non capturing groups not supported", () => {});
xit("line: 1375 - non capturing groups not supported", () => {});
xit("line: 1376 - non capturing groups not supported", () => {});
xit("line: 1377 - non capturing groups not supported", () => {});
xit("line: 1378 - non capturing groups not supported", () => {});
it("line: 1379 - matches ^.*B against 'abc\\nB'", () => {
  const match = exec("^.*B", "abc\nB", "s");
  expect(match.matches[0]).toBe("abc\nB".substring(0, 5));
});
xit("line: 1380 - multi line regex not supported yet!", () => {});
xit("line: 1381 - non capturing groups not supported", () => {});
xit("line: 1382 - non capturing groups not supported", () => {});
xit("line: 1383 - non capturing groups not supported", () => {});
xit("line: 1384 - non capturing groups not supported", () => {});
xit("line: 1385 - non capturing groups not supported", () => {});
xit("line: 1386 - non capturing groups not supported", () => {});
it("line: 1387 - matches ^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9] against '123456654321'", () => {
  const match = exec(
    "^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]",
    "123456654321",
    "s"
  );
  expect(match.matches[0]).toBe("123456654321".substring(0, 12));
});
it("line: 1388 - matches ^\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d against '123456654321 '", () => {
  const match = exec(
    "^\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d",
    "123456654321 ",
    "s"
  );
  expect(match.matches[0]).toBe("123456654321 ".substring(0, 12));
});
it("line: 1389 - matches ^[\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d] against '123456654321'", () => {
  const match = exec(
    "^[\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d]",
    "123456654321",
    "s"
  );
  expect(match.matches[0]).toBe("123456654321".substring(0, 12));
});
it("line: 1390 - matches ^[abc]{12} against 'abcabcabcabc'", () => {
  const match = exec("^[abc]{12}", "abcabcabcabc", "s");
  expect(match.matches[0]).toBe("abcabcabcabc".substring(0, 12));
});
xit("line: 1391 - issues with repeated capture groups", () => {});
xit("line: 1392 - issues with repeated capture groups", () => {});
it("line: 1393 - matches ^[abcdefghijklmnopqrstuvwxy0123456789] against 'n'", () => {
  const match = exec("^[abcdefghijklmnopqrstuvwxy0123456789]", "n", "s");
  expect(match.matches[0]).toBe("n".substring(0, 1));
});
it("line: 1394 - matches ^[abcdefghijklmnopqrstuvwxy0123456789] against 'z '", () => {
  expectNotMatch("^[abcdefghijklmnopqrstuvwxy0123456789]", ["z "]);
});
it("line: 1395 - matches abcde{0,0} against 'abcd'", () => {
  const match = exec("abcde{0,0}", "abcd", "s");
  expect(match.matches[0]).toBe("abcd".substring(0, 4));
});
it("line: 1396 - matches abcde{0,0} against 'abce  '", () => {
  expectNotMatch("abcde{0,0}", ["abce  "]);
});
it("line: 1397 - matches ab[cd]{0,0}e against 'abe'", () => {
  const match = exec("ab[cd]{0,0}e", "abe", "s");
  expect(match.matches[0]).toBe("abe".substring(0, 3));
});
it("line: 1398 - matches ab[cd]{0,0}e against 'abcde '", () => {
  expectNotMatch("ab[cd]{0,0}e", ["abcde "]);
});
it("line: 1399 - matches ab(c){0,0}d against 'abd'", () => {
  const match = exec("ab(c){0,0}d", "abd", "s");
  expect(match.matches[0]).toBe("abd".substring(0, 3));
});
it("line: 1400 - matches ab(c){0,0}d against 'abcd   '", () => {
  expectNotMatch("ab(c){0,0}d", ["abcd   "]);
});
it("line: 1401 - matches a(b*) against 'a'", () => {
  const match = exec("a(b*)", "a", "s");
  expect(match.matches[0]).toBe("a".substring(0, 1));
  expect(match.matches[1]).toBe("a".substring(1, 1));
});
it("line: 1402 - matches a(b*) against 'ab'", () => {
  const match = exec("a(b*)", "ab", "s");
  expect(match.matches[0]).toBe("ab".substring(0, 2));
  expect(match.matches[1]).toBe("ab".substring(1, 2));
});
it("line: 1403 - matches a(b*) against 'abbbb'", () => {
  const match = exec("a(b*)", "abbbb", "s");
  expect(match.matches[0]).toBe("abbbb".substring(0, 5));
  expect(match.matches[1]).toBe("abbbb".substring(1, 5));
});
it("line: 1404 - matches a(b*) against 'bbbbb    '", () => {
  expectNotMatch("a(b*)", ["bbbbb    "]);
});
it("line: 1405 - matches ab\\d{0}e against 'abe'", () => {
  const match = exec("ab\\d{0}e", "abe", "s");
  expect(match.matches[0]).toBe("abe".substring(0, 3));
});
it("line: 1406 - matches ab\\d{0}e against 'ab1e   '", () => {
  expectNotMatch("ab\\d{0}e", ["ab1e   "]);
});
xit("line: 1407 - test cases with quotes are not supported yet!", () => {});
xit("line: 1408 - test cases with quotes are not supported yet!", () => {});
xit("line: 1409 - lazy quantifiers are not supported", () => {});
xit("line: 1410 - word boundary class not supported yet!", () => {});
xit("line: 1411 - word boundary class not supported yet!", () => {});
xit("line: 1412 - test cases for NULL regexes not supported yet", () => {});
xit("line: 1413 - requires triage", () => {});
it("line: 1414 - matches a[^a]b against 'acb'", () => {
  const match = exec("a[^a]b", "acb", "s");
  expect(match.matches[0]).toBe("acb".substring(0, 3));
});
it("line: 1415 - matches a[^a]b against 'a\\nb'", () => {
  const match = exec("a[^a]b", "a\nb", "s");
  expect(match.matches[0]).toBe("a\nb".substring(0, 3));
});
it("line: 1416 - matches a.b against 'acb'", () => {
  const match = exec("a.b", "acb", "s");
  expect(match.matches[0]).toBe("acb".substring(0, 3));
});
it("line: 1417 - matches a.b against 'a\\nb   '", () => {
  const match = exec("a.b", "a\nb   ", "s");
  expect(match.matches[0]).toBe("a\nb   ".substring(0, 3));
});
it("line: 1418 - matches a[^a]b against 'acb'", () => {
  const match = exec("a[^a]b", "acb", "s");
  expect(match.matches[0]).toBe("acb".substring(0, 3));
});
it("line: 1419 - matches a[^a]b against 'a\\nb  '", () => {
  const match = exec("a[^a]b", "a\nb  ", "s");
  expect(match.matches[0]).toBe("a\nb  ".substring(0, 3));
});
it("line: 1420 - matches a.b against 'acb'", () => {
  const match = exec("a.b", "acb", "s");
  expect(match.matches[0]).toBe("acb".substring(0, 3));
});
it("line: 1421 - matches a.b against 'a\\nb  '", () => {
  const match = exec("a.b", "a\nb  ", "s");
  expect(match.matches[0]).toBe("a\nb  ".substring(0, 3));
});
