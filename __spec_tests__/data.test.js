const { RegExp } = require("../__tests__/util");
const fs = require("fs");
const { fail } = require("assert");

const data = fs.readFileSync("./__spec_tests__/test.dat", "utf8");
const lines = data.split("\n");

const matches = (regex, value) => {
  const regexp = new RegExp(regex);
  return regexp.exec(value);
};

const unescape = (str) => str.replace("\\n", "\n");
const escape = (str) => str.replace(/[\n]/g, "\\n");

describe("test data", () => {
  lines.forEach((line) => {
    try {
      const parts = line.split("\t").filter((f) => f !== "");
      if (parts.length < 4) return;

      const regex = unescape(parts[1]);
      const str = parts[2] !== "NULL" ? unescape(parts[2]) : "";
      it(`matches ${escape(regex)}  against "${escape(str)}"`, () => {
        if (parts[3] == "BADBR") {
          expect(() => new RegExp(regex)).toThrow();
        } else {
          const match = matches(regex, str);
          const captures = parts[3].match(/\((\d{1,2}|\?),(\d{1,2}|\?)\)+/g);

          captures.forEach((capture, index) => {
            const digits = capture.match(/\((\d{1,2}|\?),(\d{1,2}|\?)\)/);
            const expected =
              digits[0] == "?"
                ? ""
                : str.substring(Number(digits[1]), Number(digits[2]));
            expect(match.matches[index]).toEqual(expected);
          });
        }
      });
    } catch {
      it(`parsing error - ${line}`, () => {
        fail("");
      });
    }
  });
});
