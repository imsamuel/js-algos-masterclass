// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.
//
// findLongestSubstring('') // 0
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
//
// Time Complexity: O(n)

/**
 * Return the length of the longest substring with all distinct characters.
 *
 * @param {string} str
 * @return {number}
 */
const findLongestSubstring = (str) => {
  const charToCount = {};
  for (let i = 0; i < str.length; i += 1) {
    if (charToCount[str.charAt(i)] !== undefined) {
      charToCount[str.charAt(i)] += 1;
    } else {
      charToCount[str.charAt(i)] = 1;
    }
  }
};
