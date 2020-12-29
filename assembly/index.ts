import { Regex } from "./regex";

export function firstMatch(regex: string, word: string): string {
  const regexObj = new Regex(regex);
  const match = regexObj.exec(word);
  if (match != null) {
    return match.value;
  }
  return "";
}
