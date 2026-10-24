
const choices = document.querySelectorAll(".choice");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");
const resetButton = document.querySelector("#reset");

let playerScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    choicesDisplay.textContent =
        `You chose ${playerChoice}. Computer chose ${computerChoice}.`;

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        resultDisplay.textContent = "You win this round!";
    } else {
        computerScore++;
        resultDisplay.textContent = "Computer wins this round!";
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

choices.forEach(function(button) {
    button.addEventListener("click", function() {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });
});

resetButton.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "Choose your move!";
    choicesDisplay.textContent = "Make your selection below.";
});
