describe("Game", function() {
  var game;

  beforeEach(function() {
    var game = new Game(Dice, Counter, Poison);
  });

  describe("Upon initialization, ", function() {
    it("has no Players logged", function() {
      var game = new Game();
      expect(game.numberOfPlayers).toEqual(0);
    });

    it("asks for a Minimum number of 1 Players", function() {
      var game = new Game();
      game.addPlayer(1);
      expect(game.numberOfPlayers).toEqual(1);
    });

    it("can have a Maximum of 4 Players", function() {
      var game = new Game();
      game.addPlayer(5);
      expect(game.numberOfPlayers).toEqual(4);
    });
  });


});





      // expect(game.playersCreated).toBeGreaterThan(0);
      // expect(game.playersCreated).toBeLessThan(5);
