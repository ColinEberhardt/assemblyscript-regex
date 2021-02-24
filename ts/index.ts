import "assemblyscript/std/portable/index";

const globalAny: any = global;
globalAny.log = console.log;

import { RegExp } from "../assembly/regexp";

const regexObj = new RegExp("word (?:[a-zA-Z0-9]+ ){0,300}otherword", "");
let match = regexObj.exec(
  "word cat dog elephant mussel cow horse canary baboon snake shark the quick brown fox and the lazy dog and several other words getting close to thirty by now I hope"
);
console.log(JSON.stringify(match, null, 2));
