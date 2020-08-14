# Recursion

- define what recursion is and how it can be used
- understand the two essential components of a recursive function
- visualize the call stack to better debug and understand recursive functions
- use helper method recursion and pure recursion to solve more difficult problems

## What is recursion?

A **process** (a function in our case) that **calls itself**.

## What is the call stack?

A **stack** data structure.

Anytime a function is invoked, it is placed (pushed) on the top of the call stack.

When JavaScript sees the **return** keyword or when the function ends, the compiler will remove (pop).

## How does the call stack work differently with recursive functions?

Most of the time, we write functions that are pushed onto the call stack and popped off when they return.

However when we write recursive functions and run them, we continuously push new functions onto the call stack.

## How does a recursive function work, and what makes a recursive function?

A recursive function calls itself with a different value each time until it reaches its base case (the condition where recursion ends).

The base case and the recursive case makes a recursive function.

Everytime the function calls itself, it should pass itself a value that results in the function eventually reaching its base case, where it terminates.

## Common Recursion Pitfalls

1. Not having a base case.
2. Not returning in the base case, or not returning a value which allows the function to terminate.
3. Stack overflow, from a function calling itself so many times that the space needed to store the variables and information associated with each call is more than can fit on the stack.

## How can data be persisted through recursive function calls?

1. Recursive helper method

   **What's a recursive helper method and how does it work?**

   A recursive helper method is a recursive method that is called by another (usually) non-recursive method.

   The non-recursive method wraps the piece of data in it's own scope, mutating the piece of data through calling some sort of recursive function, then returning the piece of data when the recursive function returns.

2. Pure recursion

   **Pure Recursion Tips**

   - For arrays, use methods like `slice`, the spread operator, and `concat` that make copies of arrays so you do not mutate them.
   - Strings are immutable so methods like `slice`, `substr`, or `substring` need to be utilized to make copies of strings.
   - To make copies of objects, `Object.assign` or the spread operator need to be used.
