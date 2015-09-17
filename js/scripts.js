var board = [ ["0", "0"], ["0", "1"], ["0", "2"],
            ["1", "0"], ["1", "1"], ["1", "2"],
            ["2", "0"], ["2", "1"], ["2", "2"] ];

function Player1(name) {
  this.name = name;
  this.marker = "X";
  this.mark = [];                                       //this will contain the coordnates of the player move. (e.g., player 1 wants to put an X on coordnate 2,0. so mark is [2,0])
}

Player1.prototype.move = function(mark){
  this.mark = mark
}

function Player2(player) {
  this.player = player;
  this.marker = "O";
  this.mark = [];
}

Player2.prototype.move = function(mark){
  this.mark = mark
}

function Game(player1, player2, board) {
  this.turn = 1                                           // initialize at turn 1
  this.player1 = player1;                                 // passing player 1 into Game
  this.player2 = player2;                                 // same...
  this.board = board;                                     // same....
  var winCond  = [ [["0","0"], ["0","1"], ["0","2"]] ];   //not finished
  var player1MoveHist = [];                               // self explan..
  var player2MoveHist = [];                               // self explan..
}

Game.prototype.checkMark = function() {
  if (turn % 2 !== 0) {                             //logic is that even (meaning 1), would start player 1 at turn 1
    player1.mark                                    // I don't know how this works yet
    for (var i = 0; i > board.length; i++) {        // looping through for the length of the array of coords
      if (player1.mark === board[i]) {              // if player1.mark coordnates match an array at i index...
        player1MoveHist.push(board[i]);             // push the board coordnates at i index to moveHist before...
        board[i] = player1.mark;                    // overwriting board at i index with the player marker("X")
      } else {                                      // else...
        if (board[i] === "X" | "O") {               // if board at i index already has a letter...
          return invalid                            // invald move
        }
      }
    }
  }
}
