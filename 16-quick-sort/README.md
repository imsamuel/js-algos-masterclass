# Quicksort

## What is quicksort?

Quicksort is a divide-and-conquer algorithm.

It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

The sub-arrays are then sorted recursively.

This can be done in-place, requiring small additional amounts of memory to perform the sorting.

## What is the runtime of quicksort?

On average, quicksort takes O(*n*log*n*) comparisons to sort _n_ items. In the worst case, it makes O(_n_^2) comparisons, though this behavior is rare.

## How should the pivot be chosen?

The runtime of quicksort is affected by the pivot chosen from the given list.

Ideally, the pivot should be chosen so that it's roughly the median value in the data set that you're sorting.

However, for a randomized data set picking any pivot is usually fine.
