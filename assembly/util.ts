export function last<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

export function first<T>(arr: T[]): T {
  return arr[0];
}

export function toArray<T>(item: T): T[] {
  const arr = new Array<T>();
  arr.push(item);
  return arr;
}