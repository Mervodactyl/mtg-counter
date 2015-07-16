var Game = function(players) {
  this.numberOfPlayers = 0;
  this.MAXIMUMPLAYERS = 4;
  this.MINIMUMPLAYERS = 1;
  this.players = players;
};

Game.prototype.addLife = function(playerName) {
  console.log(this.players);
  this.players[playerName].addLife();
};

Game.prototype.decreaseLife = function(playerName) {
  console.log(this.players);
  this.players[playerName].decreaseLife();
};

Game.prototype.addPlayer = function(createInstanceOfPlayer) {
  if (this.numberOfPlayers + createInstanceOfPlayer > this.MAXIMUMPLAYERS) {
    this.numberOfPlayers = this.MAXIMUMPLAYERS;
  } else if (this.numberOfPlayers + createInstanceOfPlayer === 0) {
    throw new Error ("YOU MUST HAVE AT LEAST ONE PLAYER");
  } else {
    this.numberOfPlayers += createInstanceOfPlayer;
  }
};
