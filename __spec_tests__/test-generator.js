const fs = require("fs");
const prettier = require("prettier");
const data = fs.readFileSync("./__spec_tests__/test.dat", "utf8");
const lines = data.split("\n");

// const unescape = (str) => str.replace("\\n", "\n");
const escape = (str) => str.replace("\\", "\\\\");

const knownIssues = {
  "issue with parsing the test itself": [58, 59, 78, 212, 213],
  "issue with generating the test": [61, 62, 64],
  "issue that require triage": [
    20,
    35,
    48,
    72,
    76,
    133,
    150,
    187,
    188,
    190,
    191,
    199,
    202,
    204,
    205,
    206,
    207,
    209,
    210,
  ],
  "unsupported POSIX regex syntax": [54, 55, 56],
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
const { RegExp, expectMatch, matches } = require("../util");

`;

lines.forEach((line, index) => {
  let nextCase = "";

  const knownIssue = hasKnownIssue(index);
  if (knownIssue == "issue with parsing the test itself") {
    testCase += `it.skip("line ${index} - issue with parsing the test itself", () => {});`;
    return;
  }
  const knownIssueCode = knownIssue ? `.skip` : "";

  try {
    const parts = line.split("\t").filter((f) => f !== "");
    if (parts.length < 4) {
      // TODO - these should probably be listed as known issues
      return;
    }

    const regex = escape(parts[1]);
    const str = parts[2] !== "NULL" ? parts[2] : "";

    nextCase += `it${knownIssueCode}("line: ${index} - matches ${regex} against '${escape(
      str
    )}'", () => {
      `;
    if (parts[3] == "BADBR") {
      nextCase += ` expect(() => new RegExp("${regex}")).toThrow();`;
    } else {
      nextCase += ` const match = matches("${regex}", "${escape(str)}");`;

      // create an expect for each capture group
      const captures = parts[3].match(/\((\d{1,2}|\?),(\d{1,2}|\?)\)+/g);
      captures.forEach((capture, index) => {
        const digits = capture.match(/\((\d{1,2}|\?),(\d{1,2}|\?)\)/);
        const expected =
          digits[0] == "?"
            ? ""
            : str.substring(Number(digits[1]), Number(digits[2]));
        nextCase += ` expect(match.matches[${index}]).toEqual("${escape(
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
  "./__tests__/generated/data.js",
  prettier.format(testCase, { parser: "babel" })
);
