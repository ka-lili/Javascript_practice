// Write a function that finds the median of an array of numbers.
function calculateMedian(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
      return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
      return sortedArr[middleIndex];
    }
  }
console.log(calculateMedian([1,3,5,9,8,9,6]))  