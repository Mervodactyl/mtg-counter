describe("Counter", function() {
  var counter;

    beforeEach(function() {
      counter = new Counter();
    });

  describe("by default, ", function() {
    it("starts at Life Level: '20'", function() {
      expect(counter.lifeLevel).toEqual(20);
    });

    it("has a Life Level Limit  of '999'", function() {
      counter.addLife(980);
      expect(counter.lifeLevel).toEqual(999);
    });

    it("cannot allow the Life Level to go below '0'", function() {
      counter.decreaseLife(21);
      expect(counter.lifeLevel).toEqual(0);
    });
  });

  describe("will return the following Message if", function() {
    it("Player's Life Level reaches below '1'", function() {
      expect(counter.decreaseLife(20)).toEqual("YOU ARE DEAD, YOUR OPPONENT WILL FEAST FROM THE MARROW IN YOUR BONES AND DANCE UPON YOUR GRAVE");
    });

    it("Player's Life Level tries to go over '999'", function() {
      expect(counter.addLife(979)).toEqual("NICE TRY....NO ONE LIVES THAT LONG IN THE MULTIVERSE...CONSIDER YOURSELF THRICE CURSED FOR BEHAVIOUR UNBECOMING!!!!");
    });
  });
});
