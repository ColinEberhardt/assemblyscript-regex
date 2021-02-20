import "assemblyscript/std/portable/index";

const globalAny: any = global;
globalAny.log = console.log;

import { RegExp } from "../assembly/regexp";

const regexObj = new RegExp("[a-c]", "i");
const match = regexObj.exec("A");
console.log(JSON.stringify(match, null, 2));
