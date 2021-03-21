// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function containsDuplicates(array) {
    return (new Set(array)).size !== array.length;
  }
  letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26  || containsDuplicates(alphabet)) {return false}

    let temp = input
    input = temp.toLowerCase()

    let alphabetArray = alphabet.split("")
    let split = input.split(" ")
    let sorted = []

    if (encode){
      split.forEach((item) => {
        let inputArray = item.split("")
        let keys = inputArray.map((character) => letters.findIndex((value) => value === character))
        arranged = keys.map((key) => alphabetArray[key])
        sorted.push(arranged.join(""))
      })
      
    }
    if (!encode){
      split.forEach((item) => {
        let inputArray = item.split("")
        let keys = inputArray.map((character) => alphabetArray.findIndex((value) => value === character))
        arranged = keys.map((key) => letters[key])
        sorted.push(arranged.join(""))

      })
      
    }
    return sorted.join(" ")
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
