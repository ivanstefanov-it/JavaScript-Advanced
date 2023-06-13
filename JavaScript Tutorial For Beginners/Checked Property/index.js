document.getElementById("myButton").onclick = function(){
    const isChecked = document.getElementById("myCheckBox").checked;
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if (isChecked) {
        console.log("You are subscribed");
    } 
    else {
        console.log("You are NOT subscribed");
    }

    if (visaBtn.checked) {
        console.log("You are paying with a Visa!");
    } 
    else if (mastercardBtn.checked) {
        console.log("You are paying with a MasterCard!");
    } 
    else if (paypalBtn.checked) {
        console.log("You are paying with a PayPal");
    }
    else{
        console.log("You must select a payment type!");
    }
}