// Write a function that returns the first n elements of an array.
function getFirstNElements(arr, n) {
    return arr.slice(0, n);
  }
  const numbers = [1, 2, 3, 4, 5];
  const firstThreeNumbers = getFirstNElements(numbers, 3);
  console.log(firstThreeNumbers); // [1, 2, 3]
    