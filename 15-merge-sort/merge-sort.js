const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
};

/**
 * Merge two array of numbers in ascending order.
 *
 * @param {number[]} x
 * @param {number[]} y
 */
const merge = (x, y) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < x.length && j < y.length) {
    if (x[i] <= y[j]) {
      result.push(x[i]);
      i += 1;
    } else {
      result.push(y[j]);
      j += 1;
    }
  }

  while (i < x.length) {
    result.push(x[i]);
    i += 1;
  }

  while (j < y.length) {
    result.push(y[j]);
    j += 1;
  }

  return result;
};
