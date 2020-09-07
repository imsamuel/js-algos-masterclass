class PriorityQueue {
  // Initialize `values` property.
  constructor() {
    this.values = [];
  }

  // Queue a new entry onto the Priority Queue.
  enqueue(value, priority) {
    const newEntry = new Entry(value, priority);
    this.values.push(newEntry);
    let curr = this.values.length - 1;
    let parent = Math.floor((curr - 1) / 2);
    while (
      curr > 0 &&
      this.values[parent].priority > this.values[curr].priority
    ) {
      const temp = this.values[parent];
      this.values[parent] = this.values[curr];
      this.values[curr] = temp;
      curr = parent;
      parent = Math.floor((curr - 1) / 2);
    }
  }

  // Remove the next entry - the root (entry with the highest priority).
  dequeue() {
    const [next] = this.values;
    this.values[0] = this.values.pop();
    let childLeft, childRight;
    let curr = 0;
    while (true) {
      let childLeftIdx = 2 * curr + 1;
      let childRightIdx = childLeft + 1;
      let swap = null;
      if (childLeftIdx < this.values.length) {
        childLeft = this.values[childLeftIdx];
        if (childLeft.priority > this.values[curr].priority) {
          swap = childLeft;
        }

        if (childRightIdx < this.values.length) {
          childRight = this.values[childRight];
          if (
            (swap === null &&
              childRight.priority < this.values[curr].priority) ||
            (swap !== null && childRight < childLeft.priority)
          ) {
            swap = childRightIdx;
          }
        }

        if (swap === null) break;
        const temp = this.values[curr];
        this.values[curr] = this.values[swap];
        this.values[swap] = temp;
        curr = swap;
      }
    }
  }
}

class Entry {
  // Initialize `value` and `priority` properties.
  constructor(value, priority) {
    this.value = value;
    this.priority = priority; // smaller value = higher priority
  }
}
