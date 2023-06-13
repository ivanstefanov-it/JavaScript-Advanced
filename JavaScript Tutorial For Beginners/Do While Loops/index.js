let userName;

do{
    userName = window.prompt("Enter your name")
}while(userName == "" || userName == null)

console.log("Hello", userName);