let fruits = ["banana", "apple", "orange", "mango"];

for (let fruit of fruits) {
    console.log(fruit);//banana apple orange mango
}

fruits = fruits.sort();

for (let fruit of fruits) {
    console.log(fruit);//apple banana mango orange
}

fruits = fruits.sort().reverse();

for (let fruit of fruits) {
    console.log(fruit);//orange mango banana apple
}