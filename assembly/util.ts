export function last<T>(arr: T[]): T {
  return unchecked(arr[arr.length - 1]);
}

export function first<T>(arr: T[]): T {
  return unchecked(arr[0]);
}

export function replaceAtIndex<T>(arr: T[], index: u32, item: T): T[] {
  let res = arr.slice(0);
  unchecked((res[index] = item));
  return res;
}
