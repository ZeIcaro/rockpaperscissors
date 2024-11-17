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

function getHumanChoice () {
    let userChoice = prompt("Rock, paper or scissors?");
    return userChoice.toLowerCase()
}


function playRound (humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`${humanChoice} beats ${computerChoice}. You win!`);
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`${humanChoice} beats ${computerChoice}. You win!`);
        ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`${humanChoice} beats ${computerChoice}. You win!`);
        ++humanScore;
    } else if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else {
        console.log(`${computerChoice} beats ${humanChoice}. You lose!`);
        ++computerScore;
    };
    
    console.log(`User score: ${humanScore} \nComputer score: ${computerScore}`);
};


function playGame (n) {
    
    for (let i = 1; i <= n; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`User score: ${humanScore} \nComputer score: ${computerScore}`);

};

/* rock beats scissors; scissors beats paper; paper beats rock */

// Event Listener

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








