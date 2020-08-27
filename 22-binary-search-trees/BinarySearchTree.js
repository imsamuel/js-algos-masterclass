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
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
