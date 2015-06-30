var Dice = function() {
  this.dieFace = 0;
};

Dice.prototype.setFace = function(faceNumber) {
  if (this.dieFace + faceNumber >= 20) {
    this.dieFace = 20;
  } else {
    this.dieFace += faceNumber;
  }
};
