import { toPostfix, toNFA, recognize } from "../index";

describe("example", () => {
  it("works", () => {
    const sample = "a*";
    const postfix = toPostfix(sample);
    // log(postfix);

    const nfa = toNFA(postfix);
    log("keys " + nfa.start.transition.keys().join(", "));
    log(recognize(nfa, "aaa") ? "yes" : "no");
    log(recognize(nfa, "ab") ? "yes" : "no");
    // recognize(nfa, "a")
    // recognize(nfa, "b")
  });
});
