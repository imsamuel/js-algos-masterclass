// Write a function called sameFrequency. Given two positive integers, find
// out if the two numbers have the same frequency of digits.
//
// Your solution MUST have the following complexities:
// Time: O(n)
//
// Sample Input:
// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false

/**
 * Return a boolean on whether x and y have the same frequency of digits.
 *
 * @param {number} x A positive integer.
 * @param {number} y A positive integer.
 * @return {boolean} Whether x and y have the same frequency of digits.
 */
const sameFrequency = (x, y) => {
  const xStr = x.toString();
  const yStr = y.toString();
  if (yStr.length !== xStr.length) {
    return false;
  }

  const xCharToCount = {};
  Array.from(xStr, (char) => {
    if (xCharToCount[char] !== undefined) {
      xCharToCount[char] += 1;
    } else {
      xCharToCount[char] = 1;
    }
  });

  for (let i = 0; i < yStr.length; i += 1) {
    const char = yStr[i];
    if (xCharToCount[char] === undefined || xCharToCount[char] === 0) {
      return false;
    }

    xCharToCount[char] -= 1;
  }

  return true;
};
