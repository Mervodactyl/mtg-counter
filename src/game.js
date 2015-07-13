var Game = function() {
  this.numberOfPlayers = 0;
  this.MAXIMUMPLAYERS = 4;
  this.MINIMUMPLAYERS = 1;
};

Game.prototype.addPlayer = function(createInstanceOfPlayer) {
  if (this.numberOfPlayers + createInstanceOfPlayer > this.MAXIMUMPLAYERS) {
    this.numberOfPlayers = this.MAXIMUMPLAYERS;
  } else {
    this.numberOfPlayers += createInstanceOfPlayer;
  }
};
