let element = document.body;
let firstChild = element.firstElementChild; // first ul (fruits)
//firstChild.style.backgroundColor = "lightgreen";

let vegetables = document.querySelector("#vegetables");
let parent = vegetables.parentElement; // whole body
//parent.style.backgroundColor = "lightgreen";

let nextSibling = vegetables.nextElementSibling; // desserts ul 
//nextSibling.style.backgroundColor = "lightgreen";

let previosuSibling = vegetables.previousElementSibling; // desserts ul 
//previosuSibling.style.backgroundColor = "lightgreen";

let fruits = document.querySelector("#fruit");
let firstElementChild = fruits.firstElementChild; // first element of fruit ul (apple)
//firstElementChild.style.backgroundColor = "lightgreen";

let lastElementChild = fruits.lastElementChild; // first element of fruit ul (banana)
//lastElementChild.style.backgroundColor = "lightgreen";

let firstChildOfFruits = fruits.children[0]; // first element of fruit ul (apple)
//firstChildOfFruits.style.backgroundColor = "lightgreen";

let middleChildOfFruits = fruits.children[1]; // middle element of fruit ul (orange)
//middleChildOfFruits.style.backgroundColor = "lightgreen";

let lastChildOfFruits = fruits.children[2]; // last element of fruit ul (banana)
//lastChildOfFruits.style.backgroundColor = "lightgreen";

let children = Array.from(element.children);
children.forEach(child => child.style.backgroundColor = "skyblue");