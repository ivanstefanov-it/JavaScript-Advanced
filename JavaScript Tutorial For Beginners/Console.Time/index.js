//console.time() = Starts a timer that you can use to track how long an operation takes.

//start
console.time("Response time");
//alert("Click the OK button!");
setTimeout(() => console.log("Hello!"), 3000);

//end
console.timeEnd("Response time");