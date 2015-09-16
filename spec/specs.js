describe('Player', function(){
  it("creates the player and gives it a mark", function(){
    var testPlayer = new Player("JohnS", "X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Board', function(){
  it("creates an array of board spaces with coords.", function(){
    var testBoard = new Board();
    expect(testBoard).to.eql([ [0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2] ]);
  });

});
