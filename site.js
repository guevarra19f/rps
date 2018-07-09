var roundNumber = 0;
var userScore = 0;
var computerScore = 0;

function randomThrow() {
  var throws = ['rock', 'paper', 'scissors'];
  var randomIndex = Math.floor(Math.random() * 3);
  return throws[randomIndex];
}

function playRound(userThrow) {
  var computerThrow = randomThrow();
  var result;

  if (userThrow == computerThrow) {
    result = 'TIE';
  } else if ( (userThrow == 'rock' && computerThrow == 'scissors') ||
              (userThrow == 'paper' && computerThrow == 'rock') ||
              (userThrow == 'scissors' && computerThrow == 'paper')) {
    result = 'PLAYER WIN';
    userScore++;
  } else {
    result = 'COMPUTER WIN';
    computerScore++;
  }

  roundNumber++;
  $('#computer-score').text(computerScore);
  $('#user-score').text(userScore);
  $('tbody').append(`<tr><td>${roundNumber}</td>
                         <td>${userThrow}</td>
                         <td>${computerThrow}</td>
                         <td>${result}</td>
                         <td>${userScore}-${computerScore}</td>
                     </tr>`);
}


$('#rock').click(function() {
  playRound('rock');
});

$('#paper').click(function() {
  playRound('paper');
});

$('#scissors').click(function() {
  playRound('scissors');
});
