describe('Game', function() {
  var game;
  var player1, player2, player3, player4;

  beforeEach(function() {
    player3  = { addLife : null, decreaseLife : null };
    game = new Game({'Merve': player1, 'Giuseppe': player2, 'Anna': player3, 'Lucifer': player4});
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

  describe('is in charge of ', function() {
    xit("Creating instances of Players", function() {

    });

    it("Increasing the LifeCounter of a particular Player", function() {
      spyOn(player3, 'addLife');
      game.addLife('Anna');
      expect(player3.addLife).toHaveBeenCalled();
    });

    it("Decreasing the LifeCounter of a particular Player", function() {
      spyOn(player3, 'decreaseLife');
      game.decreaseLife('Anna');
      expect(player3.decreaseLife).toHaveBeenCalled();
    });
  });


});





























// describe("Game", function() {
//   var game;
//
//   beforeEach(function() {
//     game = new Game(Player, Dice, Counter, Poison);
//   });
//
//
//
//   describe("Creates a ", function() {
//
//   });
//
//
// });





      // expect(game.playersCreated).toBeGreaterThan(0);
      // expect(game.playersCreated).toBeLessThan(5);
