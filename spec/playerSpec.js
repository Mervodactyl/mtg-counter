describe("Player", function() {
  var player;

  xdescribe("Upon creation, ", function() {
    it("a Name must be asigned to each Player", function() {
      var player = new Player();
      expect(player.enterNamePrompt)();
    });
  });


});
