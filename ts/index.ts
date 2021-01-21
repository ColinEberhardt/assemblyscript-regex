import "assemblyscript/std/portable/index";

const globalAny: any = global;
globalAny.log = console.log;

import { RegExp } from "../assembly/regexp";

const regexObj = new RegExp(unescape("\na"));
const match = regexObj.exec(unescape("\na"));

console.log(match);


// import { Parser } from "../assembly/parser";
// import { walk } from "../assembly/walker";

// const ast = new Parser("[abc]a").toAST();
// console.log(ast);

// walk(ast, nodeVisitor => {
//   console.log(nodeVisitor.node.type)
//   if (nodeVisitor.node.type != "Concatenation") {
//     nodeVisitor.delete();
//   }
// });

// console.log(ast);