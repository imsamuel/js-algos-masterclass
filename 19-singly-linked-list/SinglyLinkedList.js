class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Append a node.
  // If linked list does not contain any nodes, point the head to the new
  // node.
  push(value) {
    const node = new Node(value);
    if (this.length > 0) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = this.head;
    }

    this.length += 1;
  }

  // Remove and return the node at the end of the linked list.
  // If linked list does not contain any nodes, return null.
  pop() {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      const end = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return end;
    }

    let end = this.head;
    let prev = end;
    while (end.next !== null) {
      prev = end;
      end = end.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length -= 1;
    return end;
  }

  // Remove and return the node at the beginning of the linked list (head).
  shift() {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      const start = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return start;
    }

    const start = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return start;
  }

  // Add a node at the beginning of the linked list.
  unshift(value) {
    const node = new Node(value);
    if (this.length > 0) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = this.head;
    }

    this.length += 1;
  }

  // Get the node at the specified index.
  get(index) {
    if (this.length === 0) {
      return null;
    }

    if (index < 0 || index > this.length - 1) {
      return null;
    }

    let target = this.head;
    for (let curr = 0; curr < index; curr += 1) {
      target = target.next;
    }

    return target;
  }

  // Update the node at the specified index with the given value.
  set(index, value) {
    const node = this.get(index);
    if (node === null) {
      return false;
    }

    node.value = value;
    return true;
  }

  // Insert into the linked list a new node of the given value at the
  // specified index.
  insert(index, value) {
    if (index === 0) {
      this.unshift(value);
      return true;
    }

    const previousNode = this.get(index - 1);
    if (previousNode === null) {
      return false;
    }

    const newNode = new Node(value);
    const temp = previousNode.next;
    newNode.next = temp;
    previousNode.next = newNode;
    this.length += 1;
    return true;
  }

  // Remove and return the node at the specified index.
  remove(index) {
    if (this.length === 0) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const previousNode = this.get(index - 1);
    if (previousNode === null) {
      return null;
    }

    const currentNode = previousNode.next;
    previousNode.next = currentNode.next;
    this.length -= 1;
    return currentNode;
  }

  // Reverse the linked list (in place).
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i += 1) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

class Node {
  // Intialize value and next properties.
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
