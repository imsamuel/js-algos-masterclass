// Write a function isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the
// characters in the second string. In other words, the functions should check
// whether the characters in the first string appear somewhere in the second
// string, without their order changing.
//
// Examples:
// isSubsequence('hello', 'hello, world'); // true
// isSubsequence('sing', 'string'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abs', 'acb') // false (order matters)
//
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity: O(n + m)
// Space Complexity - O(1)

/**
 * Returns a boolean based on whether the characters from the first given
 * string form a subsequence in the second.
 *
 * @param {string} target
 * @param {string} str
 * @return {boolean}
 */
const isSubsequence = (target, str) => {
  for (let i = 0, search = 0; i < str.length; i += 1) {
    if (str.charAt(i) === target.charAt(search)) {
      search += 1;
      if (search === target.length) {
        return true;
      }
    }
  }

  return false;
};
