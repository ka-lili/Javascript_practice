// Create a function that recieves an array and returns the smallest number from that array
function findMinValue(arr) {
    return Math.min(...arr); // Spread operator expands the array elements
  }
  
  // Example
  const myArray = [3,4,7,56,0];
  
  const result = findMinValue(myArray);
  console.log(result);