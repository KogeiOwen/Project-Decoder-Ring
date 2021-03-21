const polybius = require("../src/polybius")
const {expect} = require("chai")

describe("polybius",() => {
    it("When encoding, it translates the letters i and j to 42",() => {
        const actual = polybius("i")
        const expected = "42"
        
        expect(actual).to.be.equal(expected)
        
    })
    it("When decoding, it translates 42 to (i/j)",() => {
        const actual = polybius("4432423352125413", false)
        expect(actual).to.be.equal("th(i/j)nkful")
    })
    it("It ignores capital letters",() => {
        const actual = polybius("THINKFUL")
        
        expect(actual).to.be.equal("4432423352125413")
    })
    it("It maintains spaces in the message, before and after encoding or decoding",() => {
        const actualA = polybius("3251131343 2543241341", false)
        const actualB = polybius("hello world")
        
        expect(actualA).to.be.equal("hello world")
        expect(actualB).to.be.equal("3251131343 2543241341")

    })


})