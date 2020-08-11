# Divide and Conquer

**What?**

A pattern which involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

**Why?**

This pattern can tremendously decrease time complexity.

**Example Problem**

> Given a **sorted** array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

```js
search([1, 2, 3, 4, 5, 6], 4); // 3
search([1, 2, 3, 4, 5, 6], 6); // 5
search([1, 2, 3, 4, 5, 6], 11); // -1
```

Naive approach:

```js
const search = (arr, val) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
};
```

Time complexity: O(n)

Faster approach, using a searching algorithm called binary search:

```js
const search = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currElem = array[middle];
    if (array[middle] === val) {
      return middle;
    }

    if (array[middle] > val) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }

  return -1;
};
```

Time Complexity: O(log(_n_))
