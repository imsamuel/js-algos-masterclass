# Stacks and Queues

## What is a stack?

A collection of data that needs to abide by the LIFO principle (last-in-first-out) - the last element added to the stack will be the first element removed from the stack.

## How is a stack used?

Think about a stack of plates, or a stack of markers, or a stack of ...**anything**.

As you pile it up, the last thing (or topmost thing) is what gets removed first.

## We've seen this before!

Learning about the **call stack** in the section about recursion.

## Where stacks are used

- Managing function invocations
- Undo/redo actions (e.g. Ctrl+Z)
- Routing - React's `history` object is treated like a stack!)

## Big O of stacks

A stack data structure prioritizes insertion and removal, both have to be constant time operations.

- Insertion - O(1)
- Removal - O(1)
- Searching - O(_n_)
- Access - O(_n_)

## Stacks Recap

- Stacks are a LIFO data structure where the last value in is always the first one out.
- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
- They are not a built-in data structure in JavaScript, but are relatively simple to implement.

## Why use a stack/queue over an array if you want a LIFO/FIFO data structure?

Because they help manage your data in a more particular way than arrays and lists.

Queue is first in, first out (FIFO).
Stack is last in, first out (LIFO).

Arrays and lists are random access. They are very flexible and also easily corruptible.

## What is a queue?

A FIFO data structure - e.g. a queue at DisneyLand. The first person that has entered the queue, should be the first that leaves the queue (assuming nobody cuts the queue).

## How do we use queues in programming?

- Background tasks
- Uploading/downloading resources
- Printing/task processing - if 20 people print notes on the night before the exam, the first person to have submitted their print request should be the first to receive the printed notes.

## Big O of Queue

- Insertion - O(1)
- Removal - O(1)
- Searching - O(_n_)
- Access - O(_n_)

## Queues Recap

- Queues are a FIFO data structure, all elements are first in first out.
- Queues are useful for processing tasks and are foundational for more complex data structures.
- Insertion and removal should be done in O(1).
