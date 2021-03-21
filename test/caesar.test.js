const caesar = require("../src/caesar")
const {expect} = require("chai")

describe("caesar",() => {
    it("If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.",() => {
        const actualA = caesar("thinkful")
        const actualB = caesar("thinkful", 99)
        const actualC = caesar("thinkful", -26)
        const actualD = caesar("thinkful",0)
        expect(actualA).to.be.false
        expect(actualB).to.be.false
        expect(actualC).to.be.false
        expect(actualD).to.be.false
    })
    it("Capital letters can be ignored.",() => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        expect(actual).to.be.equal("this is a secret message!")
    })
    it("Spaces should be maintained throughout, as should other non-alphabetic symbols",() => {
        const actual = caesar("This is a secret message!", 8)
        expect(actual).to.be.equal("bpqa qa i amkzmb umaaiom!")
    })
    it("If a letter is shifted so that it goes off the alphabet, it should wrap around to the front of the alphabet",() => {
        const actual = caesar("z", 3)
        expect(actual).to.be.equal("c")
    })


})