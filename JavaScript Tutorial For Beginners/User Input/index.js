
//EASY WAY with a windows prompt
let username = window.prompt("What is your name?");
console.log(username);

//DIFFICULT WAY with HTML textbox
let username1;
document.getElementById("myButton").onclick = function(){
    username1 = document.getElementById("myText").value;
    console.log(username1);
    document.getElementById("myLabel").innerHTML = "Hello " +  username1;
}