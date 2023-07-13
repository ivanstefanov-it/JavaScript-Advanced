//if statement - a basic form of decision making
//               if a contition is true, then do something
//               if not, then don't do it

let age = 70;

if(age >= 65){
    console.log("You are a senior citizen!");
}
else if (age >= 18) {
    console.log("You are an adult!");
} 
else if(age < 0){
    console.log("You haven't been born yet!");
}
else {
    console.log("You are a child!");
}


let online = true;

if (online) {
    console.log("You are online!")
} 
else {
    console.log("You are offline!")
}