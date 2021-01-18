global.TextDecoder = require("text-encoding").TextDecoder;
const fs = require("fs");
const loader = require("@assemblyscript/loader/umd/index");

const wasmModule = loader.instantiateSync(
  fs.readFileSync("./build/untouched.wasm"),
  {
    env: {
      log: strPtr => {
        const { __getString, __release } = wasmModule.exports;
        str = __getString(strPtr);
        console.log(str);
        __release(strPtr);
      }
    }
  }
);

const matches = (regexStr, str) => {
  const {
    RegExp,
    Match,
    createRegExp,
    __getString,
    __newString,
    __retain,
    __release
  } = wasmModule.exports;

  // create the regexp
  const regexPtr = __retain(__newString(regexStr));
  const regex = RegExp.wrap(createRegExp(regexPtr));
  __release(regexPtr);

  // execute
  const strPtr = __retain(__newString(str));
  const match = Match.wrap(regex.exec(strPtr));
  if (match == 0) return null;
  __release(strPtr);
  const valuePtr = match.value;
  const inputPtr = match.input;

  // create a new JS object based on the wasm object
  const matchValue = {
    value: __getString(valuePtr),
    index: match.index,
    input: __getString(inputPtr)
  };

  __release(valuePtr);
  __release(inputPtr);
  __release(match);
  __release(regex);
  return matchValue;
};

const matchValue = (regex, value) => {
  const {
    firstMatch,
    __getString,
    __newString,
    __retain,
    __release
  } = wasmModule.exports;
  let aPtr = __retain(__newString(regex));
  let bPtr = __retain(__newString(value));
  const match = __getString(firstMatch(aPtr, bPtr));
  const copy = match.toString();
  __release(aPtr);
  __release(bPtr);
  __release(match);
  return copy;
};

module.exports.matches = matches;
module.exports.matchValue = matchValue;
