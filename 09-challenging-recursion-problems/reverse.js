// Write a recursive function called reverse which accepts a string and
// returns a new string in reverse.

// /**
//  * Return the reverse of a given string.
//  *
//  * @param {string} str
//  * @return {string}
//  */
// const reverse = (str) => {
//   const result = [];
//   const recurse = (chars) => {
//     if (chars.length === 0) {
//       return;
//     }

//     result.push(chars.pop());
//     recurse(chars);
//   };

//   recurse([...str]);
//   return result.join("");
// };

// Colt's solution
const reverse = (str) => {
  if (str.length === 1) {
    return str;
  }

  return reverse(str.slice(1)) + str.charAt(0);
};
