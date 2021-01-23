global.TextDecoder = require("text-encoding").TextDecoder;
const fs = require("fs");
const loader = require("@assemblyscript/loader/umd/index");

class RegExpProxy {
  constructor(regex, flags = "") {
    this.wasmModule = loader.instantiateSync(
      fs.readFileSync("./build/untouched.wasm"),
      {
        env: {
          log: (strPtr) => {
            const { __getString, __release } = wasmModule.exports;
            str = __getString(strPtr);
            console.log(str);
            __release(strPtr);
          },
        },
      }
    );

    const {
      RegExp,
      Match,
      createRegExp,
      __getString,
      __newString,
      __retain,
      __release,
      __getArray,
    } = this.wasmModule.exports;

    // create the regexp
    const regexPtr = __retain(__newString(regex));
    const flagsPtr = __retain(__newString(flags));
    this.regex = RegExp.wrap(createRegExp(regexPtr, flagsPtr));
    __release(regexPtr);
    __release(flagsPtr);
  }

  exec(str) {
    const {
      RegExp,
      Match,
      createRegExp,
      __getString,
      __newString,
      __retain,
      __release,
      __getArray,
    } = this.wasmModule.exports;

    // execute
    const strPtr = __retain(__newString(str));
    const match = Match.wrap(this.regex.exec(strPtr));
    __release(strPtr);

    if (match == 0) return null;

    // extract the string matches
    const matchesArrayPtr = __getArray(match.matches);
    const matches = matchesArrayPtr.map((m) => __getString(m));
    __release(matchesArrayPtr);

    const inputPtr = match.input;

    // create a new JS object based on the wasm object
    return {
      matches,
      index: match.index,
      input: __getString(inputPtr),
    };
  }

  release() {
    __release(this.regex);
  }

  get lastIndex() {
    return this.regex.lastIndex;
  }
}

module.exports.RegExp = RegExpProxy;
