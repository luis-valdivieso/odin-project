function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function getUserChoice() {
  const userChoice = prompt('Choose rock, paper, or scissors:').toLowerCase();
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
             humanChoice === 'paper' && computerChoice === 'rock' ||
             humanChoice === 'scissors' && computerChoice === 'paper') {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function game(numberRounds){
  for (let i = 0; i < numberRounds; i++) {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();
    console.log(playRound(userChoice, computerChoice));
  }
}

game(5);