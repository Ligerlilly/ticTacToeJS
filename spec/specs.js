describe('Player', function(){
  it("creates player and gives it a mark", function(){
    var testPlayer = new Player("JohnS", "X");
    expect(testPlayer.mark).to.equal("X");
    expect(testPlayer.name).to.equal("JohnS");
  });
});

describe('Space', function() {
  it('should have x/y coordinates', function() {
    var space = new Space(1, 1);
    expect(space.x).to.eq(1);
    expect(space.y).to.eq(1);
  });
  it('should return a players mark', function() {
    var player = new Player('Jason', "X");
    var space = new Space(2, 2);
    space.markedBy(player);
    expect(space.markedBy().mark).to.eq('X');
  });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var board = new Board();
    var space = new Space(1, 1);
    expect(board.spaces[0].x).to.eq(space.x);
    expect(board.spaces[0].y).to.eq(space.y);
  });

  it("finds the player's marked space based on coordinates", function() {
    var board = new Board();
    var space = new Space(1, 1);
    var foundSpace = board.find(1, 1);
    expect(foundSpace.x).to.eql(space.x);
    expect(foundSpace.y).to.eql(space.y);
  });
});

describe('Game', function() {
  it('creates players, spaces, and board', function() {
    var playerX = new Player("John", "X");
    var playerO = new Player("Peter", "O");
    var game = new Game(playerX, playerO);

    expect(game.playerX.mark).to.eq('X');
    expect(game.board.spaces[0].x).to.eq(1);
    expect(game.board.spaces[0].y).to.eq(1);
  });

  it('should start with playerX as first player and toggle players', function() {
    var game = new Game();
    expect(game.whoTurn()).to.eq(game.playerX);
    game.turnToggle()
    expect(game.whoTurn()).to.eq(game.playerO);
  });
});
