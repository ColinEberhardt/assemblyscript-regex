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

export class Range {
  constructor(public from: i32, public to: i32) {}

  intersection(other: Range): Range | null {
    const lower = i32(Math.max(this.from, other.from));
    const upper = i32(Math.min(this.to, other.to));
    return lower < upper ? new Range(lower, upper) : null;
  }

  offset(value: i32): Range {
    return new Range(this.from + value, this.to + value);
  }

  contains(value: i32): bool {
    return value >= this.from && value <= this.to;
  }
}
