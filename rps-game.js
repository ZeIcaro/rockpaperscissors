console.log("Hello world")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let rockv = 1;
    let paperv = 2;
    let scissorsv = 3;
    choiceNum = Math.random() * 3;
    if (choiceNum <= 1) {
        return "rock";
    } else if (choiceNum <= 2) {
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
        return "Draw!"
    } else {
        console.log(`${computerChoice} beats ${humanChoice}. You lose!`);
        ++computerScore;
    }
}

/* rock beats scissors; scissors beats paper; paper beats rock */


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(computerScore)
console.log(humanScore)


