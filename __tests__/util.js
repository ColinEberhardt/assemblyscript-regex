global.TextDecoder = require("text-encoding").TextDecoder;
const fs = require("fs");
const loader = require("@assemblyscript/loader/umd/index");

class RegExp {
  constructor(regex, flags = "") {
    this.wasmModule = loader.instantiateSync(
      fs.readFileSync("./build/untouched.wasm"),
      {
        env: {
          log: (strPtr) => {
            const { __getString } = wasmModule.exports;
            console.log(__getString(strPtr));
          },
        },
      }
    );

    const {
      RegExp,
      createRegExp,
      __newString,
      __pin,
      __unpin,
    } = this.wasmModule.exports;

    // create the regexp
    const patternPtr = __pin(__newString(regex));
    const flagsPtr = __newString(flags);
    const regexPtr = __pin(createRegExp(patternPtr, flagsPtr));
    __unpin(patternPtr);
    this.regex = RegExp.wrap(regexPtr);
  }

  exec(str) {
    const {
      Match,
      __getString,
      __newString,
      __pin,
      __unpin,
      __getArray,
    } = this.wasmModule.exports;

    // execute
    const matchPtr = __pin(this.regex.exec(__newString(str)));
    if (!matchPtr) return null;

    // extract the string matches
    const match = Match.wrap(matchPtr);
    const matchesArray = __getArray(match.matches);
    const matches = matchesArray.map((m) => __getString(m));
    const index = match.index;
    const input = __getString(match.input);
    __unpin(matchPtr);

    // create a new JS object based on the wasm object
    return {
      matches,
      index,
      input,
    };
  }

  release() {
    __unpin(this.regex);
  }

  get lastIndex() {
    return this.regex.lastIndex;
  }
}

const expectMatch = (regex, arr) => {
  arr.forEach((value) => {
    const regexp = new RegExp(regex);
    const match = regexp.exec(value);
    expect(match).not.toBeNull();
    expect(match.matches[0]).toEqual(value);
  });
};

const expectNotMatch = (regex, arr) => {
  arr.forEach((value) => {
    const regexp = new RegExp(regex);
    const match = regexp.exec(value);
    expect(match).toBeNull();
  });
};

const matches = (regex, value) => {
  const regexp = new RegExp(regex);
  return regexp.exec(value);
};

test.todo("no tests in this file!");

module.exports.RegExp = RegExp;
module.exports.matches = matches;
module.exports.expectNotMatch = expectNotMatch;
module.exports.expectMatch = expectMatch;
