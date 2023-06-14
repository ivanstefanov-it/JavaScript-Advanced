//promise = object that encapsulates the result of an asynchronous operation.
//          Let asynchronous methods return value like synchronous methods
//          "I promise to return something in the future"

//          the STATE is 'pending'

const promise = new Promise((resolve, reject) => {
    let fileLoaded = false;

    if (fileLoaded) {
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }

});

promise.then((value) => console.log(value)).catch(error => console.log(error));

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));