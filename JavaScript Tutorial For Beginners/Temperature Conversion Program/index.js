document.getElementById("submitBtn").onclick = function(){
    let temp;

    if (document.getElementById("cBtn").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fBtn").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

function toCelsius(temp){
    return(temp - 32) * (5 / 9);
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}