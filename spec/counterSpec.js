describe("Counter", function() {
  var counter;

  describe("by default, ", function() {
    it("starts at Life Level: '20'", function() {
      var counter = new Counter();
      expect(counter.lifeLevel).toEqual(20);
    });

    it("has a Life Level Limit of '999'", function() {
      var counter = new Counter();
      counter.addLife(980);
      expect(counter.lifeLevel).toEqual(999);
    });

  });

});
