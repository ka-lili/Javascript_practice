// Write a function that removes duplicates from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
console.log(removeDuplicates([1,1,3,4,5,6]))  