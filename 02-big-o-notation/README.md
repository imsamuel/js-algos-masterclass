# Section 2: Big O Notation

![alt text](https://miro.medium.com/max/2544/1*yiyfZodqXNwMouC0-B0Wlg.png)

## What is the need for a system to rate the performance of code?

Imagine we have multiple implementations of the same function.

How can we determine which one is the "best"?

**For example:**

> Write a function that acceps a string input and returns a reversed copy.

There can be multiple solutions to this problem:

```js
const reverse = (s) => {
  let o = "";
  for (let i = s.length - 1; i <= 0; i -= 1) {
    o += s[i];
  }
  return o;
};
```

```js
const reverse = (s) => {
    const o = [];
    for (let i = s.length - 1, j = 0; i >= 0; i -= 1; j += 1) {
        o[j] = s[i];
    }
    return o.join('');
}
```

```js
const reverse = (s) => {
  const o = [];
  for (let i = 0, len = s.length; i <= len; i += 1) {
    o.push(s.charAt(len - i));
  }
  return o.join("");
};
```

How could we determine which solution would be "best" to use?

## What is Big O Notation?

Big O notation allows us to measure the complexity of an algorithm as a relative representation.

It allows us to analyze algorithms in terms of overall efficiency and scalability. It abstracts away constant order differences in efficiency which can vary from platform, language, and operating system to focus on the inherent efficiency of the algorithm and how it varies according to the size of the input.

## Simplifying Algorithm Complexities

When we analyze the efficiency of an algorithm using Big O notation, we are interested only in how the algorithm scales as the input size grows.

Therefore, constants and smaller terms are not taken into account as they do not affect how the algorithm behaves as input sizes grow to infinity.

**Discarding constants:**

- O(2*n*) ➡️ O(_n_)
- O(500) ➡️ O(1)
- O(13*n*^2) ➡️ O(_n_^2)

**Discarding smaller terms:**

- O(_n_ + 10) ➡️ O(n)
- O(1000*n* + 50) ➡️ O(_n_)
- O(_n_^2 + 5*n* + 8) ➡️ O(_n_^2)

## Time Complexity

**What is time complexity?**

The time complexity of an algorithm quantifies the amount of time the algorithm takes to run as a function of the input size.

**Rules of Thumb**

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

## Logarithms

We've encountered some of the most common complexities: O(1), O(_n_), and O(_n_^2).

Sometimes Big O expressions involve more complex mathematical expressions, and one that appears more often than the others is the logarithm.

**What's a logarithm?**

A logarithm is the inverse of exponentiation. Just like how division and multiplication are a pair, logarithms and exponentiation are a pair.

For example, consider the expression log[2]8. What we are trying to derive from this expression is: "2 to what power will result in 8?"

**Who cares?**

- Certain searching algorithms have logarithmic time complexity.
- Efficient sorting algorithms involve logarithms.
- Recursion sometimes involves logarithmic space complexity.

**Rule of Thumb**

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

## Recap

- To analyze the performance of an algorithm, we use Big O Notation.

- Big O Notation gives us a high level understanding of the time and space complexity of an algorithm

- Big O Notation does not care about precision, it only about general trends (linear? quadratic? constant?).

- The time and space complexity (as measured by Big O) depends only on the algorithm itself, and not on the hardware used to run the algorithm.
