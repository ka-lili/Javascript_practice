// Create a function that recieves an array of numbers and return the average of the numbers

function getAverage(arr){
    let total= 0;
    for (i = 0; i<arr.length; i++){
        total += arr[i];
    }
    console.log("total= ", total);
    avg = total/arr.length;
    console.log("average = ", avg)
}
//example
let s = [9,1,2,4,5];
getAverage(s);