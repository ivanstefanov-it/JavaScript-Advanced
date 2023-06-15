// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

//innerDiv.addEventListener("mouseover", chageRed);
//innerDiv.addEventListener("mouseout", chageGreen);
innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);



function chageRed(){
    innerDiv.style.backgroundColor = "red";
}

function chageGreen(){
    innerDiv.style.backgroundColor = "lightgreen";
}

function changeBlue(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "aqua";
}