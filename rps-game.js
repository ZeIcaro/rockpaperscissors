console.log("Hello world")

function getComputerChoice () {
    let rockv = 1;
    let paperv = 2;
    let scissorsv = 3;
    choiceNum = Math.random() * 3;
    if (choiceNum <= 1) {
        return "Rock";
    } else if (choiceNum <= 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice())