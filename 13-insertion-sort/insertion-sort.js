/**
 * Sort the given array of numbers.
 *
 * @param {number[]} arr
 */
const insertionSort = (arr) => {
  for (let end = 0; end < arr.length - 1; end += 1) {
    let comp = end + 1;
    while (comp - 1 >= 0 && arr[comp] < arr[comp - 1]) {
      const temp = arr[comp - 1];
      arr[comp - 1] = arr[comp];
      arr[comp] = temp;
      comp -= 1;
    }
  }
};
