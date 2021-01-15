import "assemblyscript/std/portable/index";

import { RegExp } from "../assembly/regexp";

const globalAny: any = global;
globalAny.log = console.log;

const regexObj = new RegExp("a*");
const match = regexObj.exec("aaaaa");

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