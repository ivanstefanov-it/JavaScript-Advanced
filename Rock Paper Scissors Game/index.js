const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const choiseBtn = document.querySelectorAll(".choiseBtn");
let player;
let computer;
let result;

choiseBtn.forEach(button => button.addEventListener("click", () =>{
   player = button.textContent;
   computerTurn();
   playerText.textContent = `Player: ${player}`;
   computerText.textContent = `Computer: ${computer}`;
   resultText.textContent = `Result: ${checkWinner()}`;
}));

function computerTurn(){
   const randomNumber = Math.floor(Math.random() * 3) + 1;
    
   switch(randomNumber){
      case 1:
         computer = "ROCK";
         break;
      case 2:
         computer = "PAPER";
         break;
      case 3:
         computer = "SCISSORS";
         break;
   }
}

function checkWinner(){
   if(player == computer){
      return "Draw!"
   }
   else if (computer == "ROCK") {
      return (player == "PAPER") ? "You win!" : "You lose!"
   }
   else if (computer == "PAPER") {
      return (player == "SCISSORS") ? "You win!" : "You lose!"
   }
   else if (computer == "SCISSORS") {
      return (player == "ROCK") ? "You win!" : "You lose!"
   }
}