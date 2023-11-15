// Create a function that counts the number of characters that make up a string.
// N.B: Add conditions that will make sure that spaces will not be counted in the number of characters.
// Example:
// For the string: “Hello World”
// The number of characters is 10

function displayCharactersInString(str) {
    return str.split(' ').join('').length;
}
// example
console.log(displayCharactersInString("Liliane hi"));