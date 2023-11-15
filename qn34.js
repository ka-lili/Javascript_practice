// Create a function called “stringModifier”. 
// This function allows a user to provide a string, and then provide the position they want to modify, 
// and a character to replace the modified one from the string. 
// This function will receive 3 arguments the first argument will be a string, 
// the second will be the position of a specific.

function stringModifier(string, position, character) {
    if (position < 0 || position >= string.length) {
        return "Invalid position";
    }
    return string.substring(0, position) + character + string.substring(position + 1);
}
// example
console.log(stringModifier("hi you are good", 0, "H"));
