import "assemblyscript/std/portable/index";

const globalAny: any = global;
globalAny.log = console.log;

import { RegExp } from "../assembly/regexp";

const regexObj = new RegExp("a{3,");
const match = regexObj.exec("a{3,");

console.log(match);
