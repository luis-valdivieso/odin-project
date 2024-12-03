
let humanScore = 0;
let computerScore = 0;

// Locate results in the DOM
let humanResult = document.querySelector(".results .human");
let computerResult = document.querySelector(".results .computer");
console.log(humanResult, computerResult);
const startBtn = document.querySelector(".start-button");
const buttons = document.querySelectorAll(".selection button");
const resultDiv = document.querySelector(".result-display");
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    humanResult.textContent = `Player: ${humanScore}`;
    return "You win this round!";
  } else {
    computerScore++;
    computerResult.textContent = `Computer: ${computerScore}`;
    return "You lose this round!";
  }
}

function startGame() {
  // Hide start button
  startBtn.style.display = "none";
  console.log("Game started!");
  // Show selection buttons
  buttons.forEach((button) => {
    button.style.display = "inline-block";
    button.onclick = () => {
      const humanChoice = button.textContent.toLowerCase();
      console.log(`You chose: ${humanChoice}`);
      const computerChoice = getComputerChoice();
      const result = playRound(humanChoice, computerChoice);
      console.log(result);
      resultDiv.textContent = result;
      // After the round, show the start button and hide selection buttons
      startBtn.style.display = "block";
      buttons.forEach((btn) => (btn.style.display = "none"));
    };
  });
}

// Initialize game
startBtn.onclick = startGame;

// Hide selection buttons initially
buttons.forEach((button) => (button.style.display = "none"));
