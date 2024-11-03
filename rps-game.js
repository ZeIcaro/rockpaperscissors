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
        console.log("Draw!");
    } else {
        console.log(`${computerChoice} beats ${humanChoice}. You lose!`);
        ++computerScore;
    }
}


function playGame (n) {
    
    for (let i = 1; i <= n; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`User score: ${humanScore} \nComputer score: ${computerScore}`);

}

/* rock beats scissors; scissors beats paper; paper beats rock */

numberOfRounds = parseInt(prompt("How many rounds do you want to play?"));

playGame(numberOfRounds);





