// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true --> false | false --> true

let temp = 15;
let sunny = true;

if (!(temp > 0)) {
    console.log("It is cold outside");
}
else{
    console.log("It is warm outside");
}

if (!sunny) {
    console.log("It is cloudy outside");
}
else{
    console.log("It is sunny outside");
}