// Write a function called linearSearch which accepts an array and a value,
// and returns the index at which the value exists. If the value does not
// exist in the array, return -1.
//
// (Don't use indexOf to implement this function)

/**
 * Return the index of the specified target from an array of numbers. If it
 * does not exist, return -1.
 *
 * @param {*} values
 * @param {*} target
 * @return {number}
 */
const linearSearch = (values, target) => {
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] === target) {
      return i;
    }
  }

  return -1;
};
