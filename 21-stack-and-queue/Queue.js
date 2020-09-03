class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  // Add an element onto the queue.
  enqueue(value) {
    const newElement = new Element(value);
    if (this.size === 0) {
      this.front = newElement;
      this.back = newElement;
    } else {
      this.back.prev = newElement;
      this.back = newElement;
    }

    this.size += 1;
    return this.size;
  }

  // Remove an element from the queue.
  dequeue() {
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      const frontElement = this.front;
      this.front = null;
      this.back = null;
      this.size = 0;
      return frontElement;
    }

    const frontElement = this.front;
    this.front = frontElement.prev;
    frontElement.prev = null;
    this.size -= 1;
    return frontElement;
  }
}

class Element {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}
