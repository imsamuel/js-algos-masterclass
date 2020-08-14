// Implement a function called, areThereDuplicates which accepts a a variable
// number of arguments, and checks whether there are any duplicates among the
// arguments passed in. You can solve this using the frequency counter
// patern OR the multiple pointers pattern.
//
// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 3, ) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
//
// Restrictions:
// Time - O(n)
// Space - O(n)
//
// Bonus:
// Time - O(nlogn)
// Space - O(1)

/**
 * Return a boolean based on whether duplicate arguments were passed to it.
 *
 * @param  {...any} args
 * @return {boolean} Whether duplicate arguments were passed
 */
const areThereDuplicates = (...args) => {
  const argToCount = {};
  args.forEach((arg) => {
    if (argToCount[arg] !== undefined) {
      argToCount[arg] += 1;
      if (argToCount[arg] > 1) {
        return true;
      }
    } else {
      argToCount[arg] = 1;
    }
  });

  return false;
};
