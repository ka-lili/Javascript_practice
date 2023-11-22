// Write a function that calculates the Fibonacci sequence up to n numbers.
function fibonacciSequence(n) {
    if (n < 1) {
      return undefined;
    }
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  