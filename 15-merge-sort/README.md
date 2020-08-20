# Merge Sort

## The idea behind merge sort

- A combination of two things - merging and sorting
- Exploits the fact that arrays of 0 or 1 element(s) are always sorted
- Works be decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

## What is the runtime of merge sort?

The best case, average case, and worst case, is O(*n*log*n*) - O(log*n*) decompositions and O(_n_) comparisons per decomposition.

Its space complexity is O(_n_) - when size of the input array increases, we have to use more space.
