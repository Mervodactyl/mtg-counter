var Counter = function() {
  this.lifeLevel = 20;
};

Counter.prototype.addLife = function(lifeTokens) {
  if (this.lifeLevel + lifeTokens >= 1000) {
    this.lifeLevel = 999;
  } else {
    this.lifeLevel += lifeTokens;
  }
};

Counter.prototype.decreaseLife = function(lifeTokens) {
  if (this.lifeLevel - lifeTokens <= 0) {
    this.lifeLevel = 0;
  } else {
    this.lifeLevel -= lifeTokens;
  }
};
