/**
 * Return the number of occurences of the specified pattern from the given
 * string.
 *
 * @param {string} str
 * @param {string} pattern
 * @return {number}
 */
const stringSearch = (str, pattern) => {
  let count = 0;
  for (let i = 0, j; i < str.length; ) {
    if (str.charAt(i) === pattern.charAt(0)) {
      for (j = i + 1, k = 1; k < pattern.length; j += 1, k += 1) {
        if (str.charAt(j) !== pattern.charAt(k)) {
          break;
        }
      }

      if (k === pattern.length) {
        count += 1;
        i = j;
      } else {
        i = j - 1;
      }
    } else {
      i += 1;
    }
  }

  return count;
};
