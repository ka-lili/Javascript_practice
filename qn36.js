// Write a function that counts the number of consonants in a string.

function countVowels(string) {
    const consonants = ["q","w","r","t","y","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","R","T","Y","P","S","D","F","G","H","H","K","I","Z","X","C","V","B","N","M"];
    let words = 0;
    for (let i = 0; i < string.length; i++) {
        if (consonants.includes(string[i])) {
            words++;
        }
    }
    return words;
}
//example
console.log(countVowels("Flower"));