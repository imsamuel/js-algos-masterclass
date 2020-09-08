const fib = (k) => {
  if (k < 3) {
    return 1;
  }

  return fib(k - 1) + fib(k - 2);
};
