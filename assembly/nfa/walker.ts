import { State } from "./nfa";

export function walker(
  state: State,
  visitor: (state: State) => void,
  visited: State[] = []
): void {
  visitor(state);
  if (visited.includes(state)) return;
  visited.push(state);
  const nextStates = state.reachableStates();
  for (let i = 0; i < nextStates.length; i++) {
    walker(nextStates[i], visitor, visited);
  }
}