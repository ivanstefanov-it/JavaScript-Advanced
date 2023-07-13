//method chaining - calling one method after another in one continuous line of code

let username = "ivan";

//let firstLetter = username.charAt(0);
//firstLetter = firstLetter.toUpperCase();
//console.log(firstLetter);

let firstLetter = username.charAt(0).toUpperCase().trim();
console.log(firstLetter);