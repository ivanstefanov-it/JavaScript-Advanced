const element = document.getElementById("myButton");
element.onclick = alertMessage;

const body = document.body;
//body.onload = alertMessage;

const textBox = document.getElementById("myText");
textBox.onchange = alertMessage;

const divElement = document.getElementById("myDiv");
//divElement.onmouseover = changeBackground;
//divElement.onmouseout = reverseBackground;
divElement.onmousedown = changeBackground;
divElement.onmouseup = reverseBackground;

function changeBackground(){
    divElement.style.backgroundColor = "grey";
}

function reverseBackground(){
    divElement.style.backgroundColor = "lightgreen";
}

function alertMessage(){
    alert("You press the button");
}