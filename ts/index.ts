import "assemblyscript/std/portable/index";

const globalAny: any = global;
globalAny.log = console.log;

import { RegExp } from "../assembly/regexp";

const regexObj = new RegExp("((a)(b)c)(d)");
const match = regexObj.exec("abcd");

console.log(match);
