const fs = require("fs");
const data = fs.readFileSync("./spec/pcre-1.dat", "utf8");
const lines = data.split("\n");
const prettier = require("prettier");

const escapeQuote = (str) => str.replaceAll('"', '\\"');

const range = (from, to) =>
  Array.from({ length: to - from + 1 }, (_, i) => i + from);

const knownIssues = {
  "issue with parsing the test itself": [
    1103,
    ...range(1185, 1188),
    ...range(1095, 1098),
    ...range(487, 494),
    ...range(1077, 1082),
  ],
  "lazy quantifiers should still yield the longest overall regex match": [
    ...range(141, 143),
    1288,
  ],
  "test contains an octal escape sequence": [1102],
  "requires triage": [
    1087,
    1363,
    1369,
    1163,
    1088,
    1239,
    ...range(1147, 1149),
    1413,
    ...range(1301, 1308),
  ],
  "as-pect test issue": [1145, 1146],
  "test indicates a malformed regex, whereas it appears OK in JS": [1189],
  "test regex contains syntax not supported in JS": [82, 1158, 281],
  "the test behaviour differs between PCRE and JS": [290],
  "aspect [Actual]: <Match>null vs [Expected]: Not <Match>null issue": [
    153,
    203,
    204,
  ],
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
        : escapeQuote(parts[1] == "NULL" ? "" : parts[1]);
    let str = parts[2] !== "NULL" ? escapeQuote(parts[2]) : "";
    let flags = parts[0].includes("i") ? "is" : "s";

    if (parts[0].includes("n")) {
      testCase += `xit("line: ${index} - multi line regex not supported yet!", () => { });`;
      return;
    }

    if (regex.includes("\\b")) {
      testCase += `xit("line: ${index} - word boundary class not supported yet!", () => { });`;
      return;
    }

    if (str.includes("\\x{")) {
      testCase += `xit("line: ${index} - test encoding issue", () => { });`;
      return;
    }

    // if (["}?"].some((f) => regex.includes(f))) {
    //   testCase += `xit("line: ${index} - lazy range repitition quantifiers are not supported", () => { });`;
    //   return;
    // }

    if (["(?"].some((f) => regex.includes(f))) {
      testCase += `xit("line: ${index} - non capturing groups not supported", () => {});`;
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
      const captures = parts[3].match(/\((\d{1,2}|\?),(\d{1,2}|\?)\)+/g);
      captures.forEach((capture, index) => {
        const digits = capture.match(/\((\d{1,2}|\?),(\d{1,2}|\?)\)/);
        nextCase += `expect(match.matches[${index}]).toBe("${str}".substring(${digits[1]}, ${digits[2]}));`;
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
