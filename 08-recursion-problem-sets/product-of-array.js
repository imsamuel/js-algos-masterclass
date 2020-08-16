// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.

/**
 * Return product of all numbers from a given array.a
 *
 * @param {number[]} nums
 * @return {number}
 */
const productOfArray = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  const num = nums.pop();
  return num * productOfArray(nums);
};
