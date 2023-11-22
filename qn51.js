// Write a javascript function that filters out negative numbers from an array.

function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
  }
  const myArray = [-1,-5,7,8,9,-3];
  const filteredArray = filterNegativeNumbers(myArray);
console.log(filteredArray); // [1, 3, 5]

