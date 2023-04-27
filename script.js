let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const playerCurrentScore = document.querySelector('.playerScore');
const computerCurrentScore = document.querySelector('.computerScore');
const gameStatus = document.querySelector('.game-status');

function getComputerChoice () {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];
    const choice = (Math.floor(Math.random() * rockPaperScissors.length));
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound (playerSelection, computerSelection) {
    const player = playerSelection;
    const computer = computerSelection;

    switch(player) {
        case "rock":
            if (computer === "rock"){
                gameStatus.textContent = 'Tied!';
            } else if (computer === "paper") {
                gameStatus.textContent = 'You lost! Paper beats Rock!';
                computerScore = computerScore + 1;
            } else {
                gameStatus.textContent = 'You won! Rock beats Scissors!';
                playerScore = playerScore + 1;                         
            }
        break;
        case "paper":
            if (computer === "rock") {
                gameStatus.textContent = 'You won! Paper beats Rock!';
                playerScore = playerScore + 1;   
            } else if (computer === "paper") {
                gameStatus.textContent = 'Tied!';    
            } else {
                gameStatus.textContent = 'You lost! Scissors beats Paper!';
                computerScore = computerScore + 1;
            }
        break;
        case "scissors":
            if(computer === "rock"){
                gameStatus.textContent ='You lost! Rock beats Scissors!';
                computerScore = computerScore + 1;
            } else if (computer === "paper"){
                gameStatus.textContent = 'You won! Scissors beats Paper!';
                playerScore = playerScore + 1;   
            } else {
                gameStatus.textContent = 'Tied!';
            }
        break;
    }

    if (playerScore >=5  || computerScore >=5){
        playerScore = 0;
        computerScore = 0;
        gameStatus.textContent = 'Game is over!';

    } else {
        playerCurrentScore.textContent = playerScore;
        computerCurrentScore.textContent = computerScore;
    }
}


rockButton.addEventListener('click', function(){
    playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', function(){
    playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener('click', function(){
    playRound('scissors', getComputerChoice());
});




