# Binary Search Trees

## What is a tree?

A data structure that consists of nodes in a parent-child relationship.

It contains a **single** root node, and branches out downwards. Children nodes cannot point to parent nodes, and nodes may not point to their siblings.

Unlike linked lists, trees may be non-linear (can have more than one pathway through a tree).

## Tree Terminology

- Root - the top node in a tree
- Child - a node directly connected to another node when moving away from the Root
- Parent - the conversion notion of a child
- Siblings - a group of nodes with the same parent
- Leaf - a node with no children
- Edge - the connection between one node and another

## Uses For Trees

- HTML DOM - parent-child relationships between the HTML elements
- Network Routing
- Abstract Syntax Tree - a way of describing the syntax of a programming language, using a tree structure
- Artificial Intelligence - e.g. the simplest example: the minimax tree (decision tree)
- Folders in an operating system
- Computer File Systems
- JSON

## Introduction to Binary Trees

A binary tree is a special type of tree.

Binary trees may only have up to two children per node.

**Why learn about binary trees?**

Why learn about binary trees? And not ternary trees, trees of nodes which may have up to 4 children, etc.

This is because binary trees have some special properties that make them easier to navigate.

## Binary Search Trees

**What is a binary search tree?**

A binary search tree is a special case of a binary tree.

Binary search trees are sorted in a particular way, they are kept in an order.

**What are BSTs used for?**

BSTs are used to store data that can be compared and sorted. Classically, numbers will be used.

**What is the "special" property of BSTs?**

If we take any node (e.g. the root), all numbers that are less than the node, are located on the left of it. All numbers that are greater than the node are located to its right.

## Binary Search Trees Recap

- Every parent node has at most **two** children
- Every node to the left of a parent node is **always less** than the parent
- Every node to the right of a parent node is **always greater** than the parent

## Why are binary search trees used?

The way the nodes in a BST are sorted makes it simple and quick to query for nodes (as compared to looking for a node in an unsorted tree).

## Big O of BSTs

- Insertion - O(log*n*)
- Searching - O(log*n*)

If you double the number of nodes in the BST, you only increase the number of steps to insert/find by 1. (The depth of the BST merely grows by 1)

2x number of nodes: 1 extra step
4x number of nodes: 2 extra steps
8x number of nodes: 3 extra steps

However, O(log*n*) is not guaranteed for searching/inserting in a BST. For example, a BST that only branches towards it's right (one-sided tree), will have a O(_n_) runtime for searches and insertions.

The easy fix to a linkedlist-like BST would be to re-structure the BST to not end up like a linked list, possibly moving one of the nodes in the middle of the tree to be it's root.
