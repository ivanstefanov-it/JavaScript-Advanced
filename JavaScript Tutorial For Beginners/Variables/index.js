// A variable is a container for storing data
// A variable behaves as if it was the value that it contains
// Declaration -> var, let, const 

let firstName = "Ivan";
let age;
age = 30;
age++;
let student = true;

console.log("Hello",firstName);
console.log("You are",age, "years old!");
console.log("Enrolled", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old!";
document.getElementById("p3").innerHTML = "Enrolled: " + student;