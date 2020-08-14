// Write a function called averagePair. Given a sorted array of integers and a
// target average, determine if there is a pair of values in the array where
// the average of the pair equals the target average. There may be more than
// one pair that matches the average target.
//
// Bonus Contraints:
// Time: O(n)
// Space: O(1)
//
// Sample Input:
// averagePair([1, 2, 3], 2.5) // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
// averagePair([], 4) // false

/**
 * Return a boolean based on whether the given array contains a pair of
 * numbers which average equals to the specified target.
 *
 * @param {number[]} nums A sorted array of integers
 * @param {number} avg The target average
 * @return {boolean}
 */
const averagePair = (nums, avg) => {
  if (nums.length < 2) {
    return false;
  }

  let low = 0;
  let high = nums.length - 1;
  while (high > low) {
    const currAvg = (nums[low] + nums[high]) / 2;
    if (currAvg === avg) {
      return true;
    }

    if (currAvg > avg) {
      high -= 1;
    } else {
      low += 1;
    }
  }

  return false;
};
