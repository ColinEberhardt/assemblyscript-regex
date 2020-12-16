import "assemblyscript/std/portable/index";

import { firstMatch } from "../assembly/index";

const globalAny: any = global;
globalAny.log = console.log;

console.log(firstMatch("abracadabra$", "abracadabracadabra"));
