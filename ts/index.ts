import "assemblyscript/std/portable/index";

const globalAny: any = global;
globalAny.log = console.log;

import { RegExp } from "../assembly/regexp";

const regexObj = new RegExp("(a{3}){2}");
const match = regexObj.exec("From abcd  Mon Sep 01 12:33:02 1997");

console.log(match);
