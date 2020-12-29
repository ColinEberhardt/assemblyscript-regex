import "assemblyscript/std/portable/index";

// import { firstMatch } from "../assembly/index";

// const globalAny: any = global;
// globalAny.log = console.log;

// console.log(firstMatch("a$", "ba"));


import { Parser } from "../assembly/parser";
import { walk } from "../assembly/walker";

const ast = new Parser("[abc]a").toAST();
console.log(ast);

walk(ast, nodeVisitor => {
  console.log(nodeVisitor.node.type)
  if (nodeVisitor.node.type != "Concatenation") {
    nodeVisitor.delete();
  }
});

console.log(ast);