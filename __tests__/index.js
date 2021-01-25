const { RegExp, expectNotMatch, expectMatch, matches } = require("./util");

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
