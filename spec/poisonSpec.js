describe("Poison", function() {
  var poison;

  describe("beigns with ", function() {
    it("'0' Poison counters", function() {
      var poison = new Poison();
      expect(poison.toxicityLevel).toEqual(0);
    });

    describe("is Limited to ", function() {
      it("a Maximum of '10' Poison counters", function() {
        var poison = new Poison();
        poison.increaseToxicity(11);
        expect(poison.toxicityLevel).toEqual(10);
      });

      it("a Minimum of '0' Poison counters", function() {
        var poison = new Poison();
        poison.decreaseToxicity(1);
        expect(poison.toxicityLevel).toEqual(0);
      });
    });
    
  });
});
