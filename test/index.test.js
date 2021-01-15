const { matches } = require("./util");

const expectMatch = (regex, arr) => {
  arr.forEach(value => expect(matches(regex, value)).not.toBeNull());
};

const expectNotMatch = (regex, arr) => {
  arr.forEach(value => expect(matches(regex, value)).toBeNull());
};

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

  it.skip("quantifiers are greedy", () => {
    expect(matchValue("a*", "aaaaa")).toEqual("aaaaa");
    expect(matchValue("a+", "aaaaa")).toEqual("aaaaa");
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
    expectMatch("a$", ["ba"]);
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
    expect(match.value).toEqual("1");
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
  });
});
