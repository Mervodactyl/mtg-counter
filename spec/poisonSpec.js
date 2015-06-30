describe("Poison", function() {
  var poison;

    beforeEach(function() {
      poison = new Poison();
    });

  describe("beigns with ", function() {
    it("'0' Poison counters", function() {
      expect(poison.toxicityLevel).toEqual(0);
    });

    describe("is Limited to ", function() {
      it("a Maximum of '10' Poison counters", function() {
        poison.increaseToxicity(11);
        expect(poison.toxicityLevel).toEqual(10);
      });

      it("a Minimum of '0' Poison counters", function() {
        poison.decreaseToxicity(1);
        expect(poison.toxicityLevel).toEqual(0);
      });
    });

    describe("will return ", function() {
      it("a EOG message if the Poison Counter reaches Maximum", function() {
        expect(poison.increaseToxicity(10)).toEqual("TEN TIMES YOU HAVE BEEN REPEATEDLY AND MALICIOUSLY POISIONED, YOU MUST NOW EMBRACE THE SWEET ARMS OF DEATH");
      });
    });
  });
});
