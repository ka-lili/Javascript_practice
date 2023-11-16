// Write a function that squares each element of an array.
function squareArray(arr) {
    return arr.map(x => x ** 2);
  }
//   example
 const array = [2,3,4,5,6,7];
 const squaredArray = squareArray(array)
 console.log(squaredArray)