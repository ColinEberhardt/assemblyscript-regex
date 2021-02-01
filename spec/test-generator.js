const fs = require("fs");
const data = fs.readFileSync("./spec/test.dat", "utf8");
const lines = data.split("\n");
const prettier = require("prettier");

const escape = (str) => str.replace("\\", "\\\\");

const knownIssues = {
  "issue with parsing the test itself": [28, 58, 59, 78, 212, 213],
  "issue with generating the test": [61, 62, 64, 76, 209, 210],
  "unsupported POSIX regex syntax": [54, 55, 56],
  "issue that require triage": [199, 202, 204, 205, 206, 207],
  // I can't find a good reference that describes this behaviour!
  "BUG: doesn't support anchors within capture groups": [20],
  // https://github.com/ColinEberhardt/assemblyscript-regex/issues/2
  "BUG: Should not return captured values for non-matching alternations": [
    35,
    133,
    150,
    187,
    188,
    190,
    191,
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

lines.forEach((line, index) => {
  let nextCase = "";

  const knownIssue = hasKnownIssue(index);
  if (knownIssue == "issue with parsing the test itself") {
    testCase += `xit("line ${index} - issue with parsing the test itself", () => {});`;
    return;
  }
  const knownIssueCode = knownIssue ? "xit" : "it";

  try {
    const parts = line.split("\t").filter((f) => f !== "");
    if (parts.length < 4) {
      // TODO - these should probably be listed as known issues
      return;
    }

    const regex = escape(parts[1]);
    const str = parts[2] !== "NULL" ? parts[2] : "";
    const flags = parts[0] == "Ei" ? "i" : "";

    nextCase += `${knownIssueCode}("line: ${index} - matches ${regex} against '${escape(
      str
    )}'", () => {
      `;
    if (parts[3] == "BADBR") {
      nextCase += ` expect(() => new RegExp("${regex}")).toThrow();`;
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
  prettier.format(testCase, { parser: "babel" })
);
