var Dice = function() {
  this.dieFace = 20;
};

Dice.prototype.decreaseDice = function(lowerDieNumber) {
  if (this.dieFace - lowerDieNumber <= 1) {
    this.dieFace = 1;
  } else {
    this.dieFace -= lowerDieNumber;
  }
};

Dice.prototype.increaseDice = function(higherDieNumber) {
  if (this.dieFace + higherDieNumber >= 20) {
    this.dieFace = 20;
  } else {
    this.dieFace += higherDieNumber;
  }
};
