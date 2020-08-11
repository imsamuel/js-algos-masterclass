# The Sliding Window Pattern

**What is Sliding Window?**

This pattern involves creating a **window** which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created).

**What are the benefits?**

This pattern is very useful for keeping track of a subset of data in a larger set of data (for e.g. an array or string).

**Example Problem**

> Write a function called `maxSubarraySum` which accepts an array of integers and a number called **n**. The function should calculate the maximum sum of **n** consecutive elements in the array.

```js
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
```

Naive approach:

```js
const maxSubarraySum = (nums, k) => {
  if (k > nums.length) {
    return null;
  }

  let max = -Infinity;
  for (let i = 0; i < nums.length - num + 1; i += 1) {
    let temp = 0;
    for (let j = 0; j < num; j += 1) {
      temp += nums[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
};
```

Time Complexity: O(_n_^2)
Space Complexity: O(1)

Faster approach:

```js
const maxSubArraySum = (nums, k) => {
  if (k > nums.length) {
    return null;
  }

  let runningSum = 0;
  for (let i = 0; i < k; i += 1) {
    runningSum += nums[i];
  }

  let max = runningSum;
  for (let j = k; j < nums.length; j += 1) {
    runningSum = runningSum - nums[j - k] + nums[j];
    if (runningSum > max) {
      max = runningSum;
    }
  }

  return max;
};
```

Time Complexity: O(_n_)
Space Complexity: O(1)
