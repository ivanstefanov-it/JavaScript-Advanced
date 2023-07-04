// slice() - extracts a section of a string and returns it as a new string, without modifyinf the original string

let fullName = "Ivan Stefanov";
let firstName;
let lastName;

firstName = fullName.slice(0, 4);
console.log(firstName); // Ivan

lastName = fullName.slice(5);
console.log(lastName);// Stefanov

firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName); // Ivan

lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);// Stefanov