// Write a function that finds the intersection of two arrays.
function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
  }
  