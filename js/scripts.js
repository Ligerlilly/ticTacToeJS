function Player(name, mark) {
  this.name = name;
  this.mark = mark;
                            //this will contain the coordnates of the player move. (e.g., player 1 wants to put an X on coordnate 2,0. so mark is [2,0])
}

function Space(x, y){
  this.x = x;
  this.y = y;
  this.player = {};
  this.clicked = false;
  this.markedBy = function(player) {
    if (player) {
      this.player = player;
    }

    return this.player;
  }

}
function Board() {
  this.spaces = [];
  this.spaces.push(new Space(1,1));
  this.spaces.push(new Space(1,2));
  this.spaces.push(new Space(1,3));
  this.spaces.push(new Space(2,1));
  this.spaces.push(new Space(2,2));
  this.spaces.push(new Space(2,3));
  this.spaces.push(new Space(3,1));
  this.spaces.push(new Space(3,2));
  this.spaces.push(new Space(3,3));
}

Board.prototype.find = function(x, y) {
  for (var index in this.spaces) {
    if (this.spaces[index].x == x && this.spaces[index].y == y) {
      return this.spaces[index];
    }
  }
};

function Game(playerX, playerO) {
  var playerX = playerX;
  var playerO = playerO;
  var board = new Board();
  var turn = 1;
  var whoTurn = function() {
    if (turn === 1 ) {
      return playerX;
    }
    else {
      return playerO;
    }
  };
  var turnToggle = function() {
    turn *= -1
  };

  var winning = function() {
    var center = board.find(2, 2).markedBy().mark;
    if ((board.find(1, 1).markedBy().mark == center) && (board.find(3, 3).markedBy().mark == center) && (typeof center != 'undefined')){
      $('.turn').hide();
      $('.player').text(center);
      $('.win').text(" wins");
      $('#new').show();

      for (var i = 0; i < board.spaces.length; i++){
        board.spaces[i].clicked = true;
      }

    } else if ((board.find(1, 3).markedBy().mark == center) && (board.find(3, 1).markedBy().mark == center) && (typeof center != 'undefined')) {
      $('.turn').hide();
      $('.player').text(center);
      $('.win').text(" wins");
      $('#new').show();

      for (var i = 0; i < board.spaces.length; i++){
        board.spaces[i].clicked = true;
      }
    }


    for (var i = 1; i<4; i++) {
      var marksY = [];
      var marksX = [];
      for(var j= 1; j<4; j++) {
        marksY.push(board.find(i, j).markedBy().mark);
        if ((marksY[0] == marksY[1]) && (marksY[0] == marksY[2]) && (typeof marksY[0] != 'undefined')) {
          $('.turn').hide();
          $('.player').text(marksY[0]);
          $('.win').text(" wins");
          $('#new').show();
          for (var i = 0; i < board.spaces.length; i++){
            board.spaces[i].clicked = true;
          }
        }
        marksX.push(board.find(j, i).markedBy().mark);
        if ((marksX[0] == marksX[1]) && (marksX[0] == marksX[2]) && (typeof marksX[0] != 'undefined')) {
          $('.turn').hide();
          $('.player').text(marksX[0]);
          $('.win').text(" wins");
          $('#new').show();
          for (var i = 0; i < board.spaces.length; i++){
            board.spaces[i].clicked = true;
          }
        }
      }


    }

  };

  return { playerX  : playerX,
            playerO : playerO,
            board   : board,
            whoTurn : whoTurn,
            turnToggle : turnToggle,
            winning : winning }
}

$(document).ready(function(){
  $('table').hide();
  $('#new').hide();
  $('#info').hide();
  $('#new').click(function() {
      game = new Game(playerX, playerO);
      location.reload();
    });

  var playerX = {};
  var playerO = {};



  $('form#new_player').submit(function(event) {
    event.preventDefault();
    var inputtedPlayerName = $("input#player_name").val();
    var selectedChoose = $(this).find("#x_or_o").val();


    if (selectedChoose === 'X'){
      $("#playerX").remove();
      playerX = new Player(inputtedPlayerName, selectedChoose);
      $("ul#players").append("<li id='playerX'><i class='fa-li fa fa-user'></i><span class='players'>" + playerX.name + " is playing with " + selectedChoose + "</span></li>");

    } else if (selectedChoose === 'O') {
      $("#playerO").remove();
      playerO = new Player(inputtedPlayerName, selectedChoose);
      $("ul#players").append("<li id='playerO'><i class='fa-li fa fa-user'></i><span class='players'>" + playerO.name + " is playing with " + selectedChoose + "</span></li>");
    }



    if ((playerX.mark == 'X') && (playerO.mark == 'O')){
      $("li").first().append(" <span><b>VS.</b></span>");
      $('#new_player').hide('slow');
      $('table').show('slow');
      $('.player').text(playerX.name);
      $('#info').show();
      var game = new Game(playerX, playerO);
      for (var i = 0; i < 9; i++){

        $('#' + i).click(function() {

          if (!game.board.spaces[parseInt($(this).attr('id'))].clicked){
            var player = game.board.spaces[parseInt($(this).attr('id'))].markedBy(game.whoTurn());
            if (player.mark === "X") {
              $(this).append("<i class='fa fa-times fa-5x'></i>");
            }
            else {
              $(this).append("<i class='fa fa-circle-o fa-5x'></i>");
            }

            game.board.spaces[parseInt($(this).attr('id'))].clicked = true;
            game.turnToggle();
            $('.player').text(game.whoTurn().name);
            game.winning();
          }
       });
      }
    }

  });
});
// function Game(player1, player2, board) {
//   this.turn = 1                                           // initialize at turn 1
//   this.player1 = player1;                                 // passing player 1 into Game
//   this.player2 = player2;                                 // same...
//   this.board = board;                                     // same....
//   var winCond  = [ [["0","0"], ["0","1"], ["0","2"]] ];   //not finished
//   var player1MoveHist = [];                               // self explan..
//   var player2MoveHist = [];                               // self explan..
// }
//
// Game.prototype.checkMark = function() {
//   if (turn % 2 !== 0) {                             //logic is that even (meaning 1), would start player 1 at turn 1
//     player1.mark                                    // I don't know how this works yet
//     for (var i = 0; i > board.length; i++) {        // looping through for the length of the array of coords
//       if (player1.mark === board[i]) {              // if player1.mark coordnates match an array at i index...
//         player1MoveHist.push(board[i]);             // push the board coordnates at i index to moveHist before...
//         board[i] = player1.mark;                    // overwriting board at i index with the player marker("X")
//       } else {                                      // else...
//         if (board[i] === "X" | "O") {               // if board at i index already has a letter...
//           return invalid                            // invald move
//         }
//       }
//     }
//   }
// }
