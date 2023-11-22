// Write a function that calculates the sum of the even numbers in an array.
function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  console.log( sumOfEvenNumbers([1,4,6,7,9]))