
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
    return(str.slice(length-1))
}

function getComputerChoice() {
    array = ["rock", "paper","scissors"]
    // get random number from 1-3
    number = Math.floor(Math.random() * 3)
    return array[number]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

