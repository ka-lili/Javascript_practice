// Write a function that capitalizes the first letter of each word in a sentence.

function capitalizeFirstLetter(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
const myString = "liliane";
const capitalizedFirstLetter = capitalizeFirstLetter(myString);
console.log(capitalizedFirstLetter)