var Poison = function() {
  this.toxicityLevel = 0;
};

Poison.prototype.increaseToxicity = function(poisonCounters) {
  if (this.toxicityLevel + poisonCounters >= 10) {
    this.toxicityLevel = 10;
    return "TEN TIMES YOU HAVE BEEN REPEATEDLY AND MALICIOUSLY POISIONED, YOU MUST NOW EMBRACE THE SWEET ARMS OF DEATH";
  } else {
    this.toxicityLevel += poisonCounters;
  }
};

Poison.prototype.decreaseToxicity = function(poisonCounters) {
  if (this.toxicityLevel - poisonCounters <= 0) {
    this.toxicityLevel = 0;
  } else {
    this.toxicityLevel -= poisonCounters;
  }
};
