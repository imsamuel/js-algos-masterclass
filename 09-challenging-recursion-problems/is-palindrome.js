// Write a recursive function called isPalindrome which returns true if the
// string passed to it is a plaindrome (reads the same forward and backward).
// Otherwise it returns false.

/**
 * Return a boolean based on whether a given string is a palindrome.
 *
 * @param {string} str
 * @return {boolean}
 */
const isPalindrome = (str) => {
  if (str.length < 2) {
    return true;
  }

  if (str.charAt(0) !== str.charAt(str.length - 1)) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
};
