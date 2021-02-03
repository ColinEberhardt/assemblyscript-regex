import "assemblyscript/std/portable/index";

const globalAny: any = global;
globalAny.log = console.log;

import { RegExp } from "../assembly/regexp";

const regexObj = new RegExp("^\\s");
const match = regexObj.exec("\040abc");

console.log(match);
