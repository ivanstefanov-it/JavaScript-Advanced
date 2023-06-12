// Class = a blueprint for creating objects
//         define what properties and methods they have
//         use a constructor for unique properties

class Player{
    score = 0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}
const player1 = new Player();
console.log(player1.score);// 0
player1.score += 1;
console.log(player1.score);// 1
player1.pause();
player1.exit();

const player2 = new Player();
console.log(player2.score);// 0
player2.score += 3;
console.log(player2.score);// 1
player2.pause();
player2.exit();