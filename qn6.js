// Create a function that recieves an array and returns the greatest value inside that array

function findMaxValue(arr) {
    return Math.max(...arr); // Spread operator expands the array elements
  }
  
  // Example
  const myArray = [3,4,7,56,2];
  const result = findMaxValue(myArray);
  console.log(findMaxValue([3,4,6,89]));
  