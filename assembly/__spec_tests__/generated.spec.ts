/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegExp, Match } from "..";
import { expectMatch, expectNotMatch, exec } from "../__tests__/utils";

it("line: 1 - matches the quick brown fox against 'the quick brown fox'", () => {
  const match = exec("the quick brown fox", "the quick brown fox", "ms");
  expect(match.matches[0]).toBe("the quick brown fox".substring(0, 19));
});
it("line: 2 - matches the quick brown fox against 'The quick brown FOX'", () => {
  expectNotMatch("the quick brown fox", ["The quick brown FOX"]);
});
it("line: 3 - matches the quick brown fox against 'What do you know about the quick brown fox?'", () => {
  const match = exec(
    "the quick brown fox",
    "What do you know about the quick brown fox?",
    "ms"
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
  const match = exec("The quick brown fox", "the quick brown fox", "mis");
  expect(match.matches[0]).toBe("the quick brown fox".substring(0, 19));
});
it("line: 6 - matches The quick brown fox against 'The quick brown FOX'", () => {
  const match = exec("The quick brown fox", "The quick brown FOX", "mis");
  expect(match.matches[0]).toBe("The quick brown FOX".substring(0, 19));
});
it("line: 7 - matches The quick brown fox against 'What do you know about the quick brown fox?'", () => {
  const match = exec(
    "The quick brown fox",
    "What do you know about the quick brown fox?",
    "mis"
  );
  expect(match.matches[0]).toBe(
    "What do you know about the quick brown fox?".substring(23, 42)
  );
});
it("line: 8 - matches The quick brown fox against 'What do you know about THE QUICK BROWN FOX?'", () => {
  const match = exec(
    "The quick brown fox",
    "What do you know about THE QUICK BROWN FOX?",
    "mis"
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
    "ms"
  );
  expect(match.matches[0]).toBe("abxyzpqrrrabbxyyyypqAzz".substring(0, 23));
});
it("line: 11 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abxyzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("abxyzpqrrrabbxyyyypqAzz".substring(0, 23));
});
it("line: 12 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabxyzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aabxyzpqrrrabbxyyyypqAzz".substring(0, 24));
});
it("line: 13 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabxyzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aaabxyzpqrrrabbxyyyypqAzz".substring(0, 25));
});
it("line: 14 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabxyzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aaaabxyzpqrrrabbxyyyypqAzz".substring(0, 26));
});
it("line: 15 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abcxyzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("abcxyzpqrrrabbxyyyypqAzz".substring(0, 24));
});
it("line: 16 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabcxyzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aabcxyzpqrrrabbxyyyypqAzz".substring(0, 25));
});
it("line: 17 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypAzz".substring(0, 25));
});
it("line: 18 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypqAzz".substring(0, 26));
});
it("line: 19 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypqqAzz".substring(0, 27));
});
it("line: 20 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "aaabcxyzpqrrrabbxyyyypqqqAzz".substring(0, 28)
  );
});
it("line: 21 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "aaabcxyzpqrrrabbxyyyypqqqqAzz".substring(0, 29)
  );
});
it("line: 22 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqqqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "aaabcxyzpqrrrabbxyyyypqqqqqAzz".substring(0, 30)
  );
});
it("line: 23 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypqqqqqqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypqqqqqqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "aaabcxyzpqrrrabbxyyyypqqqqqqAzz".substring(0, 31)
  );
});
it("line: 24 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aaaabcxyzpqrrrabbxyyyypqAzz".substring(0, 27));
});
it("line: 25 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abxyzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abxyzzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("abxyzzpqrrrabbxyyyypqAzz".substring(0, 24));
});
it("line: 26 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabxyzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabxyzzzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aabxyzzzpqrrrabbxyyyypqAzz".substring(0, 26));
});
it("line: 27 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabxyzzzzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "aaabxyzzzzpqrrrabbxyyyypqAzz".substring(0, 28)
  );
});
it("line: 28 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabxyzzzzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "aaaabxyzzzzpqrrrabbxyyyypqAzz".substring(0, 29)
  );
});
it("line: 29 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'abcxyzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "abcxyzzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("abcxyzzpqrrrabbxyyyypqAzz".substring(0, 25));
});
it("line: 30 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aabcxyzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aabcxyzzzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aabcxyzzzpqrrrabbxyyyypqAzz".substring(0, 27));
});
it("line: 31 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzzzzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "aaabcxyzzzzpqrrrabbxyyyypqAzz".substring(0, 29)
  );
});
it("line: 32 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzzzzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "aaaabcxyzzzzpqrrrabbxyyyypqAzz".substring(0, 30)
  );
});
it("line: 33 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzzzzpqrrrabbbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "aaaabcxyzzzzpqrrrabbbxyyyypqAzz".substring(0, 31)
  );
});
it("line: 34 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaaabcxyzzzzpqrrrabbbxyyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaaabcxyzzzzpqrrrabbbxyyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "aaaabcxyzzzzpqrrrabbbxyyyyypqAzz".substring(0, 32)
  );
});
it("line: 35 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypABzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypABzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypABzz".substring(0, 26));
});
it("line: 36 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against 'aaabcxyzpqrrrabbxyyyypABBzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    "aaabcxyzpqrrrabbxyyyypABBzz",
    "ms"
  );
  expect(match.matches[0]).toBe("aaabcxyzpqrrrabbxyyyypABBzz".substring(0, 27));
});
it("line: 37 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against '>>>aaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    ">>>aaabxyzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(
    ">>>aaabxyzpqrrrabbxyyyypqAzz".substring(3, 28)
  );
});
it("line: 38 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against '>aaaabxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    ">aaaabxyzpqrrrabbxyyyypqAzz",
    "ms"
  );
  expect(match.matches[0]).toBe(">aaaabxyzpqrrrabbxyyyypqAzz".substring(1, 27));
});
it("line: 39 - matches a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz against '>>>>abcxyzpqrrrabbxyyyypqAzz'", () => {
  const match = exec(
    "a*abc?xyz+pqr{3}ab{2,}xy{4,5}pq{0,6}AB{0,}zz",
    ">>>>abcxyzpqrrrabbxyyyypqAzz",
    "ms"
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
  const match = exec("^(abc){1,2}zz", "abczz", "ms");
  expect(match.matches[0]).toBe("abczz".substring(0, 5));
  expect(match.matches[1]).toBe("abczz".substring(0, 3));
});
it("line: 47 - matches ^(abc){1,2}zz against 'abcabczz'", () => {
  const match = exec("^(abc){1,2}zz", "abcabczz", "ms");
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
it("line: 51 - matches ^(b+?|a){1,2}?c against 'bc'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bc", "ms");
  expect(match.matches[0]).toBe("bc".substring(0, 2));
  expect(match.matches[1]).toBe("bc".substring(0, 1));
});
it("line: 52 - matches ^(b+?|a){1,2}?c against 'bbc'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bbc", "ms");
  expect(match.matches[0]).toBe("bbc".substring(0, 3));
  expect(match.matches[1]).toBe("bbc".substring(1, 2));
});
it("line: 53 - matches ^(b+?|a){1,2}?c against 'bbbc'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bbbc", "ms");
  expect(match.matches[0]).toBe("bbbc".substring(0, 4));
  expect(match.matches[1]).toBe("bbbc".substring(1, 3));
});
it("line: 54 - matches ^(b+?|a){1,2}?c against 'bac'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bac", "ms");
  expect(match.matches[0]).toBe("bac".substring(0, 3));
  expect(match.matches[1]).toBe("bac".substring(1, 2));
});
it("line: 55 - matches ^(b+?|a){1,2}?c against 'bbac'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bbac", "ms");
  expect(match.matches[0]).toBe("bbac".substring(0, 4));
  expect(match.matches[1]).toBe("bbac".substring(2, 3));
});
it("line: 56 - matches ^(b+?|a){1,2}?c against 'aac'", () => {
  const match = exec("^(b+?|a){1,2}?c", "aac", "ms");
  expect(match.matches[0]).toBe("aac".substring(0, 3));
  expect(match.matches[1]).toBe("aac".substring(1, 2));
});
it("line: 57 - matches ^(b+?|a){1,2}?c against 'abbbbbbbbbbbc'", () => {
  const match = exec("^(b+?|a){1,2}?c", "abbbbbbbbbbbc", "ms");
  expect(match.matches[0]).toBe("abbbbbbbbbbbc".substring(0, 13));
  expect(match.matches[1]).toBe("abbbbbbbbbbbc".substring(1, 12));
});
it("line: 58 - matches ^(b+?|a){1,2}?c against 'bbbbbbbbbbbac'", () => {
  const match = exec("^(b+?|a){1,2}?c", "bbbbbbbbbbbac", "ms");
  expect(match.matches[0]).toBe("bbbbbbbbbbbac".substring(0, 13));
  expect(match.matches[1]).toBe("bbbbbbbbbbbac".substring(11, 12));
});
it("line: 59 - matches ^(b+?|a){1,2}?c against 'aaac'", () => {
  expectNotMatch("^(b+?|a){1,2}?c", ["aaac"]);
});
it("line: 60 - matches ^(b+?|a){1,2}?c against 'abbbbbbbbbbbac'", () => {
  expectNotMatch("^(b+?|a){1,2}?c", ["abbbbbbbbbbbac"]);
});
it("line: 61 - matches ^(b+|a){1,2}c against 'bc'", () => {
  const match = exec("^(b+|a){1,2}c", "bc", "ms");
  expect(match.matches[0]).toBe("bc".substring(0, 2));
  expect(match.matches[1]).toBe("bc".substring(0, 1));
});
it("line: 62 - matches ^(b+|a){1,2}c against 'bbc'", () => {
  const match = exec("^(b+|a){1,2}c", "bbc", "ms");
  expect(match.matches[0]).toBe("bbc".substring(0, 3));
  expect(match.matches[1]).toBe("bbc".substring(0, 2));
});
it("line: 63 - matches ^(b+|a){1,2}c against 'bbbc'", () => {
  const match = exec("^(b+|a){1,2}c", "bbbc", "ms");
  expect(match.matches[0]).toBe("bbbc".substring(0, 4));
  expect(match.matches[1]).toBe("bbbc".substring(0, 3));
});
it("line: 64 - matches ^(b+|a){1,2}c against 'bac'", () => {
  const match = exec("^(b+|a){1,2}c", "bac", "ms");
  expect(match.matches[0]).toBe("bac".substring(0, 3));
  expect(match.matches[1]).toBe("bac".substring(1, 2));
});
it("line: 65 - matches ^(b+|a){1,2}c against 'bbac'", () => {
  const match = exec("^(b+|a){1,2}c", "bbac", "ms");
  expect(match.matches[0]).toBe("bbac".substring(0, 4));
  expect(match.matches[1]).toBe("bbac".substring(2, 3));
});
it("line: 66 - matches ^(b+|a){1,2}c against 'aac'", () => {
  const match = exec("^(b+|a){1,2}c", "aac", "ms");
  expect(match.matches[0]).toBe("aac".substring(0, 3));
  expect(match.matches[1]).toBe("aac".substring(1, 2));
});
it("line: 67 - matches ^(b+|a){1,2}c against 'abbbbbbbbbbbc'", () => {
  const match = exec("^(b+|a){1,2}c", "abbbbbbbbbbbc", "ms");
  expect(match.matches[0]).toBe("abbbbbbbbbbbc".substring(0, 13));
  expect(match.matches[1]).toBe("abbbbbbbbbbbc".substring(1, 12));
});
it("line: 68 - matches ^(b+|a){1,2}c against 'bbbbbbbbbbbac'", () => {
  const match = exec("^(b+|a){1,2}c", "bbbbbbbbbbbac", "ms");
  expect(match.matches[0]).toBe("bbbbbbbbbbbac".substring(0, 13));
  expect(match.matches[1]).toBe("bbbbbbbbbbbac".substring(11, 12));
});
it("line: 69 - matches ^(b+|a){1,2}c against 'aaac'", () => {
  expectNotMatch("^(b+|a){1,2}c", ["aaac"]);
});
it("line: 70 - matches ^(b+|a){1,2}c against 'abbbbbbbbbbbac'", () => {
  expectNotMatch("^(b+|a){1,2}c", ["abbbbbbbbbbbac"]);
});
it("line: 71 - matches ^(b+|a){1,2}?bc against 'bbc'", () => {
  const match = exec("^(b+|a){1,2}?bc", "bbc", "ms");
  expect(match.matches[0]).toBe("bbc".substring(0, 3));
  expect(match.matches[1]).toBe("bbc".substring(0, 1));
});
it("line: 72 - matches ^(b*|ba){1,2}?bc against 'babc'", () => {
  const match = exec("^(b*|ba){1,2}?bc", "babc", "ms");
  expect(match.matches[0]).toBe("babc".substring(0, 4));
  expect(match.matches[1]).toBe("babc".substring(0, 2));
});
it("line: 73 - matches ^(b*|ba){1,2}?bc against 'bbabc'", () => {
  const match = exec("^(b*|ba){1,2}?bc", "bbabc", "ms");
  expect(match.matches[0]).toBe("bbabc".substring(0, 5));
  expect(match.matches[1]).toBe("bbabc".substring(1, 3));
});
it("line: 74 - matches ^(b*|ba){1,2}?bc against 'bababc'", () => {
  const match = exec("^(b*|ba){1,2}?bc", "bababc", "ms");
  expect(match.matches[0]).toBe("bababc".substring(0, 6));
  expect(match.matches[1]).toBe("bababc".substring(2, 4));
});
it("line: 75 - matches ^(b*|ba){1,2}?bc against 'bababbc'", () => {
  expectNotMatch("^(b*|ba){1,2}?bc", ["bababbc"]);
});
it("line: 76 - matches ^(b*|ba){1,2}?bc against 'babababc'", () => {
  expectNotMatch("^(b*|ba){1,2}?bc", ["babababc"]);
});
it("line: 77 - matches ^(ba|b*){1,2}?bc against 'babc'", () => {
  const match = exec("^(ba|b*){1,2}?bc", "babc", "ms");
  expect(match.matches[0]).toBe("babc".substring(0, 4));
  expect(match.matches[1]).toBe("babc".substring(0, 2));
});
it("line: 78 - matches ^(ba|b*){1,2}?bc against 'bbabc'", () => {
  const match = exec("^(ba|b*){1,2}?bc", "bbabc", "ms");
  expect(match.matches[0]).toBe("bbabc".substring(0, 5));
  expect(match.matches[1]).toBe("bbabc".substring(1, 3));
});
it("line: 79 - matches ^(ba|b*){1,2}?bc against 'bababc'", () => {
  const match = exec("^(ba|b*){1,2}?bc", "bababc", "ms");
  expect(match.matches[0]).toBe("bababc".substring(0, 6));
  expect(match.matches[1]).toBe("bababc".substring(2, 4));
});
it("line: 80 - matches ^(ba|b*){1,2}?bc against 'bababbc'", () => {
  expectNotMatch("^(ba|b*){1,2}?bc", ["bababbc"]);
});
it("line: 81 - matches ^(ba|b*){1,2}?bc against 'babababc'", () => {
  expectNotMatch("^(ba|b*){1,2}?bc", ["babababc"]);
});
xit("line: 82 - test regex contains syntax not supported in JS", () => {});
it("line: 83 - matches ^[ab\\]cde] against 'athing'", () => {
  const match = exec("^[ab\\]cde]", "athing", "ms");
  expect(match.matches[0]).toBe("athing".substring(0, 1));
});
it("line: 84 - matches ^[ab\\]cde] against 'bthing'", () => {
  const match = exec("^[ab\\]cde]", "bthing", "ms");
  expect(match.matches[0]).toBe("bthing".substring(0, 1));
});
it("line: 85 - matches ^[ab\\]cde] against ']thing'", () => {
  const match = exec("^[ab\\]cde]", "]thing", "ms");
  expect(match.matches[0]).toBe("]thing".substring(0, 1));
});
it("line: 86 - matches ^[ab\\]cde] against 'cthing'", () => {
  const match = exec("^[ab\\]cde]", "cthing", "ms");
  expect(match.matches[0]).toBe("cthing".substring(0, 1));
});
it("line: 87 - matches ^[ab\\]cde] against 'dthing'", () => {
  const match = exec("^[ab\\]cde]", "dthing", "ms");
  expect(match.matches[0]).toBe("dthing".substring(0, 1));
});
it("line: 88 - matches ^[ab\\]cde] against 'ething'", () => {
  const match = exec("^[ab\\]cde]", "ething", "ms");
  expect(match.matches[0]).toBe("ething".substring(0, 1));
});
it("line: 89 - matches ^[ab\\]cde] against 'fthing'", () => {
  expectNotMatch("^[ab\\]cde]", ["fthing"]);
});
it("line: 90 - matches ^[ab\\]cde] against '[thing'", () => {
  expectNotMatch("^[ab\\]cde]", ["[thing"]);
});
it("line: 91 - matches ^[ab\\]cde] against '\\thing'", () => {
  expectNotMatch("^[ab\\]cde]", ["\\thing"]);
});
it("line: 92 - matches ^[]cde] against ']thing'", () => {
  const match = exec("^[]cde]", "]thing", "ms");
  expect(match.matches[0]).toBe("]thing".substring(0, 1));
});
it("line: 93 - matches ^[]cde] against 'cthing'", () => {
  const match = exec("^[]cde]", "cthing", "ms");
  expect(match.matches[0]).toBe("cthing".substring(0, 1));
});
it("line: 94 - matches ^[]cde] against 'dthing'", () => {
  const match = exec("^[]cde]", "dthing", "ms");
  expect(match.matches[0]).toBe("dthing".substring(0, 1));
});
it("line: 95 - matches ^[]cde] against 'ething'", () => {
  const match = exec("^[]cde]", "ething", "ms");
  expect(match.matches[0]).toBe("ething".substring(0, 1));
});
it("line: 96 - matches ^[]cde] against 'athing'", () => {
  expectNotMatch("^[]cde]", ["athing"]);
});
it("line: 97 - matches ^[]cde] against 'fthing'", () => {
  expectNotMatch("^[]cde]", ["fthing"]);
});
it("line: 98 - matches ^[^ab\\]cde] against 'fthing'", () => {
  const match = exec("^[^ab\\]cde]", "fthing", "ms");
  expect(match.matches[0]).toBe("fthing".substring(0, 1));
});
it("line: 99 - matches ^[^ab\\]cde] against '[thing'", () => {
  const match = exec("^[^ab\\]cde]", "[thing", "ms");
  expect(match.matches[0]).toBe("[thing".substring(0, 1));
});
it("line: 100 - matches ^[^ab\\]cde] against '\\thing'", () => {
  const match = exec("^[^ab\\]cde]", "\\thing", "ms");
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
  const match = exec("^[^]cde]", "athing", "ms");
  expect(match.matches[0]).toBe("athing".substring(0, 1));
});
it("line: 108 - matches ^[^]cde] against 'fthing'", () => {
  const match = exec("^[^]cde]", "fthing", "ms");
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
  const match = exec("^\\�", "�", "ms");
  expect(match.matches[0]).toBe("�".substring(0, 1));
});
it("line: 114 - matches ^� against '�'", () => {
  const match = exec("^�", "�", "ms");
  expect(match.matches[0]).toBe("�".substring(0, 1));
});
it("line: 115 - matches ^[0-9]+$ against '0'", () => {
  const match = exec("^[0-9]+$", "0", "ms");
  expect(match.matches[0]).toBe("0".substring(0, 1));
});
it("line: 116 - matches ^[0-9]+$ against '1'", () => {
  const match = exec("^[0-9]+$", "1", "ms");
  expect(match.matches[0]).toBe("1".substring(0, 1));
});
it("line: 117 - matches ^[0-9]+$ against '2'", () => {
  const match = exec("^[0-9]+$", "2", "ms");
  expect(match.matches[0]).toBe("2".substring(0, 1));
});
it("line: 118 - matches ^[0-9]+$ against '3'", () => {
  const match = exec("^[0-9]+$", "3", "ms");
  expect(match.matches[0]).toBe("3".substring(0, 1));
});
it("line: 119 - matches ^[0-9]+$ against '4'", () => {
  const match = exec("^[0-9]+$", "4", "ms");
  expect(match.matches[0]).toBe("4".substring(0, 1));
});
it("line: 120 - matches ^[0-9]+$ against '5'", () => {
  const match = exec("^[0-9]+$", "5", "ms");
  expect(match.matches[0]).toBe("5".substring(0, 1));
});
it("line: 121 - matches ^[0-9]+$ against '6'", () => {
  const match = exec("^[0-9]+$", "6", "ms");
  expect(match.matches[0]).toBe("6".substring(0, 1));
});
it("line: 122 - matches ^[0-9]+$ against '7'", () => {
  const match = exec("^[0-9]+$", "7", "ms");
  expect(match.matches[0]).toBe("7".substring(0, 1));
});
it("line: 123 - matches ^[0-9]+$ against '8'", () => {
  const match = exec("^[0-9]+$", "8", "ms");
  expect(match.matches[0]).toBe("8".substring(0, 1));
});
it("line: 124 - matches ^[0-9]+$ against '9'", () => {
  const match = exec("^[0-9]+$", "9", "ms");
  expect(match.matches[0]).toBe("9".substring(0, 1));
});
it("line: 125 - matches ^[0-9]+$ against '10'", () => {
  const match = exec("^[0-9]+$", "10", "ms");
  expect(match.matches[0]).toBe("10".substring(0, 2));
});
it("line: 126 - matches ^[0-9]+$ against '100'", () => {
  const match = exec("^[0-9]+$", "100", "ms");
  expect(match.matches[0]).toBe("100".substring(0, 3));
});
it("line: 127 - matches ^[0-9]+$ against 'abc'", () => {
  expectNotMatch("^[0-9]+$", ["abc"]);
});
it("line: 128 - matches ^.*nter against 'enter'", () => {
  const match = exec("^.*nter", "enter", "ms");
  expect(match.matches[0]).toBe("enter".substring(0, 5));
});
it("line: 129 - matches ^.*nter against 'inter'", () => {
  const match = exec("^.*nter", "inter", "ms");
  expect(match.matches[0]).toBe("inter".substring(0, 5));
});
it("line: 130 - matches ^.*nter against 'uponter'", () => {
  const match = exec("^.*nter", "uponter", "ms");
  expect(match.matches[0]).toBe("uponter".substring(0, 7));
});
it("line: 131 - matches ^xxx[0-9]+$ against 'xxx0'", () => {
  const match = exec("^xxx[0-9]+$", "xxx0", "ms");
  expect(match.matches[0]).toBe("xxx0".substring(0, 4));
});
it("line: 132 - matches ^xxx[0-9]+$ against 'xxx1234'", () => {
  const match = exec("^xxx[0-9]+$", "xxx1234", "ms");
  expect(match.matches[0]).toBe("xxx1234".substring(0, 7));
});
it("line: 133 - matches ^xxx[0-9]+$ against 'xxx'", () => {
  expectNotMatch("^xxx[0-9]+$", ["xxx"]);
});
it("line: 134 - matches ^.+[0-9][0-9][0-9]$ against 'x123'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "x123", "ms");
  expect(match.matches[0]).toBe("x123".substring(0, 4));
});
it("line: 135 - matches ^.+[0-9][0-9][0-9]$ against 'xx123'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "xx123", "ms");
  expect(match.matches[0]).toBe("xx123".substring(0, 5));
});
it("line: 136 - matches ^.+[0-9][0-9][0-9]$ against '123456'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "123456", "ms");
  expect(match.matches[0]).toBe("123456".substring(0, 6));
});
it("line: 137 - matches ^.+[0-9][0-9][0-9]$ against '123'", () => {
  expectNotMatch("^.+[0-9][0-9][0-9]$", ["123"]);
});
it("line: 138 - matches ^.+[0-9][0-9][0-9]$ against 'x1234'", () => {
  const match = exec("^.+[0-9][0-9][0-9]$", "x1234", "ms");
  expect(match.matches[0]).toBe("x1234".substring(0, 5));
});
it("line: 139 - matches ^.+?[0-9][0-9][0-9]$ against 'x123'", () => {
  const match = exec("^.+?[0-9][0-9][0-9]$", "x123", "ms");
  expect(match.matches[0]).toBe("x123".substring(0, 4));
});
it("line: 140 - matches ^.+?[0-9][0-9][0-9]$ against 'xx123'", () => {
  const match = exec("^.+?[0-9][0-9][0-9]$", "xx123", "ms");
  expect(match.matches[0]).toBe("xx123".substring(0, 5));
});
xit("line: 141 - lazy quantifiers should still yield the longest overall regex match", () => {});
xit("line: 142 - lazy quantifiers should still yield the longest overall regex match", () => {});
xit("line: 143 - lazy quantifiers should still yield the longest overall regex match", () => {});
it("line: 144 - matches ^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$ against 'abc!pqr=apquxz.ixr.zzz.ac.uk'", () => {
  const match = exec(
    "^([^!]+)!(.+)=apquxz\\.ixr\\.zzz\\.ac\\.uk$",
    "abc!pqr=apquxz.ixr.zzz.ac.uk",
    "ms"
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
  const match = exec(":", "Well, we need a colon: somewhere", "ms");
  expect(match.matches[0]).toBe(
    "Well, we need a colon: somewhere".substring(21, 22)
  );
});
it("line: 150 - matches : against '*** Fail if we don't'", () => {
  expectNotMatch(":", ["*** Fail if we don't"]);
});
it("line: 151 - matches ([\\da-f:]+)$ against '0abc'", () => {
  const match = exec("([\\da-f:]+)$", "0abc", "mis");
  expect(match.matches[0]).toBe("0abc".substring(0, 4));
  expect(match.matches[1]).toBe("0abc".substring(0, 4));
});
it("line: 152 - matches ([\\da-f:]+)$ against 'abc'", () => {
  const match = exec("([\\da-f:]+)$", "abc", "mis");
  expect(match.matches[0]).toBe("abc".substring(0, 3));
  expect(match.matches[1]).toBe("abc".substring(0, 3));
});
it("line: 153 - matches ([\\da-f:]+)$ against 'fed'", () => {
  const match = exec("([\\da-f:]+)$", "fed", "mis");
  expect(match.matches[0]).toBe("fed".substring(0, 3));
  expect(match.matches[1]).toBe("fed".substring(0, 3));
});
it("line: 154 - matches ([\\da-f:]+)$ against 'E'", () => {
  const match = exec("([\\da-f:]+)$", "E", "mis");
  expect(match.matches[0]).toBe("E".substring(0, 1));
  expect(match.matches[1]).toBe("E".substring(0, 1));
});
it("line: 155 - matches ([\\da-f:]+)$ against '::'", () => {
  const match = exec("([\\da-f:]+)$", "::", "mis");
  expect(match.matches[0]).toBe("::".substring(0, 2));
  expect(match.matches[1]).toBe("::".substring(0, 2));
});
it("line: 156 - matches ([\\da-f:]+)$ against '5f03:12C0::932e'", () => {
  const match = exec("([\\da-f:]+)$", "5f03:12C0::932e", "mis");
  expect(match.matches[0]).toBe("5f03:12C0::932e".substring(0, 15));
  expect(match.matches[1]).toBe("5f03:12C0::932e".substring(0, 15));
});
it("line: 157 - matches ([\\da-f:]+)$ against 'fed def'", () => {
  const match = exec("([\\da-f:]+)$", "fed def", "mis");
  expect(match.matches[0]).toBe("fed def".substring(4, 7));
  expect(match.matches[1]).toBe("fed def".substring(4, 7));
});
it("line: 158 - matches ([\\da-f:]+)$ against 'Any old stuff'", () => {
  const match = exec("([\\da-f:]+)$", "Any old stuff", "mis");
  expect(match.matches[0]).toBe("Any old stuff".substring(11, 13));
  expect(match.matches[1]).toBe("Any old stuff".substring(11, 13));
});
it("line: 159 - matches ([\\da-f:]+)$ against '0zzz'", () => {
  expectNotMatch("([\\da-f:]+)$", ["0zzz"]);
});
it("line: 160 - matches ([\\da-f:]+)$ against 'gzzz'", () => {
  expectNotMatch("([\\da-f:]+)$", ["gzzz"]);
});
it("line: 161 - matches ([\\da-f:]+)$ against 'fed\x20'", () => {
  expectNotMatch("([\\da-f:]+)$", ["fed\x20"]);
});
it("line: 162 - matches ([\\da-f:]+)$ against 'Any old rubbish'", () => {
  expectNotMatch("([\\da-f:]+)$", ["Any old rubbish"]);
});
it("line: 163 - matches ^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$ against '.1.2.3'", () => {
  const match = exec(
    "^.*\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$",
    ".1.2.3",
    "ms"
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
    "ms"
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
    "ms"
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
    "ms"
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
    "ms"
  );
  expect(match.matches[0]).toBe("a.".substring(0, 2));
});
it("line: 172 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against 'Z.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "Z.",
    "ms"
  );
  expect(match.matches[0]).toBe("Z.".substring(0, 2));
});
it("line: 173 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against '2.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "2.",
    "ms"
  );
  expect(match.matches[0]).toBe("2.".substring(0, 2));
});
it("line: 174 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against 'ab-c.pq-r.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "ab-c.pq-r.",
    "ms"
  );
  expect(match.matches[0]).toBe("ab-c.pq-r.".substring(0, 10));
  expect(match.matches[1]).toBe("ab-c.pq-r.".substring(4, 9));
});
it("line: 175 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against 'sxk.zzz.ac.uk.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "sxk.zzz.ac.uk.",
    "ms"
  );
  expect(match.matches[0]).toBe("sxk.zzz.ac.uk.".substring(0, 14));
  expect(match.matches[1]).toBe("sxk.zzz.ac.uk.".substring(10, 13));
});
it("line: 176 - matches ^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$ against 'x-.y-.'", () => {
  const match = exec(
    "^[a-zA-Z\\d][a-zA-Z\\d\\-]*(\\.[a-zA-Z\\d][a-zA-z\\d\\-]*)*\\.$",
    "x-.y-.",
    "ms"
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
    "ms"
  );
  expect(match.matches[0]).toBe("*.a".substring(0, 3));
});
it("line: 179 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.b0-a'", () => {
  const match = exec(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    "*.b0-a",
    "ms"
  );
  expect(match.matches[0]).toBe("*.b0-a".substring(0, 6));
  expect(match.matches[1]).toBe("*.b0-a".substring(3, 6));
});
it("line: 180 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.c3-b.c'", () => {
  const match = exec(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    "*.c3-b.c",
    "ms"
  );
  expect(match.matches[0]).toBe("*.c3-b.c".substring(0, 8));
  expect(match.matches[1]).toBe("*.c3-b.c".substring(3, 6));
  expect(match.matches[2]).toBe("*.c3-b.c".substring(6, 8));
});
it("line: 181 - matches ^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$ against '*.c-a.b-c'", () => {
  const match = exec(
    "^\\*\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?(\\.[a-z]([a-z\\-\\d]*[a-z\\d]+)?)*$",
    "*.c-a.b-c",
    "ms"
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
xit("line: 186 - lookaheads not supported", () => {});
xit("line: 187 - lookaheads not supported", () => {});
xit("line: 188 - lookaheads not supported", () => {});
it("line: 189 - matches ^[\\da-f](\\.[\\da-f])*$ against 'a.b.c.d'", () => {
  const match = exec("^[\\da-f](\\.[\\da-f])*$", "a.b.c.d", "mis");
  expect(match.matches[0]).toBe("a.b.c.d".substring(0, 7));
  expect(match.matches[1]).toBe("a.b.c.d".substring(5, 7));
});
it("line: 190 - matches ^[\\da-f](\\.[\\da-f])*$ against 'A.B.C.D'", () => {
  const match = exec("^[\\da-f](\\.[\\da-f])*$", "A.B.C.D", "mis");
  expect(match.matches[0]).toBe("A.B.C.D".substring(0, 7));
  expect(match.matches[1]).toBe("A.B.C.D".substring(5, 7));
});
it("line: 191 - matches ^[\\da-f](\\.[\\da-f])*$ against 'a.b.c.1.2.3.C'", () => {
  const match = exec("^[\\da-f](\\.[\\da-f])*$", "a.b.c.1.2.3.C", "mis");
  expect(match.matches[0]).toBe("a.b.c.1.2.3.C".substring(0, 13));
  expect(match.matches[1]).toBe("a.b.c.1.2.3.C".substring(11, 13));
});
it('line: 192 - matches ^".*"\\s*(;.*)?$ against \'"1234"\'', () => {
  const match = exec('^".*"\\s*(;.*)?$', '"1234"', "ms");
  expect(match.matches[0]).toBe('"1234"'.substring(0, 6));
});
it('line: 193 - matches ^".*"\\s*(;.*)?$ against \'"abcd" ;\'', () => {
  const match = exec('^".*"\\s*(;.*)?$', '"abcd" ;', "ms");
  expect(match.matches[0]).toBe('"abcd" ;'.substring(0, 8));
  expect(match.matches[1]).toBe('"abcd" ;'.substring(7, 8));
});
it('line: 194 - matches ^".*"\\s*(;.*)?$ against \'"" ; rhubarb\'', () => {
  const match = exec('^".*"\\s*(;.*)?$', '"" ; rhubarb', "ms");
  expect(match.matches[0]).toBe('"" ; rhubarb'.substring(0, 12));
  expect(match.matches[1]).toBe('"" ; rhubarb'.substring(3, 12));
});
it('line: 195 - matches ^".*"\\s*(;.*)?$ against \'"1234" : things\'', () => {
  expectNotMatch('^".*"\\s*(;.*)?$', ['"1234" : things']);
});
it("line: 196 - matches ^$ against ''", () => {
  const match = exec("^$", "", "ms");
  expect(match.matches[0]).toBe("".substring(0, 0));
});
xit("line: 197 - JS regex does not support comments", () => {});
xit("line: 198 - JS regex does not support comments", () => {});
xit("line: 199 - JS regex does not support comments", () => {});
xit("line: 200 - JS regex does not support comments", () => {});
xit("line: 201 - JS regex does not support comments", () => {});
xit("line: 202 - JS regex does not support comments", () => {});
xit("line: 203 - test appears to be incorrect?", () => {});
xit("line: 204 - test appears to be incorrect?", () => {});
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
    "ms"
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
it("line: 208 - matches ^(?:a(b(c)))(?:d(e(f)))(?:h(i(j)))(?:k(l(m)))$ against 'abcdefhijklm'", () => {
  const match = exec(
    "^(?:a(b(c)))(?:d(e(f)))(?:h(i(j)))(?:k(l(m)))$",
    "abcdefhijklm",
    "ms"
  );
  expect(match.matches[0]).toBe("abcdefhijklm".substring(0, 12));
  expect(match.matches[1]).toBe("abcdefhijklm".substring(1, 3));
  expect(match.matches[2]).toBe("abcdefhijklm".substring(2, 3));
  expect(match.matches[3]).toBe("abcdefhijklm".substring(4, 6));
  expect(match.matches[4]).toBe("abcdefhijklm".substring(5, 6));
  expect(match.matches[5]).toBe("abcdefhijklm".substring(7, 9));
  expect(match.matches[6]).toBe("abcdefhijklm".substring(8, 9));
  expect(match.matches[7]).toBe("abcdefhijklm".substring(10, 12));
  expect(match.matches[8]).toBe("abcdefhijklm".substring(11, 12));
});
xit("line: 209 - back references are not supported", () => {});
it("line: 210 - matches ^[.^$|()*+?{,}]+ against '.^$(*+)|{?,?}'", () => {
  const match = exec("^[.^$|()*+?{,}]+", ".^$(*+)|{?,?}", "ms");
  expect(match.matches[0]).toBe(".^$(*+)|{?,?}".substring(0, 13));
});
it("line: 211 - matches ^a*\\w against 'z'", () => {
  const match = exec("^a*\\w", "z", "ms");
  expect(match.matches[0]).toBe("z".substring(0, 1));
});
it("line: 212 - matches ^a*\\w against 'az'", () => {
  const match = exec("^a*\\w", "az", "ms");
  expect(match.matches[0]).toBe("az".substring(0, 2));
});
it("line: 213 - matches ^a*\\w against 'aaaz'", () => {
  const match = exec("^a*\\w", "aaaz", "ms");
  expect(match.matches[0]).toBe("aaaz".substring(0, 4));
});
it("line: 214 - matches ^a*\\w against 'a'", () => {
  const match = exec("^a*\\w", "a", "ms");
  expect(match.matches[0]).toBe("a".substring(0, 1));
});
it("line: 215 - matches ^a*\\w against 'aa'", () => {
  const match = exec("^a*\\w", "aa", "ms");
  expect(match.matches[0]).toBe("aa".substring(0, 2));
});
it("line: 216 - matches ^a*\\w against 'aaaa'", () => {
  const match = exec("^a*\\w", "aaaa", "ms");
  expect(match.matches[0]).toBe("aaaa".substring(0, 4));
});
it("line: 217 - matches ^a*\\w against 'a+'", () => {
  const match = exec("^a*\\w", "a+", "ms");
  expect(match.matches[0]).toBe("a+".substring(0, 1));
});
it("line: 218 - matches ^a*\\w against 'aa+'", () => {
  const match = exec("^a*\\w", "aa+", "ms");
  expect(match.matches[0]).toBe("aa+".substring(0, 2));
});
it("line: 219 - matches ^a*?\\w against 'z'", () => {
  const match = exec("^a*?\\w", "z", "ms");
  expect(match.matches[0]).toBe("z".substring(0, 1));
});
it("line: 220 - matches ^a*?\\w against 'az'", () => {
  const match = exec("^a*?\\w", "az", "ms");
  expect(match.matches[0]).toBe("az".substring(0, 1));
});
it("line: 221 - matches ^a*?\\w against 'aaaz'", () => {
  const match = exec("^a*?\\w", "aaaz", "ms");
  expect(match.matches[0]).toBe("aaaz".substring(0, 1));
});
it("line: 222 - matches ^a*?\\w against 'a'", () => {
  const match = exec("^a*?\\w", "a", "ms");
  expect(match.matches[0]).toBe("a".substring(0, 1));
});
it("line: 223 - matches ^a*?\\w against 'aa'", () => {
  const match = exec("^a*?\\w", "aa", "ms");
  expect(match.matches[0]).toBe("aa".substring(0, 1));
});
it("line: 224 - matches ^a*?\\w against 'aaaa'", () => {
  const match = exec("^a*?\\w", "aaaa", "ms");
  expect(match.matches[0]).toBe("aaaa".substring(0, 1));
});
it("line: 225 - matches ^a*?\\w against 'a+'", () => {
  const match = exec("^a*?\\w", "a+", "ms");
  expect(match.matches[0]).toBe("a+".substring(0, 1));
});
it("line: 226 - matches ^a*?\\w against 'aa+'", () => {
  const match = exec("^a*?\\w", "aa+", "ms");
  expect(match.matches[0]).toBe("aa+".substring(0, 1));
});
it("line: 227 - matches ^a+\\w against 'az'", () => {
  const match = exec("^a+\\w", "az", "ms");
  expect(match.matches[0]).toBe("az".substring(0, 2));
});
it("line: 228 - matches ^a+\\w against 'aaaz'", () => {
  const match = exec("^a+\\w", "aaaz", "ms");
  expect(match.matches[0]).toBe("aaaz".substring(0, 4));
});
it("line: 229 - matches ^a+\\w against 'aa'", () => {
  const match = exec("^a+\\w", "aa", "ms");
  expect(match.matches[0]).toBe("aa".substring(0, 2));
});
it("line: 230 - matches ^a+\\w against 'aaaa'", () => {
  const match = exec("^a+\\w", "aaaa", "ms");
  expect(match.matches[0]).toBe("aaaa".substring(0, 4));
});
it("line: 231 - matches ^a+\\w against 'aa+'", () => {
  const match = exec("^a+\\w", "aa+", "ms");
  expect(match.matches[0]).toBe("aa+".substring(0, 2));
});
it("line: 232 - matches ^a+?\\w against 'az'", () => {
  const match = exec("^a+?\\w", "az", "ms");
  expect(match.matches[0]).toBe("az".substring(0, 2));
});
it("line: 233 - matches ^a+?\\w against 'aaaz'", () => {
  const match = exec("^a+?\\w", "aaaz", "ms");
  expect(match.matches[0]).toBe("aaaz".substring(0, 2));
});
it("line: 234 - matches ^a+?\\w against 'aa'", () => {
  const match = exec("^a+?\\w", "aa", "ms");
  expect(match.matches[0]).toBe("aa".substring(0, 2));
});
it("line: 235 - matches ^a+?\\w against 'aaaa'", () => {
  const match = exec("^a+?\\w", "aaaa", "ms");
  expect(match.matches[0]).toBe("aaaa".substring(0, 2));
});
it("line: 236 - matches ^a+?\\w against 'aa+'", () => {
  const match = exec("^a+?\\w", "aa+", "ms");
  expect(match.matches[0]).toBe("aa+".substring(0, 2));
});
it("line: 237 - matches ^\\d{8}\\w{2,} against '1234567890'", () => {
  const match = exec("^\\d{8}\\w{2,}", "1234567890", "ms");
  expect(match.matches[0]).toBe("1234567890".substring(0, 10));
});
it("line: 238 - matches ^\\d{8}\\w{2,} against '12345678ab'", () => {
  const match = exec("^\\d{8}\\w{2,}", "12345678ab", "ms");
  expect(match.matches[0]).toBe("12345678ab".substring(0, 10));
});
it("line: 239 - matches ^\\d{8}\\w{2,} against '12345678__'", () => {
  const match = exec("^\\d{8}\\w{2,}", "12345678__", "ms");
  expect(match.matches[0]).toBe("12345678__".substring(0, 10));
});
it("line: 240 - matches ^\\d{8}\\w{2,} against '1234567'", () => {
  expectNotMatch("^\\d{8}\\w{2,}", ["1234567"]);
});
it("line: 241 - matches ^[aeiou\\d]{4,5}$ against 'uoie'", () => {
  const match = exec("^[aeiou\\d]{4,5}$", "uoie", "ms");
  expect(match.matches[0]).toBe("uoie".substring(0, 4));
});
it("line: 242 - matches ^[aeiou\\d]{4,5}$ against '1234'", () => {
  const match = exec("^[aeiou\\d]{4,5}$", "1234", "ms");
  expect(match.matches[0]).toBe("1234".substring(0, 4));
});
it("line: 243 - matches ^[aeiou\\d]{4,5}$ against '12345'", () => {
  const match = exec("^[aeiou\\d]{4,5}$", "12345", "ms");
  expect(match.matches[0]).toBe("12345".substring(0, 5));
});
it("line: 244 - matches ^[aeiou\\d]{4,5}$ against 'aaaaa'", () => {
  const match = exec("^[aeiou\\d]{4,5}$", "aaaaa", "ms");
  expect(match.matches[0]).toBe("aaaaa".substring(0, 5));
});
it("line: 245 - matches ^[aeiou\\d]{4,5}$ against '123456'", () => {
  expectNotMatch("^[aeiou\\d]{4,5}$", ["123456"]);
});
it("line: 246 - matches ^[aeiou\\d]{4,5}? against 'uoie'", () => {
  const match = exec("^[aeiou\\d]{4,5}?", "uoie", "ms");
  expect(match.matches[0]).toBe("uoie".substring(0, 4));
});
it("line: 247 - matches ^[aeiou\\d]{4,5}? against '1234'", () => {
  const match = exec("^[aeiou\\d]{4,5}?", "1234", "ms");
  expect(match.matches[0]).toBe("1234".substring(0, 4));
});
it("line: 248 - matches ^[aeiou\\d]{4,5}? against '12345'", () => {
  const match = exec("^[aeiou\\d]{4,5}?", "12345", "ms");
  expect(match.matches[0]).toBe("12345".substring(0, 4));
});
it("line: 249 - matches ^[aeiou\\d]{4,5}? against 'aaaaa'", () => {
  const match = exec("^[aeiou\\d]{4,5}?", "aaaaa", "ms");
  expect(match.matches[0]).toBe("aaaaa".substring(0, 4));
});
it("line: 250 - matches ^[aeiou\\d]{4,5}? against '123456'", () => {
  const match = exec("^[aeiou\\d]{4,5}?", "123456", "ms");
  expect(match.matches[0]).toBe("123456".substring(0, 4));
});
xit("line: 251 - back references are not supported", () => {});
xit("line: 252 - back references are not supported", () => {});
xit("line: 253 - back references are not supported", () => {});
xit("line: 254 - JS regex does not support comments", () => {});
xit("line: 255 - JS regex does not support comments", () => {});
xit("line: 256 - JS regex does not support comments", () => {});
xit("line: 257 - JS regex does not support comments", () => {});
xit("line: 258 - back references are not supported", () => {});
xit("line: 259 - back references are not supported", () => {});
xit("line: 260 - back references are not supported", () => {});
it("line: 261 - matches ^From +([^ ]+) +[a-zA-Z][a-zA-Z][a-zA-Z] +[a-zA-Z][a-zA-Z][a-zA-Z] +[0-9]?[0-9] +[0-9][0-9]:[0-9][0-9] against 'From abcd  Mon Sep 01 12:33:02 1997'", () => {
  const match = exec(
    "^From +([^ ]+) +[a-zA-Z][a-zA-Z][a-zA-Z] +[a-zA-Z][a-zA-Z][a-zA-Z] +[0-9]?[0-9] +[0-9][0-9]:[0-9][0-9]",
    "From abcd  Mon Sep 01 12:33:02 1997",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "From abcd  Mon Sep 01 12:33:02 1997".substring(0, 27)
  );
  expect(match.matches[1]).toBe(
    "From abcd  Mon Sep 01 12:33:02 1997".substring(5, 9)
  );
});
it("line: 262 - matches ^From\\s+\\S+\\s+([a-zA-Z]{3}\\s+){2}\\d{1,2}\\s+\\d\\d:\\d\\d against 'From abcd  Mon Sep 01 12:33:02 1997'", () => {
  const match = exec(
    "^From\\s+\\S+\\s+([a-zA-Z]{3}\\s+){2}\\d{1,2}\\s+\\d\\d:\\d\\d",
    "From abcd  Mon Sep 01 12:33:02 1997",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "From abcd  Mon Sep 01 12:33:02 1997".substring(0, 27)
  );
  expect(match.matches[1]).toBe(
    "From abcd  Mon Sep 01 12:33:02 1997".substring(15, 19)
  );
});
it("line: 263 - matches ^From\\s+\\S+\\s+([a-zA-Z]{3}\\s+){2}\\d{1,2}\\s+\\d\\d:\\d\\d against 'From abcd  Mon Sep  1 12:33:02 1997'", () => {
  const match = exec(
    "^From\\s+\\S+\\s+([a-zA-Z]{3}\\s+){2}\\d{1,2}\\s+\\d\\d:\\d\\d",
    "From abcd  Mon Sep  1 12:33:02 1997",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "From abcd  Mon Sep  1 12:33:02 1997".substring(0, 27)
  );
  expect(match.matches[1]).toBe(
    "From abcd  Mon Sep  1 12:33:02 1997".substring(15, 20)
  );
});
it("line: 264 - matches ^From\\s+\\S+\\s+([a-zA-Z]{3}\\s+){2}\\d{1,2}\\s+\\d\\d:\\d\\d against 'From abcd  Sep 01 12:33:02 1997'", () => {
  expectNotMatch(
    "^From\\s+\\S+\\s+([a-zA-Z]{3}\\s+){2}\\d{1,2}\\s+\\d\\d:\\d\\d",
    ["From abcd  Sep 01 12:33:02 1997"]
  );
});
it("line: 265 - matches ^12.34 against '12\n34'", () => {
  const match = exec("^12.34", "12\n34", "ms");
  expect(match.matches[0]).toBe("12\n34".substring(0, 5));
});
it("line: 266 - matches ^12.34 against '12\r34'", () => {
  const match = exec("^12.34", "12\r34", "ms");
  expect(match.matches[0]).toBe("12\r34".substring(0, 5));
});
xit("line: 267 - lookaheads not supported", () => {});
xit("line: 268 - lookaheads not supported", () => {});
xit("line: 269 - lookaheads not supported", () => {});
xit("line: 270 - lookaheads not supported", () => {});
xit("line: 271 - lookaheads not supported", () => {});
xit("line: 272 - lookaheads not supported", () => {});
xit("line: 273 - lookaheads not supported", () => {});
xit("line: 274 - lookaheads not supported", () => {});
xit("line: 281 - test regex contains syntax not supported in JS", () => {});
xit("line: 282 - back references are not supported", () => {});
xit("line: 283 - back references are not supported", () => {});
xit("line: 284 - back references are not supported", () => {});
xit("line: 285 - back references are not supported", () => {});
xit("line: 286 - lookaheads not supported", () => {});
xit("line: 287 - lookaheads not supported", () => {});
xit("line: 288 - lookaheads not supported", () => {});
xit("line: 289 - lookaheads not supported", () => {});
xit("line: 290 - the test behaviour differs between PCRE and JS", () => {});
it("line: 291 - matches ^[ab]{1,3}?(ab*|b) against 'aabbbbb'", () => {
  const match = exec("^[ab]{1,3}?(ab*|b)", "aabbbbb", "ms");
  expect(match.matches[0]).toBe("aabbbbb".substring(0, 7));
  expect(match.matches[1]).toBe("aabbbbb".substring(1, 7));
});
it("line: 292 - matches ^[ab]{1,3}?(ab*?|b) against 'aabbbbb'", () => {
  const match = exec("^[ab]{1,3}?(ab*?|b)", "aabbbbb", "ms");
  expect(match.matches[0]).toBe("aabbbbb".substring(0, 2));
  expect(match.matches[1]).toBe("aabbbbb".substring(1, 2));
});
it("line: 293 - matches ^[ab]{1,3}(ab*?|b) against 'aabbbbb'", () => {
  const match = exec("^[ab]{1,3}(ab*?|b)", "aabbbbb", "ms");
  expect(match.matches[0]).toBe("aabbbbb".substring(0, 4));
  expect(match.matches[1]).toBe("aabbbbb".substring(3, 4));
});
xit("line 487 - issue with parsing the test itself", () => {});
xit("line 488 - issue with parsing the test itself", () => {});
xit("line 489 - issue with parsing the test itself", () => {});
xit("line 490 - issue with parsing the test itself", () => {});
xit("line 491 - issue with parsing the test itself", () => {});
xit("line 492 - issue with parsing the test itself", () => {});
xit("line 493 - issue with parsing the test itself", () => {});
xit("line 494 - issue with parsing the test itself", () => {});
xit("line 1077 - issue with parsing the test itself", () => {});
xit("line 1078 - issue with parsing the test itself", () => {});
xit("line 1079 - issue with parsing the test itself", () => {});
xit("line 1080 - issue with parsing the test itself", () => {});
xit("line 1081 - issue with parsing the test itself", () => {});
xit("line 1082 - issue with parsing the test itself", () => {});
it("line: 1083 - matches ^[ab]{1,3}(ab*?|b) against 'The quick brown fox'", () => {
  expectNotMatch("^[ab]{1,3}(ab*?|b)", ["The quick brown fox"]);
});
xit("line: 1084 - back references are not supported", () => {});
xit("line: 1085 - back references are not supported", () => {});
xit("line: 1086 - test encoding issue", () => {});
xit("line: 1087 - test requires a substring function", () => {});
xit("line: 1088 - test requires a substring function", () => {});
it("line: 1089 - matches abc\\x0def\\x00pqr\\x000xyz\\x0000AB against 'abc456 abc\x0def\x00pqr\x000xyz\x0000ABCDE'", () => {
  const match = exec(
    "abc\\x0def\\x00pqr\\x000xyz\\x0000AB",
    "abc456 abc\x0def\x00pqr\x000xyz\x0000ABCDE",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "abc456 abc\x0def\x00pqr\x000xyz\x0000ABCDE".substring(7, 27)
  );
});
it("line: 1090 - matches abc\\x0def\\x00pqr\\x000xyz\\x0000AB against 'abc456 abc\x0def\x00pqr\x000xyz\x0000ABCDE'", () => {
  const match = exec(
    "abc\\x0def\\x00pqr\\x000xyz\\x0000AB",
    "abc456 abc\x0def\x00pqr\x000xyz\x0000ABCDE",
    "ms"
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
it("line: 1104 - matches ^\\s against '\x0cxyz'", () => {
  const match = exec("^\\s", "\x0cxyz", "ms");
  expect(match.matches[0]).toBe("\x0cxyz".substring(0, 1));
});
it("line: 1105 - matches ^\\s against '\fabc'", () => {
  const match = exec("^\\s", "\fabc", "ms");
  expect(match.matches[0]).toBe("\fabc".substring(0, 1));
});
it("line: 1106 - matches ^\\s against '\nabc'", () => {
  const match = exec("^\\s", "\nabc", "ms");
  expect(match.matches[0]).toBe("\nabc".substring(0, 1));
});
it("line: 1107 - matches ^\\s against '\rabc'", () => {
  const match = exec("^\\s", "\rabc", "ms");
  expect(match.matches[0]).toBe("\rabc".substring(0, 1));
});
it("line: 1108 - matches ^\\s against '\tabc'", () => {
  const match = exec("^\\s", "\tabc", "ms");
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
  const match = exec("ab{1,3}bc", "abbbbc", "ms");
  expect(match.matches[0]).toBe("abbbbc".substring(0, 6));
});
it("line: 1137 - matches ab{1,3}bc against 'abbbc'", () => {
  const match = exec("ab{1,3}bc", "abbbc", "ms");
  expect(match.matches[0]).toBe("abbbc".substring(0, 5));
});
it("line: 1138 - matches ab{1,3}bc against 'abbc'", () => {
  const match = exec("ab{1,3}bc", "abbc", "ms");
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
    "ms"
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
    "mis"
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
    "mis"
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
  const match = exec("^[W-c]+$", "WXY_^abc", "ms");
  expect(match.matches[0]).toBe("WXY_^abc".substring(0, 8));
});
it("line: 1145 - matches ^[W-c]+$ against 'wxy'", () => {
  expectNotMatch("^[W-c]+$", ["wxy"]);
});
it("line: 1146 - matches ^[W-c]+$ against 'WXY_^abc'", () => {
  const match = exec("^[W-c]+$", "WXY_^abc", "mis");
  expect(match.matches[0]).toBe("WXY_^abc".substring(0, 8));
});
xit("line: 1147 - does not support hex notification in character sets", () => {});
xit("line: 1148 - does not support hex notification in character sets", () => {});
xit("line: 1149 - does not support hex notification in character sets", () => {});
it("line: 1150 - matches ^abc$ against 'abc'", () => {
  const match = exec("^abc$", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 3));
});
it("line: 1151 - matches ^abc$ against 'qqq\nabc'", () => {
  const match = exec("^abc$", "qqq\nabc", "m");
  expect(match.matches[0]).toBe("qqq\nabc".substring(4, 7));
});
it("line: 1152 - matches ^abc$ against 'abc\nzzz'", () => {
  const match = exec("^abc$", "abc\nzzz", "m");
  expect(match.matches[0]).toBe("abc\nzzz".substring(0, 3));
});
it("line: 1153 - matches ^abc$ against 'qqq\nabc\nzzz'", () => {
  const match = exec("^abc$", "qqq\nabc\nzzz", "m");
  expect(match.matches[0]).toBe("qqq\nabc\nzzz".substring(4, 7));
});
it("line: 1154 - matches ^abc$ against 'abc'", () => {
  const match = exec("^abc$", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 3));
});
it("line: 1155 - matches ^abc$ against 'qqq\nabc'", () => {
  expectNotMatch("^abc$", ["qqq\nabc"]);
});
it("line: 1156 - matches ^abc$ against 'abc\nzzz'", () => {
  expectNotMatch("^abc$", ["abc\nzzz"]);
});
it("line: 1157 - matches ^abc$ against 'qqq\nabc\nzzz'", () => {
  expectNotMatch("^abc$", ["qqq\nabc\nzzz"]);
});
xit("line: 1158 - test regex contains syntax not supported in JS", () => {});
it("line: 1159 - matches \\Aabc\\Z against 'abc\n '", () => {
  expectNotMatch("\\Aabc\\Z", ["abc\n "]);
});
it("line: 1160 - matches \\Aabc\\Z against 'qqq\nabc'", () => {
  expectNotMatch("\\Aabc\\Z", ["qqq\nabc"]);
});
it("line: 1161 - matches \\Aabc\\Z against 'abc\nzzz'", () => {
  expectNotMatch("\\Aabc\\Z", ["abc\nzzz"]);
});
it("line: 1162 - matches \\Aabc\\Z against 'qqq\nabc\nzzz'", () => {
  expectNotMatch("\\Aabc\\Z", ["qqq\nabc\nzzz"]);
});
xit("line: 1163 - JS does not support the A Z syntax for start and end of string", () => {});
xit("line: 1164 - JS does not support the A Z syntax for start and end of string", () => {});
it("line: 1165 - matches (?:b)|(?::+) against 'b::c'", () => {
  const match = exec("(?:b)|(?::+)", "b::c", "ms");
  expect(match.matches[0]).toBe("b::c".substring(0, 1));
});
it("line: 1166 - matches (?:b)|(?::+) against 'c::b'", () => {
  const match = exec("(?:b)|(?::+)", "c::b", "ms");
  expect(match.matches[0]).toBe("c::b".substring(1, 3));
});
it("line: 1167 - matches [-az]+ against 'az-'", () => {
  const match = exec("[-az]+", "az-", "ms");
  expect(match.matches[0]).toBe("az-".substring(0, 3));
});
it("line: 1168 - matches [-az]+ against 'b'", () => {
  expectNotMatch("[-az]+", ["b"]);
});
it("line: 1169 - matches [az-]+ against 'za-'", () => {
  const match = exec("[az-]+", "za-", "ms");
  expect(match.matches[0]).toBe("za-".substring(0, 3));
});
it("line: 1170 - matches [az-]+ against 'b'", () => {
  expectNotMatch("[az-]+", ["b"]);
});
it("line: 1171 - matches [a\\-z]+ against 'a-z'", () => {
  const match = exec("[a\\-z]+", "a-z", "ms");
  expect(match.matches[0]).toBe("a-z".substring(0, 3));
});
it("line: 1172 - matches [a\\-z]+ against 'b'", () => {
  expectNotMatch("[a\\-z]+", ["b"]);
});
it("line: 1173 - matches [a-z]+ against 'abcdxyz'", () => {
  const match = exec("[a-z]+", "abcdxyz", "ms");
  expect(match.matches[0]).toBe("abcdxyz".substring(0, 7));
});
it("line: 1174 - matches [\\d-]+ against '12-34'", () => {
  const match = exec("[\\d-]+", "12-34", "ms");
  expect(match.matches[0]).toBe("12-34".substring(0, 5));
});
it("line: 1175 - matches [\\d-]+ against 'aaa'", () => {
  expectNotMatch("[\\d-]+", ["aaa"]);
});
it("line: 1178 - matches \\x5c against '\\'", () => {
  const match = exec("\\x5c", "\\", "ms");
  expect(match.matches[0]).toBe("\\".substring(0, 1));
});
it("line: 1179 - matches \\x20Z against 'the Zoo'", () => {
  const match = exec("\\x20Z", "the Zoo", "ms");
  expect(match.matches[0]).toBe("the Zoo".substring(3, 5));
});
it("line: 1180 - matches \\x20Z against 'Zulu'", () => {
  expectNotMatch("\\x20Z", ["Zulu"]);
});
xit("line: 1181 - back references are not supported", () => {});
xit("line: 1182 - back references are not supported", () => {});
xit("line: 1183 - back references are not supported", () => {});
it("line: 1184 - matches (main(O)?)+ against 'mainmain'", () => {
  const match = exec("(main(O)?)+", "mainmain", "ms");
  expect(match.matches[0]).toBe("mainmain".substring(0, 8));
  expect(match.matches[1]).toBe("mainmain".substring(4, 8));
});
it("line: 1185 - matches (main(O)?)+ against 'mainOmain'", () => {
  const match = exec("(main(O)?)+", "mainOmain", "ms");
  expect(match.matches[0]).toBe("mainOmain".substring(0, 9));
  expect(match.matches[1]).toBe("mainOmain".substring(5, 9));
});
xit("line: 1186 - test indicates a malformed regex, whereas it appears OK in JS", () => {});
xit("line: 1187 - test indicates a malformed regex, whereas it appears OK in JS", () => {});
xit("line: 1188 - test indicates a malformed regex, whereas it appears OK in JS", () => {});
xit("line: 1189 - test indicates a malformed regex, whereas it appears OK in JS", () => {});
it("line: 1190 - matches ^a.b against 'a\rb'", () => {
  const match = exec("^a.b", "a\rb", "ms");
  expect(match.matches[0]).toBe("a\rb".substring(0, 3));
});
it("line: 1191 - matches ^a.b against 'a\nb'", () => {
  const match = exec("^a.b", "a\nb", "ms");
  expect(match.matches[0]).toBe("a\nb".substring(0, 3));
});
it("line: 1192 - matches abc$ against 'abc'", () => {
  const match = exec("abc$", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 3));
});
it("line: 1193 - matches abc$ against 'abc\n'", () => {
  expectNotMatch("abc$", ["abc\n"]);
});
it("line: 1194 - matches abc$ against 'abc\n'", () => {
  const match = exec("abc$", "abc\n", "m");
  expect(match.matches[0]).toBe("abc\n".substring(0, 3));
});
it("line: 1195 - matches abc$ against 'abc\ndef'", () => {
  expectNotMatch("abc$", ["abc\ndef"]);
});
it("line: 1196 - matches abc$ against 'abc\ndef'", () => {
  const match = exec("abc$", "abc\ndef", "m");
  expect(match.matches[0]).toBe("abc\ndef".substring(0, 3));
});
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
xit("line: 1221 - back references are not supported", () => {});
it("line: 1223 - matches ab\\gdef against 'abgdef'", () => {
  const match = exec("ab\\gdef", "abgdef", "ms");
  expect(match.matches[0]).toBe("abgdef".substring(0, 6));
});
it("line: 1224 - matches a{0}bc against 'bc'", () => {
  const match = exec("a{0}bc", "bc", "ms");
  expect(match.matches[0]).toBe("bc".substring(0, 2));
});
it("line: 1225 - matches (a|(bc)){0,0}?xyz against 'xyz'", () => {
  const match = exec("(a|(bc)){0,0}?xyz", "xyz", "ms");
  expect(match.matches[0]).toBe("xyz".substring(0, 3));
});
xit("line: 1226 - back references are not supported", () => {});
xit("line: 1227 - back references are not supported", () => {});
xit("line: 1228 - back references are not supported", () => {});
xit("line: 1229 - back references are not supported", () => {});
xit("line: 1230 - back references are not supported", () => {});
xit("line: 1231 - JS regex does not support mode modifiers", () => {});
xit("line: 1232 - word boundary class not supported yet!", () => {});
xit("line: 1233 - word boundary class not supported yet!", () => {});
xit("line: 1234 - word boundary class not supported yet!", () => {});
xit("line: 1235 - word boundary class not supported yet!", () => {});
xit("line: 1236 - word boundary class not supported yet!", () => {});
xit("line: 1237 - word boundary class not supported yet!", () => {});
xit("line: 1238 - word boundary class not supported yet!", () => {});
it("line: 1239 - matches ^([^a])([^\\f])([^c]*)([^d]{3,4}) against 'b\fc...'", () => {
  expectNotMatch("^([^a])([^\\f])([^c]*)([^d]{3,4})", ["b\fc..."]);
});
it("line: 1240 - matches [^a] against 'Abc'", () => {
  const match = exec("[^a]", "Abc", "ms");
  expect(match.matches[0]).toBe("Abc".substring(0, 1));
});
it("line: 1241 - matches [^a] against 'Abc '", () => {
  const match = exec("[^a]", "Abc ", "mis");
  expect(match.matches[0]).toBe("Abc ".substring(1, 2));
});
it("line: 1242 - matches [^a]+ against 'AAAaAbc'", () => {
  const match = exec("[^a]+", "AAAaAbc", "ms");
  expect(match.matches[0]).toBe("AAAaAbc".substring(0, 3));
});
it("line: 1243 - matches [^a]+ against 'AAAaAbc '", () => {
  const match = exec("[^a]+", "AAAaAbc ", "mis");
  expect(match.matches[0]).toBe("AAAaAbc ".substring(5, 8));
});
it("line: 1244 - matches [^a]+ against 'bbb\nccc'", () => {
  const match = exec("[^a]+", "bbb\nccc", "ms");
  expect(match.matches[0]).toBe("bbb\nccc".substring(0, 7));
});
it("line: 1245 - matches [^k]$ against 'abc'", () => {
  const match = exec("[^k]$", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(2, 3));
});
it("line: 1246 - matches [^k]$ against 'abk   '", () => {
  const match = exec("[^k]$", "abk   ", "ms");
  expect(match.matches[0]).toBe("abk   ".substring(5, 6));
});
it("line: 1247 - matches [^k]{2,3}$ against 'abc'", () => {
  const match = exec("[^k]{2,3}$", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 3));
});
it("line: 1248 - matches [^k]{2,3}$ against 'kbc'", () => {
  const match = exec("[^k]{2,3}$", "kbc", "ms");
  expect(match.matches[0]).toBe("kbc".substring(1, 3));
});
it("line: 1249 - matches [^k]{2,3}$ against 'kabc '", () => {
  const match = exec("[^k]{2,3}$", "kabc ", "ms");
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
  const match = exec("^\\d{8,}\\@.+[^k]$", "12345678@a.b.c.d", "ms");
  expect(match.matches[0]).toBe("12345678@a.b.c.d".substring(0, 16));
});
it("line: 1254 - matches ^\\d{8,}\\@.+[^k]$ against '123456789@x.y.z'", () => {
  const match = exec("^\\d{8,}\\@.+[^k]$", "123456789@x.y.z", "ms");
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
  const match = exec("[^a]", "aaaabcd", "ms");
  expect(match.matches[0]).toBe("aaaabcd".substring(4, 5));
});
it("line: 1261 - matches [^a] against 'aaAabcd '", () => {
  const match = exec("[^a]", "aaAabcd ", "ms");
  expect(match.matches[0]).toBe("aaAabcd ".substring(2, 3));
});
it("line: 1262 - matches [^a] against 'aaaabcd'", () => {
  const match = exec("[^a]", "aaaabcd", "mis");
  expect(match.matches[0]).toBe("aaaabcd".substring(4, 5));
});
it("line: 1263 - matches [^a] against 'aaAabcd '", () => {
  const match = exec("[^a]", "aaAabcd ", "mis");
  expect(match.matches[0]).toBe("aaAabcd ".substring(4, 5));
});
it("line: 1264 - matches [^az] against 'aaaabcd'", () => {
  const match = exec("[^az]", "aaaabcd", "ms");
  expect(match.matches[0]).toBe("aaaabcd".substring(4, 5));
});
it("line: 1265 - matches [^az] against 'aaAabcd '", () => {
  const match = exec("[^az]", "aaAabcd ", "ms");
  expect(match.matches[0]).toBe("aaAabcd ".substring(2, 3));
});
it("line: 1266 - matches [^az] against 'aaaabcd'", () => {
  const match = exec("[^az]", "aaaabcd", "mis");
  expect(match.matches[0]).toBe("aaaabcd".substring(4, 5));
});
it("line: 1267 - matches [^az] against 'aaAabcd '", () => {
  const match = exec("[^az]", "aaAabcd ", "mis");
  expect(match.matches[0]).toBe("aaAabcd ".substring(4, 5));
});
xit("line: 1268 - back references are not supported", () => {});
it("line: 1269 - matches P[^*]TAIRE[^*]{1,6}?LL against 'xxxxxxxxxxxPSTAIREISLLxxxxxxxxx'", () => {
  const match = exec(
    "P[^*]TAIRE[^*]{1,6}?LL",
    "xxxxxxxxxxxPSTAIREISLLxxxxxxxxx",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "xxxxxxxxxxxPSTAIREISLLxxxxxxxxx".substring(11, 22)
  );
});
it("line: 1270 - matches P[^*]TAIRE[^*]{1,}?LL against 'xxxxxxxxxxxPSTAIREISLLxxxxxxxxx'", () => {
  const match = exec(
    "P[^*]TAIRE[^*]{1,}?LL",
    "xxxxxxxxxxxPSTAIREISLLxxxxxxxxx",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "xxxxxxxxxxxPSTAIREISLLxxxxxxxxx".substring(11, 22)
  );
});
it("line: 1271 - matches (\\.\\d\\d[1-9]?)\\d+ against '1.230003938'", () => {
  const match = exec("(\\.\\d\\d[1-9]?)\\d+", "1.230003938", "ms");
  expect(match.matches[0]).toBe("1.230003938".substring(1, 11));
  expect(match.matches[1]).toBe("1.230003938".substring(1, 4));
});
it("line: 1272 - matches (\\.\\d\\d[1-9]?)\\d+ against '1.875000282   '", () => {
  const match = exec("(\\.\\d\\d[1-9]?)\\d+", "1.875000282   ", "ms");
  expect(match.matches[0]).toBe("1.875000282   ".substring(1, 11));
  expect(match.matches[1]).toBe("1.875000282   ".substring(1, 5));
});
it("line: 1273 - matches (\\.\\d\\d[1-9]?)\\d+ against '1.235  '", () => {
  const match = exec("(\\.\\d\\d[1-9]?)\\d+", "1.235  ", "ms");
  expect(match.matches[0]).toBe("1.235  ".substring(1, 5));
  expect(match.matches[1]).toBe("1.235  ".substring(1, 4));
});
xit("line: 1274 - lookaheads not supported", () => {});
xit("line: 1275 - lookaheads not supported", () => {});
xit("line: 1276 - lookaheads not supported", () => {});
xit("line: 1277 - lookaheads not supported", () => {});
xit("line: 1278 - the test behaviour differs between PCRE and JS", () => {});
xit("line: 1279 - JS regex does not support comments", () => {});
xit("line: 1280 - word boundary class not supported yet!", () => {});
it("line: 1281 - matches foo(.*)bar against 'The food is under the bar in the barn.'", () => {
  const match = exec(
    "foo(.*)bar",
    "The food is under the bar in the barn.",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "The food is under the bar in the barn.".substring(4, 36)
  );
  expect(match.matches[1]).toBe(
    "The food is under the bar in the barn.".substring(7, 33)
  );
});
it("line: 1282 - matches foo(.*?)bar against 'The food is under the bar in the barn.'", () => {
  const match = exec(
    "foo(.*?)bar",
    "The food is under the bar in the barn.",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "The food is under the bar in the barn.".substring(4, 25)
  );
  expect(match.matches[1]).toBe(
    "The food is under the bar in the barn.".substring(7, 22)
  );
});
it("line: 1283 - matches (.*)(\\d*) against 'I have 2 numbers: 53147'", () => {
  const match = exec("(.*)(\\d*)", "I have 2 numbers: 53147", "ms");
  expect(match.matches[0]).toBe("I have 2 numbers: 53147".substring(0, 23));
  expect(match.matches[1]).toBe("I have 2 numbers: 53147".substring(0, 23));
  expect(match.matches[2]).toBe("I have 2 numbers: 53147".substring(23, 23));
});
it("line: 1284 - matches (.*)(\\d+) against 'I have 2 numbers: 53147'", () => {
  const match = exec("(.*)(\\d+)", "I have 2 numbers: 53147", "ms");
  expect(match.matches[0]).toBe("I have 2 numbers: 53147".substring(0, 23));
  expect(match.matches[1]).toBe("I have 2 numbers: 53147".substring(0, 22));
  expect(match.matches[2]).toBe("I have 2 numbers: 53147".substring(22, 23));
});
it("line: 1285 - matches (.*?)(\\d*) against 'I have 2 numbers: 53147'", () => {
  const match = exec("(.*?)(\\d*)", "I have 2 numbers: 53147", "ms");
  expect(match.matches[0]).toBe("I have 2 numbers: 53147".substring(0, 0));
  expect(match.matches[1]).toBe("I have 2 numbers: 53147".substring(0, 0));
  expect(match.matches[2]).toBe("I have 2 numbers: 53147".substring(0, 0));
});
it("line: 1286 - matches (.*?)(\\d+) against 'I have 2 numbers: 53147'", () => {
  const match = exec("(.*?)(\\d+)", "I have 2 numbers: 53147", "ms");
  expect(match.matches[0]).toBe("I have 2 numbers: 53147".substring(0, 8));
  expect(match.matches[1]).toBe("I have 2 numbers: 53147".substring(0, 7));
  expect(match.matches[2]).toBe("I have 2 numbers: 53147".substring(7, 8));
});
it("line: 1287 - matches (.*)(\\d+)$ against 'I have 2 numbers: 53147'", () => {
  const match = exec("(.*)(\\d+)$", "I have 2 numbers: 53147", "ms");
  expect(match.matches[0]).toBe("I have 2 numbers: 53147".substring(0, 23));
  expect(match.matches[1]).toBe("I have 2 numbers: 53147".substring(0, 22));
  expect(match.matches[2]).toBe("I have 2 numbers: 53147".substring(22, 23));
});
xit("line: 1288 - lazy quantifiers should still yield the longest overall regex match", () => {});
xit("line: 1289 - word boundary class not supported yet!", () => {});
it("line: 1290 - matches (.*\\D)(\\d+)$ against 'I have 2 numbers: 53147'", () => {
  const match = exec("(.*\\D)(\\d+)$", "I have 2 numbers: 53147", "ms");
  expect(match.matches[0]).toBe("I have 2 numbers: 53147".substring(0, 23));
  expect(match.matches[1]).toBe("I have 2 numbers: 53147".substring(0, 18));
  expect(match.matches[2]).toBe("I have 2 numbers: 53147".substring(18, 23));
});
xit("line: 1291 - lookaheads not supported", () => {});
xit("line: 1292 - lookaheads not supported", () => {});
xit("line: 1293 - lookaheads not supported", () => {});
it("line: 1294 - matches ^[W-]46] against 'W46]789 '", () => {
  const match = exec("^[W-]46]", "W46]789 ", "ms");
  expect(match.matches[0]).toBe("W46]789 ".substring(0, 4));
});
it("line: 1295 - matches ^[W-]46] against '-46]789'", () => {
  const match = exec("^[W-]46]", "-46]789", "ms");
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
xit("line: 1301 - does nto support escaped characters in character ranges", () => {});
xit("line: 1302 - does nto support escaped characters in character ranges", () => {});
xit("line: 1303 - does nto support escaped characters in character ranges", () => {});
xit("line: 1304 - does nto support escaped characters in character ranges", () => {});
xit("line: 1305 - does nto support escaped characters in character ranges", () => {});
xit("line: 1306 - does nto support escaped characters in character ranges", () => {});
xit("line: 1307 - does nto support escaped characters in character ranges", () => {});
xit("line: 1308 - does nto support escaped characters in character ranges", () => {});
it("line: 1309 - matches ^[W-\\]46] against '-46]789'", () => {
  expectNotMatch("^[W-\\]46]", ["-46]789"]);
});
it("line: 1310 - matches ^[W-\\]46] against 'well'", () => {
  expectNotMatch("^[W-\\]46]", ["well"]);
});
it("line: 1311 - matches \\d\\d\\/\\d\\d\\/\\d\\d\\d\\d against '01/01/2000'", () => {
  const match = exec("\\d\\d\\/\\d\\d\\/\\d\\d\\d\\d", "01/01/2000", "ms");
  expect(match.matches[0]).toBe("01/01/2000".substring(0, 10));
});
it("line: 1312 - matches word (?:[a-zA-Z0-9]+ ){0,10}otherword against 'word cat dog elephant mussel cow horse canary baboon snake shark otherword'", () => {
  const match = exec(
    "word (?:[a-zA-Z0-9]+ ){0,10}otherword",
    "word cat dog elephant mussel cow horse canary baboon snake shark otherword",
    "ms"
  );
  expect(match.matches[0]).toBe(
    "word cat dog elephant mussel cow horse canary baboon snake shark otherword".substring(
      0,
      74
    )
  );
});
xit("line: 1313 - peformance issue", () => {});
xit("line: 1314 - peformance issue", () => {});
it("line: 1315 - matches ^(a){0,0} against 'bcd'", () => {
  const match = exec("^(a){0,0}", "bcd", "ms");
  expect(match.matches[0]).toBe("bcd".substring(0, 0));
});
it("line: 1316 - matches ^(a){0,0} against 'abc'", () => {
  const match = exec("^(a){0,0}", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 0));
});
it("line: 1317 - matches ^(a){0,0} against 'aab     '", () => {
  const match = exec("^(a){0,0}", "aab     ", "ms");
  expect(match.matches[0]).toBe("aab     ".substring(0, 0));
});
it("line: 1318 - matches ^(a){0,1} against 'bcd'", () => {
  const match = exec("^(a){0,1}", "bcd", "ms");
  expect(match.matches[0]).toBe("bcd".substring(0, 0));
});
it("line: 1319 - matches ^(a){0,1} against 'abc'", () => {
  const match = exec("^(a){0,1}", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1320 - matches ^(a){0,1} against 'aab  '", () => {
  const match = exec("^(a){0,1}", "aab  ", "ms");
  expect(match.matches[0]).toBe("aab  ".substring(0, 1));
  expect(match.matches[1]).toBe("aab  ".substring(0, 1));
});
it("line: 1321 - matches ^(a){0,2} against 'bcd'", () => {
  const match = exec("^(a){0,2}", "bcd", "ms");
  expect(match.matches[0]).toBe("bcd".substring(0, 0));
});
it("line: 1322 - matches ^(a){0,2} against 'abc'", () => {
  const match = exec("^(a){0,2}", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1323 - matches ^(a){0,2} against 'aab  '", () => {
  const match = exec("^(a){0,2}", "aab  ", "ms");
  expect(match.matches[0]).toBe("aab  ".substring(0, 2));
  expect(match.matches[1]).toBe("aab  ".substring(1, 2));
});
it("line: 1324 - matches ^(a){0,3} against 'bcd'", () => {
  const match = exec("^(a){0,3}", "bcd", "ms");
  expect(match.matches[0]).toBe("bcd".substring(0, 0));
});
it("line: 1325 - matches ^(a){0,3} against 'abc'", () => {
  const match = exec("^(a){0,3}", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1326 - matches ^(a){0,3} against 'aab'", () => {
  const match = exec("^(a){0,3}", "aab", "ms");
  expect(match.matches[0]).toBe("aab".substring(0, 2));
  expect(match.matches[1]).toBe("aab".substring(1, 2));
});
it("line: 1327 - matches ^(a){0,3} against 'aaa   '", () => {
  const match = exec("^(a){0,3}", "aaa   ", "ms");
  expect(match.matches[0]).toBe("aaa   ".substring(0, 3));
  expect(match.matches[1]).toBe("aaa   ".substring(2, 3));
});
it("line: 1328 - matches ^(a){0,} against 'bcd'", () => {
  const match = exec("^(a){0,}", "bcd", "ms");
  expect(match.matches[0]).toBe("bcd".substring(0, 0));
});
it("line: 1329 - matches ^(a){0,} against 'abc'", () => {
  const match = exec("^(a){0,}", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1330 - matches ^(a){0,} against 'aab'", () => {
  const match = exec("^(a){0,}", "aab", "ms");
  expect(match.matches[0]).toBe("aab".substring(0, 2));
  expect(match.matches[1]).toBe("aab".substring(1, 2));
});
it("line: 1331 - matches ^(a){0,} against 'aaa'", () => {
  const match = exec("^(a){0,}", "aaa", "ms");
  expect(match.matches[0]).toBe("aaa".substring(0, 3));
  expect(match.matches[1]).toBe("aaa".substring(2, 3));
});
it("line: 1332 - matches ^(a){0,} against 'aaaaaaaa    '", () => {
  const match = exec("^(a){0,}", "aaaaaaaa    ", "ms");
  expect(match.matches[0]).toBe("aaaaaaaa    ".substring(0, 8));
  expect(match.matches[1]).toBe("aaaaaaaa    ".substring(7, 8));
});
it("line: 1333 - matches ^(a){1,1} against 'bcd'", () => {
  expectNotMatch("^(a){1,1}", ["bcd"]);
});
it("line: 1334 - matches ^(a){1,1} against 'abc'", () => {
  const match = exec("^(a){1,1}", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1335 - matches ^(a){1,1} against 'aab  '", () => {
  const match = exec("^(a){1,1}", "aab  ", "ms");
  expect(match.matches[0]).toBe("aab  ".substring(0, 1));
  expect(match.matches[1]).toBe("aab  ".substring(0, 1));
});
it("line: 1336 - matches ^(a){1,2} against 'bcd'", () => {
  expectNotMatch("^(a){1,2}", ["bcd"]);
});
it("line: 1337 - matches ^(a){1,2} against 'abc'", () => {
  const match = exec("^(a){1,2}", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1338 - matches ^(a){1,2} against 'aab  '", () => {
  const match = exec("^(a){1,2}", "aab  ", "ms");
  expect(match.matches[0]).toBe("aab  ".substring(0, 2));
  expect(match.matches[1]).toBe("aab  ".substring(1, 2));
});
it("line: 1339 - matches ^(a){1,3} against 'bcd'", () => {
  expectNotMatch("^(a){1,3}", ["bcd"]);
});
it("line: 1340 - matches ^(a){1,3} against 'abc'", () => {
  const match = exec("^(a){1,3}", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1341 - matches ^(a){1,3} against 'aab'", () => {
  const match = exec("^(a){1,3}", "aab", "ms");
  expect(match.matches[0]).toBe("aab".substring(0, 2));
  expect(match.matches[1]).toBe("aab".substring(1, 2));
});
it("line: 1342 - matches ^(a){1,3} against 'aaa   '", () => {
  const match = exec("^(a){1,3}", "aaa   ", "ms");
  expect(match.matches[0]).toBe("aaa   ".substring(0, 3));
  expect(match.matches[1]).toBe("aaa   ".substring(2, 3));
});
it("line: 1343 - matches ^(a){1,} against 'bcd'", () => {
  expectNotMatch("^(a){1,}", ["bcd"]);
});
it("line: 1344 - matches ^(a){1,} against 'abc'", () => {
  const match = exec("^(a){1,}", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 1));
  expect(match.matches[1]).toBe("abc".substring(0, 1));
});
it("line: 1345 - matches ^(a){1,} against 'aab'", () => {
  const match = exec("^(a){1,}", "aab", "ms");
  expect(match.matches[0]).toBe("aab".substring(0, 2));
  expect(match.matches[1]).toBe("aab".substring(1, 2));
});
it("line: 1346 - matches ^(a){1,} against 'aaa'", () => {
  const match = exec("^(a){1,}", "aaa", "ms");
  expect(match.matches[0]).toBe("aaa".substring(0, 3));
  expect(match.matches[1]).toBe("aaa".substring(2, 3));
});
it("line: 1347 - matches ^(a){1,} against 'aaaaaaaa    '", () => {
  const match = exec("^(a){1,}", "aaaaaaaa    ", "ms");
  expect(match.matches[0]).toBe("aaaaaaaa    ".substring(0, 8));
  expect(match.matches[1]).toBe("aaaaaaaa    ".substring(7, 8));
});
it("line: 1348 - matches .{0,}\\.gif against 'borfle\nbib.gif\nno'", () => {
  const match = exec(".{0,}\\.gif", "borfle\nbib.gif\nno", "ms");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 14));
});
it("line: 1349 - matches .*\\.gif against 'borfle\nbib.gif\nno'", () => {
  const match = exec(".*\\.gif", "borfle\nbib.gif\nno", "ms");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 14));
});
it("line: 1350 - matches .*\\.gif against 'borfle\nbib.gif\nno'", () => {
  const match = exec(".*\\.gif", "borfle\nbib.gif\nno", "m");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(7, 14));
});
it("line: 1351 - matches .*\\.gif against 'borfle\nbib.gif\nno'", () => {
  const match = exec(".*\\.gif", "borfle\nbib.gif\nno", "ms");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 14));
});
it("line: 1352 - matches .*\\.gif against 'borfle\nbib.gif\nno'", () => {
  const match = exec(".*\\.gif", "borfle\nbib.gif\nno", "ms");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 14));
});
it("line: 1353 - matches .*$ against 'borfle\nbib.gif\nno'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno", "ms");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 17));
});
it("line: 1354 - matches .*$ against 'borfle\nbib.gif\nno'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno", "m");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 6));
});
it("line: 1355 - matches .*$ against 'borfle\nbib.gif\nno'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno", "ms");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 17));
});
it("line: 1356 - matches .*$ against 'borfle\nbib.gif\nno'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno", "ms");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno".substring(0, 17));
});
it("line: 1357 - matches .*$ against 'borfle\nbib.gif\nno\n'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno\n", "ms");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno\n".substring(0, 18));
});
it("line: 1358 - matches .*$ against 'borfle\nbib.gif\nno\n'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno\n", "m");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno\n".substring(0, 6));
});
it("line: 1359 - matches .*$ against 'borfle\nbib.gif\nno\n'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno\n", "ms");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno\n".substring(0, 18));
});
it("line: 1360 - matches .*$ against 'borfle\nbib.gif\nno\n'", () => {
  const match = exec(".*$", "borfle\nbib.gif\nno\n", "ms");
  expect(match.matches[0]).toBe("borfle\nbib.gif\nno\n".substring(0, 18));
});
it("line: 1361 - matches (.*X|^B) against 'abcde\n1234Xyz'", () => {
  const match = exec("(.*X|^B)", "abcde\n1234Xyz", "ms");
  expect(match.matches[0]).toBe("abcde\n1234Xyz".substring(0, 11));
  expect(match.matches[1]).toBe("abcde\n1234Xyz".substring(0, 11));
});
it("line: 1362 - matches (.*X|^B) against 'BarFoo '", () => {
  const match = exec("(.*X|^B)", "BarFoo ", "ms");
  expect(match.matches[0]).toBe("BarFoo ".substring(0, 1));
  expect(match.matches[1]).toBe("BarFoo ".substring(0, 1));
});
xit("line: 1363 - does not support start of string quantified within an alternation", () => {});
it("line: 1364 - matches (.*X|^B) against 'abcde\n1234Xyz'", () => {
  const match = exec("(.*X|^B)", "abcde\n1234Xyz", "m");
  expect(match.matches[0]).toBe("abcde\n1234Xyz".substring(6, 11));
  expect(match.matches[1]).toBe("abcde\n1234Xyz".substring(6, 11));
});
it("line: 1365 - matches (.*X|^B) against 'BarFoo '", () => {
  const match = exec("(.*X|^B)", "BarFoo ", "m");
  expect(match.matches[0]).toBe("BarFoo ".substring(0, 1));
  expect(match.matches[1]).toBe("BarFoo ".substring(0, 1));
});
it("line: 1366 - matches (.*X|^B) against 'abcde\nBar  '", () => {
  const match = exec("(.*X|^B)", "abcde\nBar  ", "m");
  expect(match.matches[0]).toBe("abcde\nBar  ".substring(6, 7));
  expect(match.matches[1]).toBe("abcde\nBar  ".substring(6, 7));
});
it("line: 1367 - matches (.*X|^B) against 'abcde\n1234Xyz'", () => {
  const match = exec("(.*X|^B)", "abcde\n1234Xyz", "ms");
  expect(match.matches[0]).toBe("abcde\n1234Xyz".substring(0, 11));
  expect(match.matches[1]).toBe("abcde\n1234Xyz".substring(0, 11));
});
it("line: 1368 - matches (.*X|^B) against 'BarFoo '", () => {
  const match = exec("(.*X|^B)", "BarFoo ", "ms");
  expect(match.matches[0]).toBe("BarFoo ".substring(0, 1));
  expect(match.matches[1]).toBe("BarFoo ".substring(0, 1));
});
xit("line: 1369 - does not support start of string quantified within an alternation", () => {});
it("line: 1370 - matches (.*X|^B) against 'abcde\n1234Xyz'", () => {
  const match = exec("(.*X|^B)", "abcde\n1234Xyz", "ms");
  expect(match.matches[0]).toBe("abcde\n1234Xyz".substring(0, 11));
  expect(match.matches[1]).toBe("abcde\n1234Xyz".substring(0, 11));
});
it("line: 1371 - matches (.*X|^B) against 'BarFoo '", () => {
  const match = exec("(.*X|^B)", "BarFoo ", "ms");
  expect(match.matches[0]).toBe("BarFoo ".substring(0, 1));
  expect(match.matches[1]).toBe("BarFoo ".substring(0, 1));
});
it("line: 1372 - matches (.*X|^B) against 'abcde\nBar  '", () => {
  const match = exec("(.*X|^B)", "abcde\nBar  ", "ms");
  expect(match.matches[0]).toBe("abcde\nBar  ".substring(6, 7));
  expect(match.matches[1]).toBe("abcde\nBar  ".substring(6, 7));
});
xit("line: 1373 - JS regex does not support mode modifiers", () => {});
xit("line: 1374 - JS regex does not support mode modifiers", () => {});
xit("line: 1375 - JS regex does not support mode modifiers", () => {});
xit("line: 1376 - JS regex does not support mode modifiers", () => {});
xit("line: 1377 - JS regex does not support mode modifiers", () => {});
xit("line: 1378 - JS regex does not support mode modifiers", () => {});
it("line: 1379 - matches ^.*B against 'abc\nB'", () => {
  const match = exec("^.*B", "abc\nB", "ms");
  expect(match.matches[0]).toBe("abc\nB".substring(0, 5));
});
it("line: 1380 - matches ^.*B against 'abc\nB'", () => {
  const match = exec("^.*B", "abc\nB", "m");
  expect(match.matches[0]).toBe("abc\nB".substring(4, 5));
});
xit("line: 1381 - JS regex does not support mode modifiers", () => {});
xit("line: 1382 - JS regex does not support mode modifiers", () => {});
xit("line: 1383 - JS regex does not support mode modifiers", () => {});
xit("line: 1384 - JS regex does not support mode modifiers", () => {});
xit("line: 1385 - JS regex does not support mode modifiers", () => {});
xit("line: 1386 - JS regex does not support mode modifiers", () => {});
it("line: 1387 - matches ^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9] against '123456654321'", () => {
  const match = exec(
    "^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]",
    "123456654321",
    "ms"
  );
  expect(match.matches[0]).toBe("123456654321".substring(0, 12));
});
it("line: 1388 - matches ^\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d against '123456654321 '", () => {
  const match = exec(
    "^\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d",
    "123456654321 ",
    "ms"
  );
  expect(match.matches[0]).toBe("123456654321 ".substring(0, 12));
});
it("line: 1389 - matches ^[\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d] against '123456654321'", () => {
  const match = exec(
    "^[\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d][\\d]",
    "123456654321",
    "ms"
  );
  expect(match.matches[0]).toBe("123456654321".substring(0, 12));
});
it("line: 1390 - matches ^[abc]{12} against 'abcabcabcabc'", () => {
  const match = exec("^[abc]{12}", "abcabcabcabc", "ms");
  expect(match.matches[0]).toBe("abcabcabcabc".substring(0, 12));
});
it("line: 1391 - matches ^[a-c]{12} against 'abcabcabcabc'", () => {
  const match = exec("^[a-c]{12}", "abcabcabcabc", "ms");
  expect(match.matches[0]).toBe("abcabcabcabc".substring(0, 12));
});
it("line: 1392 - matches ^(a|b|c){12} against 'abcabcabcabc '", () => {
  const match = exec("^(a|b|c){12}", "abcabcabcabc ", "ms");
  expect(match.matches[0]).toBe("abcabcabcabc ".substring(0, 12));
  expect(match.matches[1]).toBe("abcabcabcabc ".substring(11, 12));
});
it("line: 1393 - matches ^[abcdefghijklmnopqrstuvwxy0123456789] against 'n'", () => {
  const match = exec("^[abcdefghijklmnopqrstuvwxy0123456789]", "n", "ms");
  expect(match.matches[0]).toBe("n".substring(0, 1));
});
it("line: 1394 - matches ^[abcdefghijklmnopqrstuvwxy0123456789] against 'z '", () => {
  expectNotMatch("^[abcdefghijklmnopqrstuvwxy0123456789]", ["z "]);
});
it("line: 1395 - matches abcde{0,0} against 'abcd'", () => {
  const match = exec("abcde{0,0}", "abcd", "ms");
  expect(match.matches[0]).toBe("abcd".substring(0, 4));
});
it("line: 1396 - matches abcde{0,0} against 'abce  '", () => {
  expectNotMatch("abcde{0,0}", ["abce  "]);
});
it("line: 1397 - matches ab[cd]{0,0}e against 'abe'", () => {
  const match = exec("ab[cd]{0,0}e", "abe", "ms");
  expect(match.matches[0]).toBe("abe".substring(0, 3));
});
it("line: 1398 - matches ab[cd]{0,0}e against 'abcde '", () => {
  expectNotMatch("ab[cd]{0,0}e", ["abcde "]);
});
it("line: 1399 - matches ab(c){0,0}d against 'abd'", () => {
  const match = exec("ab(c){0,0}d", "abd", "ms");
  expect(match.matches[0]).toBe("abd".substring(0, 3));
});
it("line: 1400 - matches ab(c){0,0}d against 'abcd   '", () => {
  expectNotMatch("ab(c){0,0}d", ["abcd   "]);
});
it("line: 1401 - matches a(b*) against 'a'", () => {
  const match = exec("a(b*)", "a", "ms");
  expect(match.matches[0]).toBe("a".substring(0, 1));
  expect(match.matches[1]).toBe("a".substring(1, 1));
});
it("line: 1402 - matches a(b*) against 'ab'", () => {
  const match = exec("a(b*)", "ab", "ms");
  expect(match.matches[0]).toBe("ab".substring(0, 2));
  expect(match.matches[1]).toBe("ab".substring(1, 2));
});
it("line: 1403 - matches a(b*) against 'abbbb'", () => {
  const match = exec("a(b*)", "abbbb", "ms");
  expect(match.matches[0]).toBe("abbbb".substring(0, 5));
  expect(match.matches[1]).toBe("abbbb".substring(1, 5));
});
it("line: 1404 - matches a(b*) against 'bbbbb    '", () => {
  expectNotMatch("a(b*)", ["bbbbb    "]);
});
it("line: 1405 - matches ab\\d{0}e against 'abe'", () => {
  const match = exec("ab\\d{0}e", "abe", "ms");
  expect(match.matches[0]).toBe("abe".substring(0, 3));
});
it("line: 1406 - matches ab\\d{0}e against 'ab1e   '", () => {
  expectNotMatch("ab\\d{0}e", ["ab1e   "]);
});
it('line: 1407 - matches "([^\\\\"]+|\\\\.)*" against \'the "quick" brown fox\'', () => {
  const match = exec('"([^\\\\"]+|\\\\.)*"', 'the "quick" brown fox', "ms");
  expect(match.matches[0]).toBe('the "quick" brown fox'.substring(4, 11));
  expect(match.matches[1]).toBe('the "quick" brown fox'.substring(5, 10));
});
it('line: 1408 - matches "([^\\\\"]+|\\\\.)*" against \'"the \\"quick\\" brown fox" \'', () => {
  const match = exec(
    '"([^\\\\"]+|\\\\.)*"',
    '"the \\"quick\\" brown fox" ',
    "ms"
  );
  expect(match.matches[0]).toBe(
    '"the \\"quick\\" brown fox" '.substring(0, 25)
  );
  expect(match.matches[1]).toBe(
    '"the \\"quick\\" brown fox" '.substring(14, 24)
  );
});
it("line: 1409 - matches .*? against 'abc'", () => {
  const match = exec(".*?", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 0));
});
xit("line: 1410 - word boundary class not supported yet!", () => {});
xit("line: 1411 - word boundary class not supported yet!", () => {});
it("line: 1412 - matches  against 'abc'", () => {
  const match = exec("", "abc", "ms");
  expect(match.matches[0]).toBe("abc".substring(0, 0));
});
it("line: 1413 - matches <tr([\\w\\W\\s\\d][^<>]{0,})><TD([\\w\\W\\s\\d][^<>]{0,})>([\\d]{0,}\\.)(.*)((<BR>([\\w\\W\\s\\d][^<>]{0,})|[\\s]{0,}))<\\/a><\\/TD><TD([\\w\\W\\s\\d][^<>]{0,})>([\\w\\W\\s\\d][^<>]{0,})<\\/TD><TD([\\w\\W\\s\\d][^<>]{0,})>([\\w\\W\\s\\d][^<>]{0,})<\\/TD><\\/TR> against '<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>'", () => {
  const match = exec(
    "<tr([\\w\\W\\s\\d][^<>]{0,})><TD([\\w\\W\\s\\d][^<>]{0,})>([\\d]{0,}\\.)(.*)((<BR>([\\w\\W\\s\\d][^<>]{0,})|[\\s]{0,}))<\\/a><\\/TD><TD([\\w\\W\\s\\d][^<>]{0,})>([\\w\\W\\s\\d][^<>]{0,})<\\/TD><TD([\\w\\W\\s\\d][^<>]{0,})>([\\w\\W\\s\\d][^<>]{0,})<\\/TD><\\/TR>",
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>",
    "mis"
  );
  expect(match.matches[0]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      0,
      227
    )
  );
  expect(match.matches[1]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      3,
      21
    )
  );
  expect(match.matches[2]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      25,
      47
    )
  );
  expect(match.matches[3]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      48,
      51
    )
  );
  expect(match.matches[4]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      51,
      122
    )
  );
  expect(match.matches[5]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      122,
      122
    )
  );
  expect(match.matches[6]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      122,
      122
    )
  );
  expect(match.matches[8]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      134,
      156
    )
  );
  expect(match.matches[9]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      157,
      172
    )
  );
  expect(match.matches[10]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      180,
      202
    )
  );
  expect(match.matches[11]).toBe(
    "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>".substring(
      203,
      217
    )
  );
});
it("line: 1414 - matches a[^a]b against 'acb'", () => {
  const match = exec("a[^a]b", "acb", "ms");
  expect(match.matches[0]).toBe("acb".substring(0, 3));
});
it("line: 1415 - matches a[^a]b against 'a\nb'", () => {
  const match = exec("a[^a]b", "a\nb", "ms");
  expect(match.matches[0]).toBe("a\nb".substring(0, 3));
});
it("line: 1416 - matches a.b against 'acb'", () => {
  const match = exec("a.b", "acb", "ms");
  expect(match.matches[0]).toBe("acb".substring(0, 3));
});
it("line: 1417 - matches a.b against 'a\nb   '", () => {
  const match = exec("a.b", "a\nb   ", "ms");
  expect(match.matches[0]).toBe("a\nb   ".substring(0, 3));
});
it("line: 1418 - matches a[^a]b against 'acb'", () => {
  const match = exec("a[^a]b", "acb", "ms");
  expect(match.matches[0]).toBe("acb".substring(0, 3));
});
it("line: 1419 - matches a[^a]b against 'a\nb  '", () => {
  const match = exec("a[^a]b", "a\nb  ", "ms");
  expect(match.matches[0]).toBe("a\nb  ".substring(0, 3));
});
it("line: 1420 - matches a.b against 'acb'", () => {
  const match = exec("a.b", "acb", "ms");
  expect(match.matches[0]).toBe("acb".substring(0, 3));
});
it("line: 1421 - matches a.b against 'a\nb  '", () => {
  const match = exec("a.b", "a\nb  ", "ms");
  expect(match.matches[0]).toBe("a\nb  ".substring(0, 3));
});
