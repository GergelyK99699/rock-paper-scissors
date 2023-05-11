const choice = ["rock","paper","scissors"];
function getComputerChoice(choice){
   return choice[Math.floor(Math.random()*choice.length)];
}

function oneRound(playerSelection, computerSelection){
   if (playerSelection == computerSelection){
        return("It's a draw, because "+playerSelection+" = "+computerSelection);
   }
   else if ((playerSelection = "rock") && (computerSelection = "paper")) {
        return("You lost, because "+computerSelection+" beats "+playerSelection+" .")
    }
    else if ((playerSelection = "paper") && (computerSelection = "scissors")) {
        return("You lost, because "+computerSelection+" beats "+playerSelection+" .")
    }
    else if ((playerSelection = "scissors") && (computerSelection = "rock")) {
        return("You lost, because "+computerSelection+" beats "+playerSelection+" .")
    }
    else if (playerSelection != ["rock","paper","scissors"]){
        return("You have to choose between rock, paper, scissors !")
    }
    else {
        return("You won, "+playerSelection+" beats "+computerSelection+" .")
   }

 }

function game(){
    const playerSelection = prompt("Rock,paper,scissors ?");
    console.log(playerSelection);
    const computerSelection = getComputerChoice(choice);
    console.log(computerSelection);
    let round = oneRound(playerSelection, computerSelection);
    console.log(round);
}

const loopTime = 5;
for (let i = 0; i < loopTime; i++){
    console.log(game());

}