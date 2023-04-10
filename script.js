// function getComputerChoice () {
//     const choice = ["Rock", "Paper", "Scissors"];
//     // retorna o index aleatoriamente do array choice
//     return (Math.floor(Math.random() * choice.length));
// }


function getComputerChoice () {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];
    const choice = (Math.floor(Math.random() * rockPaperScissors.length));
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound (playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

   switch(player) {
    case "rock":
        if (computer === "rock"){
            return "Tied!";
        } else if (computer === "paper") {
            return "You lost! Paper beats Rock!";
        } else {
            return "You won! Rock beats Scissors!";
        }
    break;
    case "paper":
        if (computer === "rock") {
            return "You won! Paper beats Rock!";
        } else if (computer === "paper") {
            return "Tied!";
        } else {
            return "You lost! Scissors beats Paper!";
        }
    break;
    case "scissors":
        if(computer === "rock"){
            return "You lost! Rock beats Scissors!";
        } else if (computer === "paper"){
            return "You won! Scissors beats Paper!";
        } else {
            return "Tied!";
        }
    break;
    default:
        return "Invalid input!";    
   }
}


const playerSelection = "scissors";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));