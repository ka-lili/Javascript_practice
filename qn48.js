// Write a function that returns the reverse of an array.


//first method
function reverseArray(arr) {
    return arr.reverse();
  }
  

  //second method
  function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  console.log(reverseArray([1,3,5,6,8]))