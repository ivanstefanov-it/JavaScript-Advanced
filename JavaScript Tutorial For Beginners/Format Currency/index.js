let number = 123456.789;
//number = number.toLocaleString("bg-BG"); //123 456,789
//number = number.toLocaleString("de-DE"); //123.456,789
//number = number.toLocaleString("hi-IN"); //1,23,456.789

//number = number.toLocaleString("bu-BG", {style: "currency", currency: "BGN"}); //BGN 123,456.79
//number = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); //₹1,23,456.79
number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"}); //123.456,79 €
console.log(number);

let myNumber = 100;
myNumber = myNumber.toLocaleString(undefined, {style: "percent"}); //100 --> 10.000%; 0.5 --> 50%; 0.01 --> 1%;
console.log(myNumber)

let units = 100;
units = units.toLocaleString(undefined, {style: "unit", unit: "celsius"})//100°C
console.log(units);