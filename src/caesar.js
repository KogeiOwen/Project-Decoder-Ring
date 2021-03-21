// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) { 
if (!encode) {return caesar(input, shift * -1)}

if (shift < 0) {
  
  return caesar(input, shift + 26);
}
if (!shift || shift === 0 || shift < -25 || shift > 25)   {
      return false
  }

let temp = input
input = temp.toLowerCase()

let cipher = ""
let inputArray = input.split("")
inputArray.forEach((letter) => {
  if (letter.match(/[a-z]/)) {

    let code = letter.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      letter = String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
  }

  cipher += letter
})


return cipher;
  }
  return {
    caesar
  }
})()


module.exports = caesarModule.caesar;
