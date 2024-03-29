// setTimeout = invokes a function after a number of miliseconds
//              asynchronous function (does't pause execution)

let item = "cryptocurrency";
let price = 500;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}!`);
}

function secondMessage(){
    alert(`This is not a scam!`);
}

function thirdMessage(){
    alert(`DO IT!`);
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying`);
};