# Summary

## Big O Notation

**What is Big O notation?**

A mathematical notation that is used to describe the performance or complexity of an algorithm.

**Why is Big O notation useful?**

Big O notation abstracts away constant order differences which can vary from platform, language, and OS, to instead focus on the inherent efficiency of an algorithm and how it scales according to the input size.

## Time Complexity

**What is time complexity?**

The time complexity of an algorithm quantifies the amount of time the algorithm takes to run as a function of the input size.

**Simplifiying algorithm complexities**

When we analyze the efficiency of an algorithm using Big O notation, we are interested only in how the algorithm scales as the input size grows.

Thus, constants and smaller terms are not taken into account as they do not affect how the algorithm behaves, as input sizes grow to infinity.

Discarding constants:

- O(2) ➡️ O(_n_)
- O(500) ➡️ O(1)
- O(13*n^2*) ➡️ O(_n^2_)

Discarding smaller terms:

- O(_n_ + 10) ➡️ O(n)
- O(1000*n* + 50) ➡️ O(_n_)
- O(_n^2_ + 5*n* + 8) ➡️ O(_n^2_)

### Big O Shorthands

1. Arithmetic operations are constant.
2. Variable assignment is constant.
3. Accessing elements in an array or object is constant.
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop.

## Space Complexity

**What is space complexity?**

In algorithm analysis, the space complexity of an algorithm usually refers to its **auxiliary space** - the temporary space required by the algorithm, which excludes the algorithm's input size.

**Rules of Thumb**

- Most primitives (booleans, numbers, `undefined` and `null`) are constant space.
- Strings require O(_n_) space where _n_ is the length of the string.
- Reference types are generally O(_n_), where _n_ is the length for arrays or the number of keys for objects.

## Recap

- To analyze the performance of an algorithm, we use Big O Notation.

- Big O Notation gives us a high level understanding of the time and space complexity of an algorithm

- Big O Notation does not care about precision, it only about general trends linear? quadratic? constant?).

- The time and space complexity (as measured by Big O) depends only on the algorithm itself, and not on the hardware used to run the algorithm.
