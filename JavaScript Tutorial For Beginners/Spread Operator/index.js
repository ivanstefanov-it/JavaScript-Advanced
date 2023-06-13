let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(...numbers);//1 2 3 4 5 6 7 8 9

/*
let maximum = Math.max(numbers);
console.log(maximum);//NaN
*/
let maximum = Math.max(...numbers);
console.log(maximum);//9

let userName = "Ivan Stefanov"
console.log(...userName);//I v a n   S t e f a n o v

let class1 = ["SpongeBob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

class1.push(class2);

console.log(class1);//"SpongeBob" "Patrick" "Sandy"3: (3) ['Squidward', 'Mr.Krabs', 'Plankton']

class1.push(...class2);

console.log(...class1);//SpongeBob Patrick Sandy (3) ['Squidward', 'Mr.Krabs', 'Plankton'] Squidward Mr.Krabs Plankton