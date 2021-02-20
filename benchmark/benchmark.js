global.TextDecoder = require("text-encoding").TextDecoder;
const fs = require("fs");
const loader = require("@assemblyscript/loader");

const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

wasmModule = loader.instantiateSync(fs.readFileSync("./build/optimized.wasm"), {
  env: {
    log: () => {
      const { __getString } = wasmModule.exports;
      console.log(__getString(strPtr));
    },
  },
});

// the executeRegExp exported function is ex
function executeRegex(regexStr, valueStr, untilNull = false) {
  const { executeRegExp, __newString, __pin, __unpin } = wasmModule.exports;

  // create the regexp
  const regexPtr = __pin(__newString(regexStr));
  const strPtr = __newString(valueStr);
  executeRegExp(regexPtr, strPtr, untilNull ? -1 : 5);
  __unpin(regexPtr);
}

// add tests
suite
  .add("baseline", () => {
    // this test primarily measures the overhead in the wasm / JS interop
    executeRegex("", "");
  })
  .add("character class", () => {
    executeRegex("[a-zA-C0-9J]", "J"); // match char
    executeRegex("[a-zA-C0-9J]", "a"); // match char in range
  })
  .add("concatenation", () => {
    executeRegex("this is a long string", "this is a long string");
  })
  .add("quantifiers", () => {
    executeRegex("a*", "aaaaa");
    executeRegex("a+", "aaaaa");
    executeRegex("a?", "a");
  })
  .add("range quantifiers", () => {
    executeRegex("a{20,30}", "a".repeat(25));
  })
  .add("alternation", () => {
    executeRegex("a|b|c|d|e|f|g", "d");
  })
  .add("multiple regex matches", () => {
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    executeRegex("[a-l]{3}", text, true);
  })
  .add("complex regex", () => {
    const text =
      "<TR BGCOLOR='#DBE9E9'><TD align=left valign=top>43.<a href='joblist.cfm?JobID=94 6735&Keyword='>Word Processor<BR>(N-1286)</a></TD><TD align=left valign=top>Lega lstaff.com</TD><TD align=left valign=top>CA - Statewide</TD></TR>";
    const regex =
      "<tr([\\w\\W\\s\\d][^<>]{0,})><TD([\\w\\W\\s\\d][^<>]{0,})>([\\d]{0,}\\.)(.*)((<BR>([\\w\\W\\s\\d][^<>]{0,})|[\\s]{0,}))<\\/a><\\/TD><TD([\\w\\W\\s\\d][^<>]{0,})>([\\w\\W\\s\\d][^<>]{0,})<\\/TD><TD([\\w\\W\\s\\d][^<>]{0,})>([\\w\\W\\s\\d][^<>]{0,})<\\/TD><\\/TR>";
    executeRegex(regex, text, true);
  })
  // add listeners
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  // run async
  .run({ async: true });
