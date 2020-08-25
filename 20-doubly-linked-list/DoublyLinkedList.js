// Defines a doubly linked list.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Append a new node to the list.
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;
    return true;
  }

  // Remove and return the node at the end of the list.
  pop() {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      const lastNode = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return lastNode;
    }

    const lastNode = this.tail;
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length -= 1;
    lastNode.prev = null;
    return lastNode;
  }

  // Remove and return the node at the beginning of the list.
  shift() {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      const firstNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return firstNode;
    }

    const firstNode = this.head;
    this.head.next.prev = null;
    this.head = this.head.next;
    this.length -= 1;
    firstNode.next = null;
    return firstNode;
  }

  // Add a node to the beginning of the list.
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return true;
  }

  // Return the node at the specified index.
  get(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }

    if (index <= (this.length - 1) / 2) {
      let targetNode = this.head;
      let count = 0;
      while (count < index) {
        targetNode = targetNode.next;
        count += 1;
      }

      return targetNode;
    } else {
      let targetNode = this.tail;
      let count = this.length - 1;
      while (count > index) {
        targetNode = targetNode.prev;
        count -= 1;
      }

      return targetNode;
    }
  }

  // Update the node at the specified index with the given value.
  set(index, value) {
    const targetNode = this.get(index);
    if (targetNode === null) {
      return false;
    }

    targetNode.value = value;
    return true;
  }

  // Insert a new node at the specified index.
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const prevNode = this.get(index - 1);
    if (prevNode === null) {
      return false;
    }

    const newNode = new Node(value);
    const currNode = prevNode.next;
    newNode.next = currNode;
    currNode.prev = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    this.length += 1;
    return true;
  }

  // Remove the node at the specified index.
  remove(index) {
    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const currNode = this.get(index);
    if (currNode === null) {
      return null;
    }

    const prevNode = currNode.prev;
    const nextNode = currNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    currNode.prev = null;
    currNode.next = null;
    this.length -= 1;
    return currNode;
  }
}

// Defines a node of a doubly linked list.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
