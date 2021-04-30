// @ts-ignore
@lazy
export enum MatchResult {
  // a match has occurred - which is a signal to consume a character
  Match,
  // a match failed, abort this regex
  Fail,
  // this state doesn't preform a match
  Ignore,
}
