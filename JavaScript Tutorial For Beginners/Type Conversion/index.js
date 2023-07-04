// Type Conversion - change the datatype of a value to another

let age = window.prompt("How old are you?");

console.log(typeof age); //string
age = Number(age);
console.log(typeof age); //number
age = age + 1; 

console.log("Happy Birthday! You are", age, "years old!")

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean(""); //if empty string --> false | if not empty string --> true

console.log(x, typeof x); //3.14 'number'
console.log(y, typeof y); //3.14 string
console.log(z, typeof z); //false 'boolean'