describe("Counter", function() {
  var counter;

  describe("by default, always", function() {
    it("starts at Life Level: '20'", function() {
      var counter = new Counter();
      expect(counter.lifeLevel).toEqual(20);
    });

  });

});
