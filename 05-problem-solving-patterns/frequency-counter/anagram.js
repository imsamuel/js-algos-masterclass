// Given two strings, write a function to determine if the second string is an
// anagram of the first. An anagram is a word, phrase, or name formed by
// rearranging the letters of another, such as cinema, formed from iceman.
//
// Assumptions: Won't have numbers/spaces/special characters and strings will
//              be lower-cased.

// to run in browser

/**
 * Return true if second given string is an anagram of the first.
 *
 * @param {string} str1
 * @param {string} str2
 */
const isAnagram = (str1, str2) => {
  if (str2.length !== str1.length) {
    return false;
  }

  const charToCount = {};
  Array.from(str1, (char) => {
    if (charToCount[char] !== undefined) {
      charToCount[char] += 1;
    } else {
      charToCount[char] = 1;
    }
  });

  for (let i = 0; i < str2.length; i += 1) {
    const char = str2.charAt(i);
    if (charToCount[char] === undefined || charToCount[char] === 0) {
      return false;
    }

    charToCount[char] -= 1;
  }

  return true;
};

console.assert(isAnagram("", "") === true);
console.assert(isAnagram("aaz", "zza") === false);
console.assert(isAnagram("anagram", "nagaram") === true);
console.assert(isAnagram("rat", "car") === false);
console.assert(isAnagram("awesome", "awesom") === false);
console.assert(isAnagram("qwerty", "qeywrt") === true);
console.assert(isAnagram("texttwisttime", "timetwisttext") === true);
