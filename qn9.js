// Create a function that combines two arrays into one single array.
//    Use the following arrays:
//    arrayOne = [a,b,c,d]
//    arrayTwo = [e,f,g]
function combinedArrays(arrayOne, arrayTwo) {
    return arrayOne.concat(arrayTwo);
}

const arrayOne = ['a', 'b', 'c', 'd'];
const arrayTwo = ['e', 'f', 'g'];
const result = combinedArrays(arrayOne, arrayTwo);
console.log(result);