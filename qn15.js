// 15.Given an array like this:
// var array = [1,3,4,3,7,8,0,12,19];    
// Create a function to reverse the order of the elements inside the given array.

function reversedArray(arr){
    var myArray = [1,3,4,3,7,8,0,12,19];
    return myArray.reverse(...arr);
}
console.log(reversedArray([1,3,4,3,7,8,0,12,19]))