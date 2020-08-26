// Defines a stack data structure.
class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }

  // Add a value onto the stack.
  push(value) {
    const newEntry = new Entry(value);
    if (this.last === null) {
      this.last = newEntry;
    } else {
      newEntry.prev = this.last;
      this.last = newEntry;
    }

    this.size += 1;
    return this.size;
  }

  // Remove a value from the stack.
  pop() {
    if (this.last === null) {
      return null;
    }

    const lastEntry = this.last;
    this.last = lastEntry.prev;
    lastEntry.prev = null;
    this.size -= 1;
    return lastEntry;
  }
}

// Defines the smallest unit of a stack.
class Entry {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}
