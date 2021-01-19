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
      const str = parts[2];
      // skip tests that have capturing groups
      if (parts[3].split(",").length > 2) {
        it(`doesn't support capturing groups - ${line}`, () => {
          fail("");
        });
      } else {
        const match = parts[3].match(/\((\d{1,2}),(\d{1,2})\)/);
        const expected = str.substring(Number(match[1]), Number(match[2]));

        it(`matches ${regex} against ${str}`, () => {
          const match = matches(regex, str);
          expect(match).not.toBeNull();
          expect(match.value).toEqual(expected);
        });
      }
    } catch {
      it(`parsing error - ${line}`, () => {
        fail("");
      });
    }
  });
});
