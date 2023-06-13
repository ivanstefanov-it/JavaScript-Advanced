let fullName = "Ivan Stefanov";
let firstName;
let lastName;

firstName = fullName.slice(0, 4);
console.log(firstName);

lastName = fullName.slice(5);
console.log(lastName);

firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);

lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);