// Canvas API = a means for drawing graphics used for animations, games, data, visualization

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

/*
//DRAW LINES
context.strokeStyle = "blue";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
//context.lineTo(500, 500);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/

/*
//DRAW TRIANGLE
context.strokeStyle = "grey";
context.fillStyle = "yellow";
context.lineWidth = 10;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();
*/

/*
//DRAW RECTANGLE
context.fillStyle = "black";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "grey";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "grey";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "grey";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "grey";
context.strokeRect(250, 0, 250, 250);
*/

/*
//DRAW CIRCLE
context.fillStyle = "lightblue";
context.strokeStyle = "darkblue"
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/

//DRAW TEXT
context.font = "50px MV Boli";
context.textAlign = "center";
context.fillText("You win!", canvas.width / 2, canvas.height / 2);