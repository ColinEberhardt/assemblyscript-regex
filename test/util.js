global.TextDecoder = require("text-encoding").TextDecoder;
const fs = require("fs");
const loader = require("@assemblyscript/loader/umd/index");

const wasmModule = loader.instantiateSync(
  fs.readFileSync("./build/untouched.wasm"),
  {
    env: { log: value => console.log(value) }
  }
);

const matches = (regex, value) => {
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
  const doesMatch = match !== "";
  __release(aPtr);
  __release(bPtr);
  __release(match);
  return doesMatch;
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