class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a given value into the BST.
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return true;
    }

    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) {
        return false;
      }

      if (currentNode.value > value) {
        if (currentNode.left === null) {
          currentNode.left = new Node(value);
          return true;
        }

        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = new Node(value);
          return true;
        }

        currentNode = currentNode.right;
      }
    }
  }

  // Determine whether a value is contained by the BST.
  find(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  BFS() {
    const visited = [];
    const queue = new Queue();
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    queue.enqueue(currentNode);
    while (queue.size > 0) {
      currentNode = queue.dequeue();
      visited.push(currentNode.value);
      if (currentNode.left !== null) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.enqueue(currentNode.right);
      }
    }

    return visited;
  }

  DFSPreOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node === null) {
        return;
      }

      visited.push(node.value);
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
    return visited;
  }

  DFSPostOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      visited.push(node.value);
    };

    traverse(this.root);
    return visited;
  }

  DFSInOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      visited.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return visited;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newElement = new QueueElement(value);
    if (this.size === 0) {
      this.first = newElement;
      this.last = newElement;
    } else {
      this.last.next = newElement;
      this.last = newElement;
    }

    this.size += 1;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      const firstElement = this.first;
      this.first = null;
      this.last = null;
      this.size = 0;
      return firstElement.value;
    }

    const firstElement = this.first;
    this.first = firstElement.next;
    firstElement.next = null;
    this.size -= 1;
    return firstElement.value;
  }
}

class QueueElement {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
