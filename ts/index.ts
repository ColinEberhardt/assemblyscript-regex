import "assemblyscript/std/portable/index";

const globalAny: any = global;
globalAny.log = console.log;

import { RegExp } from "../assembly/regexp";

const regexObj = new RegExp("[a\\\\c]");
const match = regexObj.exec("\\");

console.log(match);
