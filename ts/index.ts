import "assemblyscript/std/portable/index";

import { toPostfix, toNFA, recognize } from "../assembly/index";

const sample = "a";
const postfix = toPostfix(sample);

const nfa = toNFA(postfix);
console.log(recognize(nfa, "b"));
// console.log(recognize(nfa, "foo"));

