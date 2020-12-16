const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = { env: { log: value => console.log(value) } };
const wasmModule = loader.instantiateSync(
  fs.readFileSync(__dirname + "/build/untouched.wasm"),
  imports
);

const {
  firstMatch,
  __getString,
  __newString,
  __retain,
  __release
} = wasmModule.exports;

const regex = "ab|a",
  value = "xabc";
const aPtr = __retain(__newString(regex));
const bPtr = __retain(__newString(value));
const match = __getString(firstMatch(aPtr, bPtr));
console.log(regex, value, match);
__release(aPtr);
__release(bPtr);
__release(match);
