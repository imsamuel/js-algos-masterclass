# Analyzing Performance of Arrays and Objects

- understand how objects and arrrays work through the lends of big o
- explain why adding elements to the begining of an array is costly
- compare and constrast the runtime for arrays and objects, as well as built-in methods

## Objects

**Big O of Objects**

- Insertion - O(1)
- Removal - O(1)
- Searching - O(_n_)
- Access - O(1)

**Big O of Object Methods**

- Object.keys - O(_n_)
- Object.values - O(_n_)
- Object.entries - O(_n_)
- hasOwnProperty - O(1)

## Arrays

**Big O of Arrays**

- Insertion - It depends...
- Removal - It depends...
- Searching - O(_n_)
- Access - O(1)

**Inserting and Removing from Arrays**

Why is `Array.push` faster than `Array.unshift`? and why is `Array.pop` faster than `Array.shift`?

`unshift()` and `shift()` has to re-index the array while `push` and `pop()` don't.

`pop` simply removes the last element in the array - therefore, the elements do not move, so only the `length` property of the array has to be updated.

`shift` removes the first element in the array. This requires a re-indexing of all elements in the array, so that `[0]` becomes `[1]` and so on.

**Big O of Array Operations**

- push - O(1)
- pop - O(1)
- shift - O(_n_)
- unshift - O(_n_)
- concat - O(_n_)
- slice - O(_n_)
- splice - O(_n_)
- sort - O(_n_ \* log _n_)
- forEach/map/filter/reduce/etc. - O(_n_)
