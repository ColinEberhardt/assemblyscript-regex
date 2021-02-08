import "assemblyscript/std/portable/index";

const globalAny: any = global;
globalAny.log = console.log;

import { RegExp } from "../assembly/regexp";

const regexObj = new RegExp("^(a){1,3}");
const match = regexObj.exec("abc");
console.log(JSON.stringify(match, null, 2));

const regexObj2 = new RegExp("(a|b)c|a(b|c)");
const match2 = regexObj2.exec("ab");
console.log(JSON.stringify(match2, null, 2));
