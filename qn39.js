// Write a function that checks if a given value is present in an array.

function isPresent(arr, value) {
    return arr.includes(value);
  }
  const array = ["kim","john","lolo","Gig"]
  const valuePresent = isPresent(array,"kim")
  console.log(valuePresent)