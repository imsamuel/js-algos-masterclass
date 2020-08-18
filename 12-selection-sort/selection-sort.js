/**
 * Sort the given array of numbers.
 *
 * @param {number[]} nums
 */
const selectionSort = (nums) => {
  for (let start = 0; start < nums.length - 1; start += 1) {
    for (next = start + 1, min = start; next < nums.length; next += 1) {
      if (nums[next] < nums[min]) {
        min = next;
      }
    }

    if (min !== start) {
      const temp = nums[start];
      nums[start] = nums[min];
      nums[min] = temp;
    }
  }
};

// Selection Sort Pseudocode
// 1. Store the first element as the smallest value you've seen so far.
// 2. Compare this item to the next item in the array until you find a smaller
//    number.
// 3. If a smaller number is found, designate that smaller number to be the
//    new "minimum" and continue until the end of the array.
// 4. If the "minimum" is not the value (index) you initially began with, swap
//    the two values.
