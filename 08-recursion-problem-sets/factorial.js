// Write a function factorial which accepts a number and returns the factorial
// of that number. A factorial is the product of an integer and all the
// integers below it, e.g. factorial four (4!) is equal to 24, because
// 4 * 3 * 2 * 1 equals 24. (factorial zero 0! is always 1)

/**
 * Return the factorial of a given integer.
 *
 * @param {number} k
 * @return {number}
 */
const factorial = (k) => {
  if (k === 0) {
    return 1;
  }

  if (k === 1) {
    return k;
  }

  return k * factorial(k - 1);
};
