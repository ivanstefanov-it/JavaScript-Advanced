//synchronous code =  In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

//asynchronous code = Out of sequence.
//      Example:      Access a database
//                    Fetch a file
//                    Tasks that take time
//                    (start now, finish later)

//synchronous
console.log("Start");
console.log("This step is synchronous");
console.log("End");

//asynchronous
console.log("Start");
setTimeout(() => console.log("This step is asynchronous"), 5000);
console.log("End");