# Doubly Linked List

## Big O of Doubly Linked List Operations

- Insertion - O(1)
- Removal - O(1)
- Searching - O(_n_)
- Access - O(_n_)

Technically searching is O(_n_/2), but that's still O(_n_). As _n_ grows, it's still insigificant that we're dividing it by two, if we are talking about things like _n_^2 or constant time.

## Recap

- Doubly linked lists are almost identical to singly linked lists, except that there is no additional pointer to previous nodes.
- Doubly linked lists are better than singly linked lists for finding nodes and can be done in half the time.
- However, they do take up more memory considering the extra pointer.

## In what situation would you use a singly linked list over a doubly linked list?

If you need to be able to quickly get both the previous as well as the next element from a given element, then a doubly linked list is best. If you only need to get the next element from a given element, then a singly linked list is good enough.
