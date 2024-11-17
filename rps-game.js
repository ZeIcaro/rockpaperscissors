let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let rockLimit = 1;
    let paperLimit = 2;
    let scissorsLimit = 3;
    choiceNum = Math.random() * 3;
    if (choiceNum <= rockLimit) {
        return "rock";
    } else if (choiceNum <= paperLimit) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Capitalize first letter support function

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}


// playRound function

function playRound (humanChoice, computerChoice) {

    let message

    if (humanChoice === "rock" && computerChoice === "scissors") {
        message = `${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}. You win!`;
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        message = `${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}. You win!`;
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        message = `${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}. You win!`;
        ++humanScore;
    } else if (humanChoice === computerChoice) {
        message = `You both chose ${humanChoice}. Draw!`;
    } else {
        message = `${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}. You lose!`;
        ++computerScore;
    };

    
    playerScore.textContent = `User score: ${humanScore}`;
    pcScore.textContent = `Computer score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        endRoundMessage.textContent = "";
        resetGame();
    } else {
        endRoundMessage.textContent = message;
        endGameMessage.textContent = "";
    };

};


function resetGame () {
    
    let winner;
    if (humanScore > computerScore) {
        winner = "You win";
    } else if (humanScore < computerScore) {
        winner = "Computer wins";
    } else {
        winner = "Draw";
    };

    endGameMessage.textContent = `Game over! ${winner}!`;

    humanScore = 0;
    computerScore = 0;

};


// Event Listeners

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click", () => {
    playRound ("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound ("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound ("scissors", getComputerChoice());
});


// Displaying results

const playerScore = document.querySelector(".playerScore");
const pcScore = document.querySelector(".pcScore");
const endRoundMessage = document.querySelector(".endRoundMessage");
const endGameMessage = document.querySelector(".endGameMessage");






