describe("Poison", function() {
  var poison;

  describe("beigns ", function() {
    it("at '0'", function() {
      var poison = new Poison();
      expect(poison.toxicityLevel).toEqual(0);
    });

  });
});
