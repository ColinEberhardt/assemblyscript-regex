const fs = require("fs");
const data = fs.readFileSync("./spec/pcre-1.dat", "utf8");
const lines = data.split("\n");
const prettier = require("prettier");

const escape = (str) => str.replace("\\", "\\\\");

const range = (from, to) =>
  Array.from({ length: to - from + 1 }, (_, i) => i + from);

const knownIssues = {
  "issue with parsing the test itself": range(1185, 1188),
  "issues with repeated capture groups": [...range(63, 68), 1391, 1392],
  "bug: \\g should not throw unsupported char class": [
    1223,
    1179,
    1180,
    1158,
    ...range(1232, 1235),
    1236,
    1238,
    ...range(1253, 1255),
    1280,
    1289,
  ],
  "requires triage": [
    1,
    113,
    141,
    153,
    155,
    255,
    256,
    261,
    262,
    281,
    264,
    263,
    ...range(289, 291),
    1224,
    1277,
    1278,
    1373,
    1376,
    1412,
    ...range(1147, 1149),
    ...range(1408, 1410),
    1413,
    ...range(1301, 1307),
  ],
  "as-pect test issue": [1145, 1146],
  "test indicates a malformed regex, whereas it appears OK in JS": [1189],
  "test doesn't support NULL": [1411],
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

    regex = parts[1] == "SAME" ? regex : escape(parts[1]);
    const str = parts[2] !== "NULL" ? parts[2] : "";
    const flags = parts[0].includes("i") ? "i" : "";

    if (str.includes("\\") || str.includes('"')) {
      testCase += `xit("line: ${index} - test cases with escape characters are not supported yet!", () => { });`;
      return;
    }

    if (["*?", "??", "+?", "}?"].some((f) => regex.includes(f))) {
      testCase += `xit("line: ${index} - lazy quantifiers are not supported", () => { });`;
      return;
    }

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

    nextCase += `it("line: ${index} - matches ${regex} against '${escape(
      str
    )}'", () => {
      `;
    if (parts[3] == "BADBR") {
      nextCase += ` expect(() => { let foo = new RegExp("${regex}") }).toThrow();`;
    } else if (parts[3] == "NOMATCH") {
      nextCase += ` expectNotMatch("${regex}", ["${escape(str)}"]);`;
    } else {
      nextCase += ` const match = exec("${regex}", "${escape(
        str
      )}", "${flags}");`;

      // create an expect for each capture group
      const captures = parts[3].match(/\((\d{1,2}|\?),(\d{1,2}|\?)\)+/g);
      captures.forEach((capture, index) => {
        const digits = capture.match(/\((\d{1,2}|\?),(\d{1,2}|\?)\)/);
        const expected =
          digits[0] == "?"
            ? ""
            : str.substring(Number(digits[1]), Number(digits[2]));
        nextCase += ` expect(match.matches[${index}]).toBe("${escape(
          expected
        )}");`;
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
