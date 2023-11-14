// Create a function that displays multiples of 5
function multiplesOfFive(){
    for(let i=5;i%5===0; i +=5){
    console.log(i)}
}
multiplesOfFive();

// Create a function that counts the number of characters that make up a string.
// N.B: Add conditions that will make sure that spaces will not be counted in the number of characters.
// Example:
// For the string: “Hello World”
// The number of characters is 10

function countCharactersWithoutSpaces(inputString) {
    const stringWithoutSpaces = inputString.replace(/\s/g, '');
    return stringWithoutSpaces.length;
}

// Example usage:
const input = "Hello World";
const characterCount = countCharactersWithoutSpaces(input);

console.log(`The number of characters without spaces is ${characterCount}.`);