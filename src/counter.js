var Counter = function() {
  this.lifeLevel = 20;
};

Counter.prototype.addLife = function(lifeTokens) {
  if (this.lifeLevel + lifeTokens >= 999) {
    this.lifeLevel = 999;
    return "NICE TRY....NO ONE LIVES THAT LONG IN MAGIC...CONSIDER YOURSELF THRICE CURSED FOR BEHAVIOUR UNBECOMING!!!!";
  } else {
    this.lifeLevel += lifeTokens;
  }
};

Counter.prototype.decreaseLife = function(lifeTokens) {
  if (this.lifeLevel - lifeTokens <= 0) {
    this.lifeLevel = 0;
    return "YOU ARE DEAD, YOUR OPPONENT WILL FEAST FROM THE MARROW IN YOUR BONES AND DANCE UPON YOUR GRAVES";
  } else {
    this.lifeLevel -= lifeTokens;
  }
};
