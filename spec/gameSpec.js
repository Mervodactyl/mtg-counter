describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game(Dice, Counter, Poison);
  });

  describe("Upon initialization, ", function() {
    it("has no Players logged", function() {
      expect(game.numberOfPlayers).toEqual(0);
    });

    it("asks for a Minimum number of 1 Players", function() {
      game.addPlayer(1);
      expect(game.numberOfPlayers).toEqual(1);
    });

    it("can have a Maximum of 4 Players", function() {
      game.addPlayer(5);
      expect(game.numberOfPlayers).toEqual(4);
    });

    it("will throw an Error message if no Players are entered", function() {
      expect( function() { game.addPlayer(0); } ).toThrow(new Error("YOU MUST HAVE AT LEAST ONE PLAYER"));
    });

  });


});





      // expect(game.playersCreated).toBeGreaterThan(0);
      // expect(game.playersCreated).toBeLessThan(5);
