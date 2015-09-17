describe('player1', function(){
  it("creates player1 and gives it a mark", function(){
    var testPlayer = new Player1("JohnS");
    expect(testPlayer.marker).to.equal("X");
  });
});

describe('player2', function(){
  it("creates player2 and gives it a mark", function(){
    var testPlayer2 = new Player2("JohnS");
    expect(testPlayer2.marker).to.equal("O");
  });
});


describe('Game', function(){
  it("determines the turn of the game", function(){
    var testGame = new Game();
    expect(testGame.turn).to.equal(1);
  });
});

  it("checks to see if the move is available", function(){
    var testPlayer1 = new Player1("tom");
    var testPlayer2 = new Player2("bob");
    var board = [ ["0", "0"], ["0", "1"], ["0", "2"],
    ["1", "0"], ["1", "1"], ["1", "2"],
    ["2", "0"], ["2", "1"], ["2", "2"] ];
    var testGame = new Game(testPlayer1, testPlayer2, board);
    expect(testGame.checkMark).to.eql(["9","9"]);
  });
