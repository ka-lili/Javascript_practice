// Write a function that checks if a given string contains only digits.

function onlyDigits(string) {
    for (let i = string.length - 1; i >= 0; i--) {
      const digit = string.charCodeAt(i);
      if (digit < 48 || digit > 57) return false
    }
    return true
  }
  console.log(onlyDigits('8999'))
    