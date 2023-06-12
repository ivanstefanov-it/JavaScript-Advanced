// on expression = funtion without a name avoid polluting the global scope with names.

/*
const greeding = function(){
    console.log("Hello!");
}

greeding();
*/
/*
sayHello();

function sayHello(){
    console.log("Hello!");
}
*/

let counter = 0;

document.getElementById("increaseBtn").onclick = function(){
    counter += 1;
    document.getElementById("myLabel").innerHTML = counter;
}

document.getElementById("decreaseBtn").onclick = function(){
    counter -= 1;
    document.getElementById("myLabel").innerHTML = counter;
}