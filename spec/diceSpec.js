describe("Dice", function() {
  var dice;

    beforeEach(function() {
      dice = new Dice();
    });

  describe("should ", function() {
    it("start at '20'", function() {
      expect(dice.dieFace).toEqual(20);
    });

    it("not be able to go Below '1'", function() {
      dice.decreaseDice(20);
      expect(dice.dieFace).toEqual(1);
    });

    it("be Limited to a maximum of '20' sides", function() {
      dice.increaseDice(1);
      expect(dice.dieFace).toEqual(20);
    });
  });

  describe("can change its Original Starting point to begin at a ", function() {
    it("Lower face setting", function() {
      dice.decreaseDice(5);
      expect(dice.dieFace).toEqual(15);
    });

    it("or a Higher face setting", function() {
      dice.decreaseDice(10);
      dice.increaseDice(6);
      expect(dice.dieFace).toEqual(16);
    });
  });

  describe("Main Purpose is to ", function() {
    it("generate a random Number from the Player's throw", function() {
      dice.rollDice();
      expect(dice.dieFace).toBeGreaterThan(0);
      expect(dice.dieFace).toBeLessThan(21);
    });
  });

});
