// useful string properties and methods

let username = "Ivan Stefanov";
let phoneNumber = "123-456-7890";

let nameLength = username.length;
console.log(nameLength);

let firstLetter = username.charAt(0);
console.log(firstLetter);

let index = username.indexOf("S");
console.log(index);

let lastIndex = username.lastIndexOf("a");
console.log(lastIndex);

let trimmed = username.trim();
console.log(trimmed);

let upperCase = username.toUpperCase();
console.log(upperCase);

let lowerCase = username.toLocaleLowerCase();
console.log(lowerCase);

let newPhoneNumber = phoneNumber.replaceAll("-", "/");
console.log(newPhoneNumber);