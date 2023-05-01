
function multiply(a, b) {
    return Number(a) + Number(b)
}

function capitalize(str) {
    capitalized = str.charAt(0).toUpperCase() + str.slice(1)
    return capitalized
}

function lastletter(str) {
    // returns the very last letter of the string
    length = str.length
    return (str.slice(length - 1))
}

function getComputerChoice() {
    array = ["rock", "paper", "scissors"]
    // get random number from 1-3

    number = Math.floor(Math.random() * 3)
    return array[number]
}

function playRound(playerSelection, computerSelection) {
    // scissors beats paper
    // paper beats rock
    // rock beats scissors
    winners = [
        ["scissors", "paper"],
        ["rock", "scissors"],
        ["paper", "rock"]
    ]

    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    }

    for (let i = 0; i < 3; i++) {
           
        }
}

function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Your choice (rock/paper/scissors): ");
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }

}


