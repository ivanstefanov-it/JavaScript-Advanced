for (let i = 1; i <= 3; i++) {
   console.log(i);
}

console.log(i); // i is not defined

for (var i = 1; i <= 3; i++) {
   console.log(i);
}

console.log(i); //pint 4


doSomething();// i is not defined. var lives only in scope of a function
function doSomething(){
   for (var i = 1; i <= 3; i++) {
   }
}

let name = "Ivan";//global variable