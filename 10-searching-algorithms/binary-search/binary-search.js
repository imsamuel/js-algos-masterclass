// Write a function called binarySearch which accepts a sorted array and a
// value and returns the index at which the value exists. Otherwise, returne
// -1.

/**
 * Return the index of the specified target. If not contained in array, return
 * -1.
 *
 * @param {Array<*>} arr An array of sorted values
 * @param {*} target
 * @return {number}
 */
const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (arr[middle] === target) {
      return middle;
    }

    if (arr[middle] < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return -1;
};
