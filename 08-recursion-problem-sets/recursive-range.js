// Write a function called recursiveRange which acceps a number and adds up
// all the numbers from 0 to the number passed to the function.

/**
 * Return the sum of all numbers from 0 to k (k has to be > 0).
 *
 * @param {number} k
 * @return {number}
 */
const recursiveRange = (k) => {
  if (k === 1) {
    return 1;
  }

  return k + recursiveRange(k - 1);
};
