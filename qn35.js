// Write a function that counts the number of vowels in a string.
// program to count the number of vowels in a string

// defining vowels
function countVowels(string) {
    const vowels = "aeiouAEIOU";
    let words = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            words++;
        }
    }
    return words;
}
//example
console.log(countVowels("flower"));
