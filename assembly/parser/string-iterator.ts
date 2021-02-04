export class StringIterator {
  current: u32;
  cursor: u32 = 0;

  constructor(private sourceString: string) {
    this.current = this.sourceString.charCodeAt(0);
  }

  lookahead(distance: u32): u32 {
    return this.sourceString.charCodeAt(this.cursor + distance);
  }

  next(): bool {
    this.cursor++;
    if (this.cursor >= u32(this.sourceString.length)) {
      this.current = -1;
      return false;
    }
    this.current = this.sourceString.charCodeAt(this.cursor);
    return true;
  }

  currentAsString(): string {
    return String.fromCharCode(this.current);
  }

  more(): bool {
    return this.cursor < u32(this.sourceString.length);
  }

  copy(): StringIterator {
    const iterator = new StringIterator(this.sourceString);
    iterator.cursor = this.cursor;
    iterator.current = this.current;
    return iterator;
  }
}
