# Dynamic Programming

## What is dynamic programming?

**Dynamic programming** is both a [mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization) method and a computer programming method.

It is a method for solving a problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems **just once**, and storing their solutions.

## When can dynamic programming be applied?

Dynamic programming may be applied to problems with optimal substructure and overlapping subproblems.

## Overlapping Subproblems

**What is "overlapping subproblems"?**

A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times.

**Example of a problem with overlapping subproblems**

The **Fibonnaci sequence**. To derive `fib(5)`, `fib(4)` has to be added to `fib(3)`. To derive `fib(4)`, `fib(3)` has to be added to `fib(2)`, so on and so forth.

As you can see, to derive `fib(5)`, `fib(3)` has to be calculated more than once. The Fibonnaci sequence is a problem with **overlapping** subproblems.

**Example of a problem with non-overlapping subproblems**

Mergesort. A different array is sorted array `mergesort` is called, so mergesort is a problem with subproblems that do not overlap.

(This structure often leads itself to the _divide-and-conquer_ pattern)

## Optimal Substructure

**What is "optimal substructure"?**

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

**Example of a problem with optimal substructure**

A function `shortestPath(u, v)` (where `u` and `v` are vertices on a graph) which **returns the shortest path** to reach `v` from `u`, and **not a sub-optimal path**.

Basically, an algorithm which not only solves a problem, but is the optimal solution to the problem.

## Memoization, a Top-Down Approach

Using dynamic programming in the calculation of the _nth_ member of the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence) improves its performance greatly. Here is a naive implementation, based directly on the mathematical definition:

```js
const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
```

Notice that if we call, say, `fib(5)`, we produce a call tree that calls the function on the same value many different times:

1. `fib(5)`
2. `fib(4) + fib(3)`
3. `(fib(3) + fib(2)) + (fib(2) + fib(1))`
4. `((fib(2) + fib(1)) + (fib(1) + fib(0))) + ((fib(1) + fib(0)) + fib(1))`
5. `(((fib(1) + fib(0)) + fib(1)) + (fib(1) + fib(0))) + ((fib(1) + fib(0)) + fib(1))`

In practice, `fib(2)` was calculated three times from scratch. In larger examples, many more values of `fib`, or _subproblems_, are recalculated, leading to ane exponential time algorithm (O(2^_n_)).

Now, suppose we have a simple [map](https://en.wikipedia.org/wiki/Associative_array) object, _m_, which maps each value of `fib` that has already been calculated to its result, and we modify our function to use and update it. The resulting function requires only O(_n_) time instead of exponential time (but requires O(_n_) space):

```js
const results = [0, 1];
const fib = (n) => {
  if (results[n] === undefined) {
    results[n] = fib(n - 1) + fib(n - 2);
  }

  return results[n];
};
```

This technique of saving values that have already been calculated is called _[memoization]_(https://en.wikipedia.org/wiki/Memoization) (storing the results of function calls and returning the cached result when the same inputs occur again).

This is the top-down approach, since we first break the problem into subproblems and thne calculate and store values.

## Tabulation, a Bottom-Up Approach

**What is tabulation?**

Storing the result of a previous result in a "table" (usually an array is used).

Tabulation is usually performed using iteration, and better **space complexity** may be achieved with it.

```js
const = fib_table(n) => {
    if (n <= 2) {
        return 1;
    }

    const results = [0, 1, 1];
    for (let i = 3; i <= n; i += 1) {
        results[i] = results[i - 1] + results[i - 2];
    }

    return results[n];
}
```

Solving the Fibonacci problem using tabulation offers an algorithm of O(_n_) runtime and O(1) space complexity.

## Tabulation vs Memoization

First things first, tabulation is the typical technique for dynamic programming.

When you solve a dynamic programming problem using tabulation, you solve the problem **"bottom up"**, i.e., by solving all related subproblems first, typically by filling up an _n_-dimensional table. Based on the results in the table, the solution to the "top"/original problem is then computed.

If you use memoization to solve the problem you do it by maintaining a map of already solved subproblems. You do it **"top-down"** in the sense that you solve the "top" problem first (which typically recurses down to solve the subproblems).

- If all subproblems must be solved at least once, a bottom-up dynamic-programming algorithm usually outperforms a top-down memoized algorithm by a constant factor.

  - No overhead for recursion and less overhead for maintaining table.

  - There are some problems for which the regular pattern of table accesses in the dynamic-programming algorithm can be exploited to reduce the time or space requirements even further.

- If some subproblems in the subproblem space need not be solved at all, the memoized solution has the advantage of solving only those subproblems that are definitely required.
