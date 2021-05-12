import { ASON } from "@ason/assembly";
import { RegExp } from "../regexp";

describe("ason round trip", () => {
  test("ason", () => {
    let a = new RegExp("this is a test", "g");
    let buffer = ASON.serialize(a);
    let b = ASON.deserialize<RegExp>(buffer);
    expect(a.toString()).toBe(b.toString());
    expect(a.flagsString).toBe(b.flagsString);
  });
});
