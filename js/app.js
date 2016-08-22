$(document).ready(function() {

  // function declareWinner() {
  //     console.log((this).text(0))
  // };
  // function symbolForCurrentPlayer(player) {
  //   if(player == 1) {
  //     return 'X';
  //   } else {
  //     return 'O';
  //   }
  // }

  $('.btn').click(function() {
    $( '.box' ).empty();
  })

  var symbol = "X";
  function findSymbolForCurrentPlayer(){
      if (symbol === "X") {
        symbol = "O"
        return symbol;
      } else {
        symbol = "X"
        return symbol;
      }
  }


    $('.box').click(function(e) {
      e.preventDefault
      console.log ($(this).text());
      if ($(this).text() === ""){//this runs the .text function on the box attribute, if result of said function = empty string, do ->
        var checkBox= $(this).text(findSymbolForCurrentPlayer()); // this references box, text is the method to return x which is argument
        // declareWinner();
      }
    });
  })


    // var button = document.getElementById("#button")
    //   if ('#button') {
    //     addEventListener("click", reset()('.box'));
    //   }
    //
    //   var input = $( "input:reset" )

  // $('.button').click(function() {
  //   document.getElementById('.box').reset();
  // });

  // function checkIfPlayerWon(#box, symbol) {
  // var won = 0;
  //
  //   return x
  // } else if ('#board').find('#box1').hasClass(pattern) && #box.find('#box4').hasClass(pattern) && #box.find('#box7').hasClass(pattern)) {
  //   won = 1;
  // } else if (#box.find('#box1').hasClass(pattern) && #box.find('#box5').hasClass(pattern) && #box.find('#box9').hasClass(pattern)) {
  //   won = 1;
  // } else if (#box.find('#box4').hasClass(pattern) && #box.find('#box5').hasClass(pattern) && #box.find('#box6').hasClass(pattern)) {
  //   won = 1;
  // } else if (#box.find('#box7').hasClass(pattern) && #box.find('#box8').hasClass(pattern) && #box.find('#box9').hasClass(pattern)) {
  //   won = 1;
  // } else if (#box.find('#box2').hasClass(pattern) && #box.find('#box5').hasClass(pattern) && #box.find('#box8').hasClass(pattern)) {
  //   won = 1;
  // } else if (#box.find('#box3').hasClass(pattern) && #box.find('#box6').hasClass(pattern) && #box.find('#box9').hasClass(pattern)) {
  //   won = 1;
  // } else if (#box.find('#box3').hasClass(pattern) && #box.find('#box5').hasClass(pattern) && #box.find('#box7').hasClass(pattern)) {
  //   won = 1;
  // }
  // return won;
// }

//
// function getWinner() {
//    if (isWinner('x')) {
//      return 'x';
//    }
//    if (isWinner('o')) {
//      return 'o';
//    }
//    return null;

//
// if (this.class == "box")
//  {
//       if(document.getElementById("cell1").innerHTML == ""){
//            document.getElementById("cell1").innerHTML = nextTurn;
//            changeTurn();
//       }
//  }
