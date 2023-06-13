let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square).forEach(print);
let cubes = numbers.map(cube).forEach(print);


function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

function print(element){
    console.log(element);
}