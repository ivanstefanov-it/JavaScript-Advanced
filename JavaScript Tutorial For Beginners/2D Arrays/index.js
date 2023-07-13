// 2D array = an array of arrays

let fruits = ["apples", "oranges", "bananas"];
let vagetables = ["carrots", "onions", "patatoes"];
let meats = ["eggs", "chicken", "fish"];

let groseryList = [fruits, vagetables, meats];

for (let list of groseryList) {
    console.log(list);//['apples', 'oranges', 'bananas'] ['carrots', 'onions', 'patatoes'] ['eggs', 'chicken', 'fish']
}

for (let list of groseryList) {
    for (let food of list) {
        console.log(food);//apples oranges bananas carrots onions patatoes eggs chicken fish
    }
}

console.log(groseryList[0][0]);//apples
console.log(groseryList[0][2]);//bananas
console.log(groseryList[2][0]);//eggs
console.log(groseryList[2][2]);//fish