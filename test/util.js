global.TextDecoder = require("text-encoding").TextDecoder;
const fs = require("fs");
const loader = require("@assemblyscript/loader/umd/index");

const matches = (regexStr, str) => {
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

  const {
    RegExp,
    Match,
    createRegExp,
    __getString,
    __newString,
    __retain,
    __release,
    __getArray
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
  const inputPtr = match.input;

  // extract the string matches
  const matchesArrayPtr = __getArray(match.matches);
  const matches = matchesArrayPtr.map(m => __getString(m));
  __release(matchesArrayPtr);

  // create a new JS object based on the wasm object
  const matchValue = {
    matches,
    index: match.index,
    input: __getString(inputPtr)
  };

  // __release(valuePtr);
  __release(inputPtr);
  __release(match);
  __release(regex);
  return matchValue;
};

module.exports.matches = matches;
