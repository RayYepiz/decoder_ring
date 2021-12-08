// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  describe("error handling for input values", () => {
    it("should return false if there is no alphabet value", () => {
      const actual = substitution("thinkful");
      expect(actual).to.be.false;
    });
    it("should return false if there are not 26 characters in the alphabet", () => {
      const actual = substitution("thinkful", "short");
      expect(actual).to.be.false;
    });
    it("should return false if there is no input value present", () => {
      let message;
      const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const actual = substitution(message, alphabet)
      expect(actual).to.be.false;
    });
    it("should return false if there are duplicate characters in the alphabet", () => {
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
      expect(actual).to.be.false;
    })
  })
  describe("encoding a message", () => {
    it("should encode a message using the substitute alphabet", () => {
      const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
      const expected = "ykrrpik";
      expect(actual).to.equal(expected);
    });
    it("should return all characters in lower case", () => {
      const actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });
    it("should be able to identify all characters including special characters", () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      const expected = "y&ii$r&";
      expect(actual).to.equal(expected);
    });
    
    it("should maintain spaces in messages", () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    });
  })
  describe("decoding a message", () => {
    it("should use the decode alphabet to decipher messages", () => {
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });
    it("should change all characters to lowerCase", () => {
      const actual = substitution("jRUfscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });
    it("should be able to identify all characters including special characters", () => {
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
      const expected = "message";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in messages", () => {
      const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "you are an excellent spy";
      expect(actual).to.equal(expected);
    });
  });
});