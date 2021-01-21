const { RegExp } = require("./util");

const expectMatch = (regex, arr) => {
  arr.forEach(value => {
    const regexp = new RegExp(regex);
    const match = regexp.exec(value);
    expect(match).not.toBeNull();
    expect(match.matches[0]).toEqual(value);
  });
};

const expectNotMatch = (regex, arr) => {
  arr.forEach(value => {
    const regexp = new RegExp(regex);
    const match = regexp.exec(value);
    expect(match).toBeNull()
  });
};

const matches = (regex, value) => {
  const regexp = new RegExp(regex);
  return regexp.exec(value);
}

describe("Characters", () => {
  it("single character", () => {
    expectMatch("a", ["a"]);
    expectNotMatch("a", ["fish", ""]);
  });

  it("concatenation", () => {
    expectMatch("ab", ["ab"]);
    expectNotMatch("ab", ["aac", "aa", ""]);
  });
});

describe("Quantifiers", () => {
  it("matches empty strings", () => {
    expectMatch("a?", [""]);
    expectMatch("a*", [""]);
  });

  it("zero or one", () => {
    expectMatch("a?", ["a"]);
    // expectNotMatch("a?", ["bc"]);
  });

  it("one or more", () => {
    expectMatch("a+", ["a", "aa"]);
    expectNotMatch("a+", [""]);
  });

  it("zero or more", () => {
    expectMatch("a*", ["aa", "aaaa"]);
  });

  it("multiple rules", () => {
    expectMatch("a*b", ["b", "ab", "aaaab"]);
    expectNotMatch("a*b", ["aaaad"]);
  });

  it("zero or more is greedy", () => {
    let match = matches("a*", "aaaaa");
    expect(match).not.toBeNull();
    expect(match.matches[0]).toEqual("aaaaa");
  });

  it("one or more is greedy", () => {
    let match = matches("a+", "aaaaa");
    console.log(match);
    expect(match).not.toBeNull();
    expect(match.matches[0]).toEqual("aaaaa");
  });
});

describe("Groups and ranges", () => {
  it("or", () => {
    expectMatch("a|b", ["b", "a"]);
    expectNotMatch("a|b", ["c"]);
    expectMatch("a|br", ["br", "a"]);
    expectNotMatch("a|br", ["b", "c"]);
  });

  it("or multi-term", () => {
    expectMatch("a|b|c", ["b", "a", "c"]);
    expectNotMatch("a|b|c", ["d"]);
    expectMatch("a|br|pc", ["br", "a", "pc"]);
    expectNotMatch("a|br|pc", ["b", "pr"]);
  });
});

describe("character sets", () => {
  it("matches discrete characters", () => {
    expectMatch("[abce]", ["a", "b", "c", "e"]);
    expectNotMatch("[abce]", ["", "f", "h"]);
  });

  it("matches character ranges", () => {
    expectMatch("[a-c]", ["a", "b", "c"]);
    expectNotMatch("[a-c]", ["d", "e", ""]);
    expectMatch("[K-M]", ["K", "L", "M"]);
    expectNotMatch("[K-M]", ["9", "J"]);
    expectMatch("[0-9]", ["0", "9"]);
    expectNotMatch("[0-9]", ["a", "A"]);
  });

  it("matches multiple ranges", () => {
    expectMatch("[a-ce-f]", ["a", "b", "c", "e", "f"]);
    expectNotMatch("[a-ce-f]", ["d"]);
  });

  it("supports closing brackets", () => {
    expectMatch("[]a]", ["]", "a"]);
  });

  it("supports negated sets", () => {
    expectNotMatch("[^a-c]", ["a", "b", "c"]);
    expectMatch("[^a-c]", ["d", "e"]);
    expectNotMatch("[^a-ce-f]", ["a", "b", "c", "e", "f"]);
    expectMatch("[^a-ce-f]", ["d"]);
  });

  it("treats - as a literal", () => {
    expectMatch("[-abc]", ["-", "a", "b", "c"]);
    expectMatch("[abc-]", ["-", "a", "b", "c"]);
  });

  it("treats - as a literal in negated sets", () => {
    expectNotMatch("[^-abc]", ["-", "a", "b", "c"]);
    expectMatch("[^-abc]", ["1", "A"]);
  });
});

describe("character classes", () => {
  it("dot", () => {
    expectMatch(".", [" ", "B", "|", "9"]);
    expectNotMatch(".", ["", "\n"]);
  });

  it("digit", () => {
    expectMatch("\\d", ["0", "9"]);
    expectNotMatch("\\d", ["", "b"]);
  });

  it("non-digit", () => {
    expectNotMatch("\\D", ["0", "9", ""]);
    expectMatch("\\D", ["b", "|"]);
  });

  it("word", () => {
    expectMatch("\\w", ["A", "a", "Z", "z", "0", "9", "_"]);
    expectNotMatch("\\w", ["", "$"]);
  });

  it("not word", () => {
    expectNotMatch("\\W", ["A", "a", "Z", "z", "0", "9", "_", ""]);
    expectMatch("\\W", ["&", "$"]);
  });

  it("whitespace", () => {
    expectMatch("\\s", ["\f", "\n", "\r", "\t", "\v"]);
    expectNotMatch("\\s", ["", "a", "0"]);
  });

  it("not whitespace", () => {
    expectNotMatch("\\S", ["", "\f", "\n", "\r", "\t", "\v"]);
    expectMatch("\\S", ["a", "0"]);
  });

  it("tab, cr, lf, vt, ff", () => {
    expectMatch("\\t", ["\t"]);
    expectMatch("\\r", ["\r"]);
    expectMatch("\\n", ["\n"]);
    expectMatch("\\v", ["\v"]);
    expectMatch("\\f", ["\f"]);
    expectNotMatch("\\t", ["a", " ", ""]);
  });

  it("escaped dot", () => {
    expectMatch("\\.", ["."]);
    expectNotMatch("\\.", ["", "a"]);
  });
});

