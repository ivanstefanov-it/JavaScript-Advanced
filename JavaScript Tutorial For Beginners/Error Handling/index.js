// Error = object with a description of something went wrong

//         Can't  open a file
//         Lose connection
//         User types incorrect input
//         TypeError

try{
    let input = window.prompt("Enter a number");
    input = Number(input);

    if(isNaN(input)) throw "That was't a number!"
    if(input == "") throw "That was empty!"

    console.log(`${input} is a number`);
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes!");
}