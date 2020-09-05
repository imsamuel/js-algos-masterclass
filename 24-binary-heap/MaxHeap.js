// Using an array to model a Binary Heap
// For any index of an array n...
// The left child is stored at 2n + 1
// The right child is at 2n + 2

class MaxHeap {
  constructor() {
    this.values = [];
  }

  // Inserts a given value into the Max Heap.
  insert(value) {
    this.values.push(value);
    let curr = this.values.length - 1;
    let parent = Math.floor((curr - 1) / 2);
    while (curr > 0 && this.values[curr] > this.values[parent]) {
      const temp = this.values[parent];
      this.values[parent] = this.values[curr];
      this.values[curr] = temp;
      curr = parent;
      parent = Math.floor((curr - 1) / 2);
    }
  }

  // Remove the max value from the Max Heap (element contained by root node).
  extractMax() {
    const [max] = this.values;
    this.values[0] = this.values.pop();
    let childLeft, childRight;
    let curr = 0;
    while (true) {
      let childLeftIdx = 2 * curr + 1;
      let childRightIdx = childLeft + 1;
      let swap = null;
      if (childLeftIdx < this.values.length) {
        childLeft = this.values[childLeftIdx];
        if (childLeft > this.values[curr]) {
          swap = childLeft;
        }

        if (childRightIdx < this.values.length) {
          childRight = this.values[childRight];
          if (
            (swap === null && childRight > this.values[curr]) ||
            (swap === null && childRight > childLeft)
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

    return max;
  }
}
