const { matches } = require("./util");
const fs = require("fs");
const { fail } = require("assert");

const data = fs.readFileSync("./test/test.dat", "utf8");
const lines = data.split("\n");

describe("test data", () => {
  lines.forEach(line => {
    try {
      const parts = line.split("\t").filter(f => f !== "");
      if (parts.length < 4) return;

      const regex = parts[1];
      const str = parts[2] !== "NULL" ? parts[2] : "";

      it(`matches ${regex} against ${str}`, () => {
        const match = matches(regex, str);
        const captures = parts[3].match(/\((\d{1,2}),(\d{1,2})\)+/g);
        
        captures.forEach((capture, index) => {
          const digits = capture.match(/\((\d{1,2}),(\d{1,2})\)/);
          const expected = str.substring(Number(digits[1]), Number(digits[2]));
          expect(match.matches[index]).toEqual(expected);
        });
      });
    } catch {
      it(`parsing error - ${line}`, () => {
        fail("");
      });
    }
  });
});
