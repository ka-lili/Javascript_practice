// Write a function that calculates the factorial of a number.

function factorial(num) {
    if (num < 0) {
      return undefined;
    }
    let fact = 1;
    for (let i = num; i > 1; i--) {
      fact *= i;
    }
    return fact;
  }
console.log(factorial(0))  
