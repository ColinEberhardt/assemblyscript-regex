import { RegExp } from "..";
import { exec, expectNotMatch, expectMatch } from "./utils";

it("match returns correct substring", () => {
  const match = exec("\\d", "asd123asd");
  expect(match.index).toBe(3);
  expect(match.input).toStrictEqual("asd123asd");
  expect(match.matches[0]).toStrictEqual("1");
});

describe("dotAll mode", () => {
  it("sets the dotAll flag", () => {
    expect(new RegExp("foo", "s").dotAll).toBeTruthy();
    expect(new RegExp("foo", "").dotAll).toBeFalsy();
  });

  it("allows dot to match any character", () => {
    const regex = new RegExp("^12.34", "s");
    const match = exec(regex, "12\n34");
    expect(match.matches[0]).toBe("12\n34");
  });
});

describe("case insensitive mode", () => {
  it("supports characters", () => {
    const regex = new RegExp("AbC", "i");
    const match = exec(regex, "aBc");
    expect(match.matches[0]).toBe("aBc");
  });

  it("supports character ranges", () => {
    const regex = new RegExp("[a-c][A-C]", "i");
    const match = exec(regex, "Ac");
    expect(match.matches[0]).toBe("Ac");
  });

  it("sets ignoreCase flag", () => {
    expect(new RegExp("\\d+", "i").ignoreCase).toBeTruthy();
    expect(new RegExp("\\d+", "g").ignoreCase).toBeFalsy();
  });
});

describe("global mode", () => {
  it("sets global flag", () => {
    expect(new RegExp("\\d+", "g").global).toBeTruthy();
    expect(new RegExp("\\d+", "").global).toBeFalsy();
  });

  it("increments lastIndex", () => {
    const regex = new RegExp("\\d+", "g");
    const match = exec(regex, "dog 23 fish 45 cat");
    expect(match.matches[0]).toStrictEqual("23");
    expect(regex.lastIndex).toStrictEqual(6);
  });

  it("uses lastIndex to support multiple matches", () => {
    const regex = new RegExp("\\d+", "g");
    let match = exec(regex, "dog 23 fish 45 cat");
    expect(match.matches[0]).toBe("23");
    expect(regex.lastIndex).toBe(6);

    match = exec(regex, "dog 23 fish 45 cat");
    expect(match.matches[0]).toBe("45");
    expect(regex.lastIndex).toBe(14);

    let empty_match = regex.exec("dog 23 fish 45 cat");
    expect(empty_match).toBeNull();
    expect(regex.lastIndex).toBe(0);
  });
});

describe("multi-line mode", () => {
  it("sets multi-line flag", () => {
    expect(new RegExp("\\d+", "m").multiline).toBeTruthy();
    expect(new RegExp("\\d+", "").multiline).toBeFalsy();
  });

  it("matches across multiple lines", () => {
    const match = exec("^f\\d{1}$", "f1\nbar\nbaz\nf2", "m");
    expect(match.matches.length).toBe(1);
    expect(match.matches[0]).toBe("f1");
  });

  it("matches across multiple lines with global mode", () => {
    const regex = new RegExp("^f\\d{1}$", "gm");

    let match = regex.exec("f1\nbar\nbaz\nf2");
    expect(match!.matches[0]).toBe("f1");

    match = regex.exec("f1\nbar\nbaz\nf2");
    expect(match!.matches[0]).toBe("f2");

    match = regex.exec("f1\nbar\nbaz\nf2");
    expect(match).toBeNull();
  });

  it("matches across multiple lines with global mode", () => {
    const regex = new RegExp("^[a-c]", "gm");

    let match = regex.exec("a1\nd2\nc3\n");
    expect(match!.matches[0]).toBe("a");

    match = regex.exec("a1\nd2\nc3\n");
    expect(match!.matches[0]).toBe("c");

    match = regex.exec("a1\nd2\nc3\n");
    expect(match).toBeNull();
  });

  it("matches across multiple lines with global mode", () => {
    const regex = new RegExp("[a-c]$", "gm");

    let match = regex.exec("1a\n2d\n3c\n");
    expect(match!.matches[0]).toBe("a");

    match = regex.exec("1a\n2d\n3c\n");
    expect(match!.matches[0]).toBe("c");

    match = regex.exec("1a\n2d\n3c\n");
    expect(match).toBeNull();
  });
});

describe("non-global mode", () => {
  it("doesn't increment lastIndex", () => {
    const regex = new RegExp("\\d+");
    let match = exec(regex, "dog 23 fish 45 cat");
    expect(match.matches[0]).toBe("23");
    expect(regex.lastIndex).toBe(0);

    match = exec(regex, "dog 23 fish 45 cat");
    expect(match.matches[0]).toBe("23");
    expect(regex.lastIndex).toBe(0);
  });
});

describe("use cases", () => {
  it("matches combinations", () => {
    expectMatch("\\s\\w*", [" bar"]);
    expectMatch("\\S\\w*", ["foo"]);
  });

  it("email", () => {
    const regex = ".+@.+\\..+";
    expect(exec(regex, "colin@gmail.com")).toBeTruthy();
    expectNotMatch(regex, ["gmail"]);

    const capturingRegex = "(.+)@(.+)\\.(.+)";
    expect(exec(capturingRegex, "colin@gmail.com")).toBeTruthy();

    const match = exec(capturingRegex, "colin@gmail.com");
    expect(match.matches[0]).toBe("colin@gmail.com");
    expect(match.matches[1]).toBe("colin");
    expect(match.matches[2]).toBe("gmail");
    expect(match.matches[3]).toBe("com");
  });
});

describe("error cases", () => {
  it("throws an explicit error when there is nothing to repeat", () => {
    expect(() => {
      let foo = new RegExp("*m", ""); // eslint-disable-line no-invalid-regexp
    }).toThrow("Invalid regular expression: Nothing to repeat");
  });
});
