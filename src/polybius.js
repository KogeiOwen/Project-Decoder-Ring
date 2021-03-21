// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function getKeyUsingValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  function isEven(n) {
    return n % 2 == 0;
 }

  function polybius(input, encode = true) {

    let temp = input
    input = temp.toLowerCase()
    let square = { "11":"a", "21":"b", "31":"c", "41":"d", "51":"e",
                   "12":"f", "22":"g", "32":"h", "52":"k",
                   "13":"l", "23":"m", "33":"n", "43":"o", "53":"p",
                   "14":"q", "24":"r", "34":"s", "44":"t", "54":"u",
                   "15":"v", "25":"w", "35":"x", "45":"y", "55":"z", " ":" "}

  let sorted = []
    
    if (encode) {
      let array = input.split("")
      sorted = array.map((key) => (key === "i" || key === "j") ? "42" : getKeyUsingValue(square,key)) 
    }

    if (!encode){
      let temp = input.replace(" ","")
      if (!isEven(temp.length)) {return false}
      let split = input.split(" ")
      split.forEach(value => {
        let array = value.match(/(..?)/g)
        let arranged = array.map((character) => (character === "42") ? "(i/j)" : square[character])
        sorted.push(arranged.join(""))
      });
      
          
    }

    
    return encode ? sorted.join("") : sorted.join(" ")
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
