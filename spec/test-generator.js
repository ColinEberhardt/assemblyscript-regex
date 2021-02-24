const fs = require("fs");
const data = fs.readFileSync("./spec/pcre-1.dat", "utf8");
const lines = data.split("\n");
const prettier = require("prettier");

const escapeQuote = (str) => str.replaceAll('"', '\\"');

const range = (from, to) =>
  Array.from({ length: to - from + 1 }, (_, i) => i + from);

const knownIssues = {
  /* ------- features  not yet implemented ------- */
  "does not support start of string quantified within an alternation": [
    1363,
    1369,
  ],
  "does not support hex notification in character sets": [...range(1147, 1149)],
  "does nto support escaped characters in character ranges": [
    ...range(1301, 1308),
  ],
  "lazy quantifiers should still yield the longest overall regex match": [
    ...range(141, 143),
    1288,
  ],
  "peformance issue": [1313, 1314],

  /* -------- issues with the tests ------------  */
  "test appears to be incorrect?": [203, 204],
  "issue with parsing the test itself": [
    1103,
    ...range(1095, 1098),
    ...range(487, 494),
    ...range(1077, 1082),
  ],
  "test contains an octal escape sequence": [1102],
  // the test results measure captured groups using character length / locations
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
  // this is tricky to reproduce
  "test requires a substring function": [1087, 1088],

  /* -------- differences between PCRE and JS regex ------------  */
  "test indicates a malformed regex, whereas it appears OK in JS": [
    1189,
    ...range(1186, 1188),
  ],
  "JS does not support the \\A \\Z syntax for start and end of string": [
    1163,
    1164,
  ],
  "test regex contains syntax not supported in JS": [82, 1158, 281],
  "the test behaviour differs between PCRE and JS": [290, 1278],
};

const hasKnownIssue = (index) => {
  for (const issue in knownIssues) {
    if (knownIssues[issue].includes(index)) {
      return issue;
    }
  }
  return null;
};

let testCase = `
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegExp, Match } from "..";
import { expectMatch, expectNotMatch, exec} from "../__tests__/utils";

`;

let regex = "";
lines.forEach((line, index) => {
  index += 1;

  let nextCase = "";

  const knownIssue = hasKnownIssue(index);
  if (knownIssue == "issue with parsing the test itself") {
    testCase += `xit("line ${index} - issue with parsing the test itself", () => {});`;
    return;
  }

  try {
    const parts = line.split("\t").filter((f) => f !== "");
    if (parts.length < 4) {
      // TODO - these should probably be listed as known issues
      return;
    }

    regex =
      parts[1] == "SAME"
        ? regex
        : escapeQuote(parts[1] == "NULL" ? "" : parts[1]).replaceAll(
            "/",
            "\\\\/"
          );
    let str = parts[2] !== "NULL" ? escapeQuote(parts[2]) : "";
    let flags = "m" + (parts[0].includes("i") ? "i" : "");
    flags += parts[0] !== "En$" && parts[0] !== "E$n" ? "s" : "";

    if (regex.includes("\\b")) {
      testCase += `xit("line: ${index} - word boundary class not supported yet!", () => { });`;
      return;
    }

    if (str.includes("\\x{")) {
      testCase += `xit("line: ${index} - test encoding issue", () => { });`;
      return;
    }

    if (["(?!", "(?="].some((f) => regex.includes(f))) {
      testCase += `xit("line: ${index} - lookaheads not supported", () => {});`;
      return;
    }

    if (["(?m", "(?s", "(?ms"].some((f) => regex.includes(f))) {
      testCase += `xit("line: ${index} - JS regex does not support mode modifiers", () => {});`;
      return;
    }

    if (["(?#"].some((f) => regex.includes(f))) {
      testCase += `xit("line: ${index} - JS regex does not support comments", () => {});`;
      return;
    }

    if (regex.match(/\\\\\d{1}/)) {
      testCase += `xit("line: ${index} - back references are not supported", () => {});`;
      return;
    }

    if (knownIssue) {
      testCase += `xit("line: ${index} - ${knownIssue}", () => {});`;
      return;
    }

    nextCase += `it("line: ${index} - matches ${regex} against '${str}'", () => {
      `;
    if (parts[3] == "BADBR") {
      nextCase += ` expect(() => { let foo = new RegExp("${regex}") }).toThrow();`;
    } else if (parts[3] == "NOMATCH") {
      nextCase += ` expectNotMatch("${regex}", ["${str}"]);`;
    } else {
      nextCase += ` const match = exec("${regex}", "${str}", "${flags}");`;

      // create an expect for each capture group
      const captures = parts[3].match(/\((\d{1,3}|\?),(\d{1,3}|\?)\)+/g);
      captures.forEach((capture, index) => {
        const digits = capture.match(/\((\d{1,3}|\?),(\d{1,3}|\?)\)/);
        if (digits[1] !== "?") {
          nextCase += `expect(match.matches[${index}]).toBe("${str}".substring(${digits[1]}, ${digits[2]}));`;
        }
      });
    }

    nextCase += `});
    `;

    testCase += nextCase;
  } catch {
    console.error("could not parse test case", index);
  }
});

fs.writeFileSync(
  "./assembly/__spec_tests__/generated.spec.ts",
  // testCase
  prettier.format(testCase, { parser: "babel" })
);
