let fruits = ["apple", "banana", "orange"];

console.log(fruits);//"apple", "banana", "orange"
console.log(fruits[0]);//"apple"
console.log(fruits[1]);//"banana"
console.log(fruits[2]);//"orange"

fruits[0] = "coconut";
console.log(fruits[0]);//"coconut"

fruits.push("lemon");//add an element
console.log(fruits);//"coconut", "banana", "orange", "lemon"

fruits.pop();//remove last element

fruits.unshift("mango");//add element to the beginning
console.log(fruits);//'mango', 'coconut', 'banana', 'orange'

fruits.shift();//removes element from beginning
console.log(fruits);//'coconut', 'banana', 'orange'

let length = fruits.length;
//let index = fruits.indexOf("apple");//-1
let index = fruits.indexOf("coconut");//0
console.log(index);