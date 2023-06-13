sum(2, 3, displayConsole);
sum(2, 3, displayDOM);


function sum(a, b, callBack){
    let result = a + b;
    callBack(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}