describe("boundary assertions", () => {
  it("matches end of string", () => {
    const regex = new RegExp("a$");
    const match = regex.exec("ba");
    expect(match.index).toEqual(1);
    expect(match.matches[0]).toEqual("a");
    expectNotMatch("a$", ["ab"]);
  });

  it("matches start of string", () => {
    expectMatch("^a", ["a"]);
    expectNotMatch("^a", ["ba"]);
  });

  it("handles escaped boundaries", () => {
    expectMatch("\\^a", ["^a"]);
    expectMatch("a\\$", ["a$"]);
  });
});

describe("regexp", () => {
  it("match returns correct substring", () => {
    const match = matches("\\d", "asd123asd");
    expect(match.index).toEqual(3);
    expect(match.input).toEqual("asd123asd");
    expect(match.matches[0]).toEqual("1");
  });

  describe("global mode", () => {
    it("increments lastIndex", () => {
      const regex = new RegExp("\\d+", "g");
      const match = regex.exec("dog 23 fish 45 cat");
      expect(match.matches[0]).toEqual("23");
      expect(regex.lastIndex).toEqual(6);
    });

    it("uses lastIndex to support multiple matches", () => {
      const regex = new RegExp("\\d+", "g");

      let match = regex.exec("dog 23 fish 45 cat");
      expect(match.matches[0]).toEqual("23");
      expect(regex.lastIndex).toEqual(6);

      match = regex.exec("dog 23 fish 45 cat");
      expect(match.matches[0]).toEqual("45");
      expect(regex.lastIndex).toEqual(14);

      match = regex.exec("dog 23 fish 45 cat");
      expect(match).toBeNull();
      expect(regex.lastIndex).toEqual(0);
    });
  });

  describe("non-global mode", () => {
    it("doesn't increment lastIndex", () => {
      const regex = new RegExp("\\d+");

      let match = regex.exec("dog 23 fish 45 cat");
      expect(match.matches[0]).toEqual("23");
      expect(regex.lastIndex).toEqual(0);

      match = regex.exec("dog 23 fish 45 cat");
      expect(match.matches[0]).toEqual("23");
      expect(regex.lastIndex).toEqual(0);
    });
  });
});

describe("capture groups", () => {
  it("supports capture groups", () => {
    let match = matches("a(\\d)a", "a3a");
    expect(match.index).toEqual(0);
    expect(match.input).toEqual("a3a");
    expect(match.matches[0]).toEqual("a3a");
    expect(match.matches[1]).toEqual("3");

    match = matches("a(\\d)a", "  a3a");
    expect(match.index).toEqual(2);
    expect(match.input).toEqual("  a3a");
    expect(match.matches[0]).toEqual("a3a");
    expect(match.matches[1]).toEqual("3");

    match = matches("a(\\d*)a", "a3456a");
    expect(match.index).toEqual(0);
    expect(match.input).toEqual("a3456a");
    expect(match.matches[0]).toEqual("a3456a");
    expect(match.matches[1]).toEqual("3456");

    match = matches("a*(\\d*)(a*)", "aaa456aaa");
    expect(match.index).toEqual(0);
    expect(match.input).toEqual("aaa456aaa");
    expect(match.matches[0]).toEqual("aaa456aaa");
    expect(match.matches[1]).toEqual("456");
    expect(match.matches[2]).toEqual("aaa");
  });

  it("should not return captured values for non-matching alternations", () => {
    const match = matches("(a|b)c|a(b|c)", "ab");
    expect(match.matches[0]).toEqual("ab");
    expect(match.matches[1]).toEqual("");
    expect(match.matches[2]).toEqual("b");
  });
});

describe("range quantifiers", () => {
  it("handles single quantifier", () => {
    expectMatch("a{2}", ["aa"]);
    expectMatch("ba{2}", ["baa"]);
    expectMatch("ba{1}b", ["bab"]);
  });

  it("handles open upper bound quantifiers", () => {
    expectMatch("a{2,}", ["aa", "aaaaa"]);
    expectMatch("ba{2,}", ["baa", "baaaaaaa"]);
    expectMatch("ba{1,}b", ["bab", "baaaaaab"]);
  });

  it("handles explicit upper bound quantifiers", () => {
    const match = matches("a{2,4}", "aaaaaaaaaa");
    expect(match.matches[0]).toEqual("aaaa");
  });

  it("handles zero value quantifier", () => {
    expectMatch("ba{0}b", ["bb"]);
  });

  it("handles quantifiers within alternates", () => {
    expectMatch("a{2}|b{2}", ["bb", "aa"]);
    expectNotMatch("a{2}|b{2}", ["cc"]);
  });
});

describe("use cases", () => {
  it("matches combinations", () => {
    expectMatch("\\s\\w*", [" bar"]);
    expectMatch("\\S\\w*", ["foo"]);
  });

  it("email", () => {
    const regex = ".+@.+\\..+";
    expect(matches(regex, "colin@gmail.com")).toBeTruthy();
    expect(matches(regex, "gmail")).toBeFalsy();

    const capturingRegex = "(.+)@(.+)\\.(.+)";
    expect(matches(capturingRegex, "colin@gmail.com")).toBeTruthy();

    match = matches(capturingRegex, "colin@gmail.com");
    expect(match.matches[0]).toEqual("colin@gmail.com");
    expect(match.matches[1]).toEqual("colin");
    expect(match.matches[2]).toEqual("gmail");
    expect(match.matches[3]).toEqual("com");
  });
});
