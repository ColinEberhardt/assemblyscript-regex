import "assemblyscript/std/portable/index";

const globalAny: any = global;
globalAny.log = console.log;

import { RegExp } from "../assembly/regexp";

const regexObj = new RegExp("abc$", "m");
let match = regexObj.exec("abc\n");
console.log(JSON.stringify(match, null, 2));
// match = regexObj.exec("f1\nbar\nbaz\nf2");
// console.log(JSON.stringify(match, null, 2));

// const regex = new RegExp("^f\\d{1}$", "gm");

//     let match = regex.exec("f1\nbar\nbaz\nf2");
//     expect(match!.matches[0]).toBe("f1");
