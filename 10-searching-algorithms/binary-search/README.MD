# Binary Search

## What's binary search?

It is a search algorithm for finding the position of a target value within a **sorted array**.

Binary search compares the target value to the middle element of the array. If they're not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

## What's the runtime of a binary search algorithm?

O(log*n*). With a binary search, you eliminate 1/2 the possible entries each iteration.
