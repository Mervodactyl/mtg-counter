var Game2 = function(players) {
  this.players = players;
};

Game2.prototype.addLife = function(playerName) {
  console.log(this.players);
  this.players[playerName].addLife();
};




describe('Game2', function() {
  var game2;
  var player1, player2, player3, player4;

  beforeEach(function() {
    player3  = { addLife : null };
    game2 = new Game2({'Merve': player1, 'Giuseppe': player2, 'Anna': player3, 'Lucifer': player4});
  });

  describe('addLife', function() {
    it("adds the life of a player", function() {
      spyOn(player3, 'addLife');
      game2.addLife('Anna');
      expect(player3.addLife).toHaveBeenCalled();
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
//   describe("Upon initialization, ", function() {
//     it("has no Players logged", function() {
//       expect(game.numberOfPlayers).toEqual(0);
//     });
//
//     it("asks for a Minimum number of 1 Players", function() {
//       game.addPlayer(1);
//       expect(game.numberOfPlayers).toEqual(1);
//     });
//
//     it("can have a Maximum of 4 Players", function() {
//       game.addPlayer(5);
//       expect(game.numberOfPlayers).toEqual(4);
//     });
//
//     it("will throw an Error message if no Players are entered", function() {
//       expect( function() { game.addPlayer(0); } ).toThrow(new Error("YOU MUST HAVE AT LEAST ONE PLAYER"));
//     });
//   });
//
//   describe("Creates a ", function() {
//
//   });
//
//
// });





      // expect(game.playersCreated).toBeGreaterThan(0);
      // expect(game.playersCreated).toBeLessThan(5);
