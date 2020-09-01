# Binary Heap

## What is a Binary Heap?

A Binary Heap is a heap data structure that takes the form of a Binary Tree.

Heaps where the parent key is greater than or equal to (≥) the child keys are called _max-heaps_; those where it is less than or equal to (≤) are called _min-heaps_.

## What is the difference between a (Min) Binary Heap and a Binary Search Tree?

The element contained by the root node in a Min Heap is lesser than or equal to the elements of the node's children, whereas for each node _X_ of a Binary Search Tree, all nodes in its left subtree have a value less than _X_.

## Rules of a Max Heap

- Each parent has at most two child nodes.
- The element contained by each parent node is greater than the elements contained by their child nodes.
- A Binary Heap is compact as possible - all the children of each node are as full as they can be and left children are filled out first.

## Why be aware of Binary Heaps?

Binary Heaps are used to implement **Priority Queues** (a commonly used data structure) and made use of in **graph traversal** algorithms.

## What is a Priority Queue?

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

## How should a Priority Queue be implemented?

**A Naive Version**

Using a list. Then, iterating over the entire list to find the element with the highest priority.

## Big O Of Binary Heaps

Insertion - O(log*n*)
Removal - O(long*n*)
Search - O(_n_)

## Recap

- Binary Heaps are useful data structures for sorting, and implementing other data structures like priority queues.
- Binary Heaps are either Max Heaps or Min Heaps with parents either being smaller or larger than their children.
- With just a little bit of math, we can represent heaps using arrays.
