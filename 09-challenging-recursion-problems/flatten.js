// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

/**
 * Returns a flattened array given an array of arrays.
 *
 * @param {Array.<*[]>} x
 * @return {Array.<*>}
 */
const flatten = (x) => {
  const y = [];
  for (let i = 0; i < x.length; i += 1) {
    if (Array.isArray(x[i])) {
      y = y.concat(flatten(x[i]));
    } else {
      y.push(x[i]);
    }
  }
  return y;
};

// Colt's solution
