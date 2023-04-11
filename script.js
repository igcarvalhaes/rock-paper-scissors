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
                console.log("Tied!");
                return 2;
            } else if (computer === "paper") {
                console.log(`You lost! Paper beats Rock!`);
                return 1;
            } else {
                console.log(`You won! Rock beats Scissors!`);
                return 0;                
            }
        break;
        case "paper":
            if (computer === "rock") {
                console.log(`You won! Paper beats Rock!`)
                return 0;
            } else if (computer === "paper") {
                console.log("Tied!");
                return 2;
            } else {
                console.log(`You lost! Scissors beats Paper!`);
                return 1;
            }
        break;
        case "scissors":
            if(computer === "rock"){
                console.log(`You lost! Rock beats Scissors!`)
                return 1;
            } else if (computer === "paper"){
                console.log(`You won! Scissors beats Paper!`);
                return 0;
            } else {
                console.log("Tied!");
                return 2;
            }
        break;
        default:
            return "Invalid input!";    
    }
}

function game () {
    let playerSelection;
    let computerSelection;

    for (let i=0; i<5; i++){
        playerSelection = prompt("Choose between Rock, Paper and Scissors.");
        computerSelection = getComputerChoice();
        console.log((playRound(playerSelection, computerSelection)));              
    } 
}

game();

