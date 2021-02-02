/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegExp, Match } from "..";
import { expectMatch, expectNotMatch, exec } from "../__tests__/utils";

xit("line: 1185 - matches ab{3cd against 'ab{3cd'", () => {
  expect(() => new RegExp("ab{3cd")).toThrow();
});
