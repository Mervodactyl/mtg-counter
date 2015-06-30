describe("Dice", function() {
  var dice;

  describe("should ", function() {
    it("start at '0'", function() {
      var dice = new Dice();
      expect(dice.dieFace).toEqual(0);
    });

    it("be able to start at another Face setting, if desired", function() {
      var dice = new Dice();
      dice.setFace(15);
      expect(dice.dieFace).toEqual(15);
    });

    it("be limited to '20' sides", function() {
      var dice = new Dice();
      dice.setFace(21);
      expect(dice.dieFace).toEqual(20);
    });

    // it("not be able to go below ''", function() {
    //
    // });
  });

});
