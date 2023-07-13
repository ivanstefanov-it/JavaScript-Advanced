// rest parameters (...) - represents an indefinite number of parameters(packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

/*
console.log(sum(a, b));

function sum(a, b){
    return a + b;
}
*/

/*
console.log(sum(a, b, c));

function sum(a, b, c){
    return a + b + c;
}
*/

/*
console.log(sum(a, b, c, d));

function sum(a, b, c, d){
    return a + b + c + d;
}
*/

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

console.log(sum(a, b));//3
console.log(sum(a, b, c));//6
console.log(sum(a, b, c, d));//10
console.log(sum(a, b, c, d, e));//15