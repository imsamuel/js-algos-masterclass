# Singly Linked List

## What is a linked list?

A linked list is a data structure that contains a **head**, a **tail**, and a **length** property.

A linked list is a collection of **nodes** - each node contains a piece of **data** and a **pointer** to the next node or `null`.

## Comparing linked lists to arrays

**Linked Lists**

- Do not have indices
- Connected via nodes with a **next** pointer
- Random access is not allowed

**Arrays**

- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

## Runtime of Singly Linked List Operations

- Insertion - O(1)

ASSUMES THAT YOU ALREADY HAVE THE POINTER TO THAT NODE. In other words, the problem is stated: "\*given node at X, what is the code to insert after this node?\*\*

This separates the linked list from the array because inserting in the middle of the array is a O(_n_) operation, requiring the rest of the elements to be re-indexed.

- Removal - O(1) or O(_n_)

If removing from the beginning of the linked list, you're simply chopping off the first node and pointing the head to the node that comes after it.

However, if you are removing from the end, you're going to need to get a hold of the second last node, which requires you to make _n_ - 1 iterations (where _n_ is the number of nodes the linked list has).

- Searching - O(_n_)

For clarification, searching BY VALUE. No explanation needed.

- Access - O(_n_).

Linked lists do not provide random access unlike arrays, to get a node at position _k_, the list has to be traversed from the first node to the node at position _k_.

## Recap

- Singly linked lists are an excellent alternative to arrays when insertiona and deletion at the beginning are frequently required.

- Arrays contain a built-in index whereas linked lists do not.

- The idea of a list data structure that consists of nodes is the foundation for other data structures like stacks and queues.
