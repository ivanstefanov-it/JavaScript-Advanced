// while loop - repeat some code whili some condition is true. Potentially infinite

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name")
}

console.log("Hello", userName);