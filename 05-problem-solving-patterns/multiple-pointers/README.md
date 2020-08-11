# Multiple Pointers Pattern

**What?**

Creating **pointers** or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition.

**Why?**

**Very** efficient for solving prolems with minimal space complexity as well.

**Example Problem**

Write a function called `sumZero` which accepts a **sorted** array of integers. The function should find the **first** pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```js
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

A naive solution:

```js
const sumZero = (nums) => {
  for (let i = 0; i < nums.length; i += 1) {
    const comparee = nums[i];
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + comparee === 0) {
        return [comparee, nums[j]];
      }
    }
  }
};
```

Time Complexity: O(_n_^2)
Space Complexity: O(1)

Solution using two pointers:

```js
const sumZero = (nums) => {
  let low = 0;
  let high = nums.length - 1;
  while (high > low) {
    const sum = nums[low] + nums[high];
    if (sum === 0) {
      return [nums[low], nums[high]];
    }

    if (sum > 0) {
      high -= 1;
    } else {
      low += 1;
    }
  }

  return undefined; // explicitly return to show it's on purpose
};
```

Time Complexity: O(_n_) - As the size of input _n_ increases, the run time of `sumZero` increases linearly.

Space Complexity: O(1)
