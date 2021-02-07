import { State } from "./nfa";

export function walker(
  state: State,
  visitor: (state: State) => void,
  visited: State[] = []
): void {
  if (visited.includes(state)) return;
  visitor(state);
  visited.push(state);
  const nextStates = state.transitions;
  for (let i = 0, len = nextStates.length; i < len; i++) {
    walker(nextStates[i], visitor, visited);
  }
}
