function Player(player, mark) {
  this.player = player;
  this.mark = mark;
}

function Board() {
  this.board = [ [0, 0], [0, 1], [0, 2],
                 [1, 0], [1, 1], [1, 2],
                 [2, 0], [2, 1], [2, 2] ];
  return this.board;
}


































// function Account(name, balance) {
//   this.name = name;
//   this.balance = parseInt(balance);
// }
//
// Account.prototype.name = function() {
//   return this.name;
// };
//
// Account.prototype.balance = function() {
//   return this.balance;
// };
//
// Account.prototype.addFunds = function(addAmount) {
//   this.balance = this.balance + addAmount;
//   return this.balance;
// };
//
// Account.prototype.withdrawFunds = function(subtractAmount) {
//   this.balance = this.balance - subtractAmount;
//   return this.balance;
// };
//
//
// $(document).ready(function() {
//   $("form#create_account").submit(function(event) {
//     event.preventDefault();
//
//     var ownerName = $('input#owner_name').val();
//     var balance = $('input#initial_deposit').val();
//
//     var newAccount = new Account(ownerName, balance);
//     $('#account_owner').text(newAccount.name + "'s ")
//     $("#balance").append("<p class = 'new_balance'>" + newAccount.balance + "</p>");
//
//
//     $("#deposit_button").click(function() {
//       var addAmount =  parseInt($('input#amount').val());
//       newAccount.addFunds(addAmount)
//       $(".new_balance").replaceWith("<p class = 'new_balance'>" + newAccount.balance + "</p>");
//       if( newAccount.balance > 0) {
//         $('.jumbotron#balance_jumbo').removeClass('negative');
//       };
//     });
//
//     $("#withdraw_button").click(function() {
//       var subtractAmount =  parseInt($('input#amount').val());
//       newAccount.withdrawFunds(subtractAmount);
//       $(".new_balance").replaceWith("<p class = 'new_balance'>" + newAccount.balance + "</p>");
//       if( newAccount.balance < 0) {
//         $('.jumbotron#balance_jumbo').addClass('negative');
//       };
//     });
//
//   });
// });
