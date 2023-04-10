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


console.log(getComputerChoice());   