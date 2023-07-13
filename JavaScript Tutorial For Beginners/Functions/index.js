//function = define code once, and use it many times. To perform some code, call the function name.

let userName = "Ivan"
let age = 30;
happyBirthday(userName, age);

function happyBirthday(userName, age){
   console.log("Happy birthday to you!");
   console.log("Happy birthday to you!");
   console.log("Happy birthday dear", userName);
   console.log("Happy birthday to you!");
   console.log("You are", age,"years old!");
}