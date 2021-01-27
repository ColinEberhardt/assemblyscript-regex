/// <reference types="../../node_modules/visitor-as/dist/examples/includeBytesTransform" />
import { RegExp, Match } from "..";

function matches(regex: string, value: string): Match | null {
  const regexp = new RegExp(regex);
  return regexp.exec(value);
}

const unescape = (str: string): string => str.replace("\\n", "\n");
const escape = (str: string): string => str.replace("\n", "\\n");

const data = includeBytes("../../__spec_tests__/test.dat");
const dataStr = String.UTF8.decodeUnsafe(changetype<usize>(data), data.length);
let currIndex: i32 = 0;

function nextLine(): string {
  let lineEnd = dataStr.indexOf("\n", currIndex);
  if (lineEnd == -1) {
    return "";
  }
  let res = dataStr.substring(currIndex, lineEnd);
  currIndex = lineEnd + 1;
  return res;
}

let currentStr = "";
let currentRegex = "";

function test(): Match | null {
  return matches(currentRegex, currentStr);
}

function parseAnInt(s: string): i32 {
  // log("parsing " + s);
  return <i32>parseInt(s, 10);
}

function parseTuples(str: string): string[][] {
  let res: string[][] = new Array();
  let regex = new RegExp("(([0-9]+),([0-9]+))", "g");
  let match = regex.exec(str);
  while (match != null) {
    let first = match.matches[1];
    let second = match.matches[2];
    let arr: string[] = new Array();
    arr.push(first);
    arr.push(second);
    res.push(arr);
    match = regex.exec(str);
  }
  return res;
}

describe("test data", () => {
  it("should parse tuples", () => {
    expect(parseTuples("(0,2)")).toStrictEqual([["0", "2"]]);
    expect(parseTuples("(0,0)")).toStrictEqual([["0", "0"]]);
    expect(parseTuples("(1,2)(2,2)")).toStrictEqual([
      ["1", "2"],
      ["2", "2"],
    ]);
  });

  it("should read from file", () => {
    let line = nextLine();
    let i = 0;
    while (line != "") {
      line = nextLine();
      const parts = line.split("\t").filter((f) => f !== "");

      if (parts.length < 4) continue;

      const regex = unescape(parts[1]);
      currentRegex = regex;
      const str = parts[2] !== "NULL" ? unescape(parts[2]) : "";
      currentStr = str;
      if (parts[3] == "BADBR") {
        log(currentStr + "  " + currentRegex);
        log(matches(currentRegex, currentStr));
        // ).toThrow("regexp: " + regex + " should throw with value " + str);
      } else {
        const match = matches(regex, str);
        // log(match);
        let tuples = parseTuples(parts[3]);
        // log(tuples);
        for (let i = 0; i < tuples.length; i++) {
          let capture = tuples[i];
          let first = capture[0];
          let second = capture[1];
          const expected =
            first == "?"
              ? ""
              : str.substring(parseAnInt(first), parseAnInt(second));
          expect(match).not.toBeNull(
            "regex " + currentRegex + " didn't match " + currentStr
          );
          if (match != null)
            expect(match.matches[i]).toStrictEqual(
              expected,
              currentStr +
                "  " +
                currentRegex +
                " current match " +
                i.toString() +
                " matches " +
                match.matches.toString() +
                " tuples " +
                tuples.toString()
            );
        }

        // const captures = parts[3].match(/\((\d{1,2}|\?),(\d{1,2}|\?)\)+/g);
      }
      line = nextLine();
    }
  });
});
