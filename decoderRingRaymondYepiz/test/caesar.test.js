// Write your const expect = require("chai").expect;
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;
describe("caesar", () => {
  describe("error handling for shift value", () => {
    //suite of tests to determine if the shift value is valid
    it("should not work and return false if no shifting value is included", () => {
      const expected = false;
      const actual = caesar("thinkful");
      expect(actual).to.equal(expected);
    });

    it("should return false if shift value is equal to 0)", () => {
      const expected = false;
      const actual = caesar("thinkful", 0);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift value is less than -25", () => {
      const expected = false;
      const actual = caesar("thinkful", -26);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift value is greater then 25", () => {
      const expected = false;
      const actual = caesar("thinkful", 99);
      expect(actual).to.equal(expected);
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters through the alphabet", () => {
      const actual = caesar("thinkful", 3);
      const expected = "wklqnixo";
      expect(actual).to.equal(expected);
    });
    it("should convert inputted string to lower case", () => {
      const expected = "phvvdjh";
      const actual = caesar("Message", 3);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other non-alphabetic symbols in the message", () => {
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar("This is a secret message!", 8);
      expect(actual).to.equal(expected);
    });
    it("should compensate for a negative shift value by shifting left through the alphabet", () => {
      const expected = "qefkhcri"
      const actual = caesar("thinkful", -3);
      expect(actual).to.equal(expected);
    });
    it("should be able to compensate for letters at the end of the alphabet", () => {
      const expected = "cheud pdjdclqh";
      const actual = caesar("zebra magazine", 3);
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode messages by shifting through the alphabet the inputted amount", () => {
      const expected = "thinkful";
      const actual = caesar("wklqnixo", 3, false);
      expect(actual).to.equal(expected);
    });
    it("should lowerCase strings", () => {
      const expected = "message";
      const actual = caesar("Phvvdjh", 3, false);
      expect(actual).to.equal(expected);
    });
    it("should keep spacing and amount of letters per word the same, only shifting of letters change", () => {
      const expected = 'this is a secret message!'
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      expect(actual).to.equal(expected);
    });
    it("should shift left if number is negative", () => {
      const expected = "thinkful";
      const actual = caesar("qefkhcri", -3, false);
      expect(actual).to.equal(expected);
    });
    it("should test for final letters like Z", () => {
      const expected = "zebra magazine";
      const actual = caesar("cheud pdjdclqh", 3, false);
      expect(actual).to.equal(expected);
    });
  })
});
