// Write a function that generates a random number between a given range.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }