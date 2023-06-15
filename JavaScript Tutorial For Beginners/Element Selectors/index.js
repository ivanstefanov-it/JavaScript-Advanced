let element = document.getElementById("myTitle");
element.style.backgroundColor = "skyblue";

let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if (fruit.checked) {
        console.log(fruit.value);// apple
    }
});

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";
vegetables[1].style.backgroundColor = "skyblue";
vegetables[2].style.backgroundColor = "lightgreen";

let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "skyblue";
desserts[1].style.backgroundColor = "lightgreen";
desserts[2].style.backgroundColor = "skyblue";

let titleElement = document.querySelector("#myTitle");
titleElement.style.backgroundColor = "lightgreen";

let dessertsElement = document.querySelector(".desserts");
dessertsElement.style.backgroundColor = "lightgreen";

let liElement = document.querySelector("li");
liElement.style.backgroundColor = "skyblue";

let labelElement = document.querySelector("[for]");
labelElement.style.backgroundColor = "skyblue";

let titleElements = document.querySelectorAll("#myTitle");
titleElements.forEach(el => {el.style.backgroundColor = "skyblue";});

let dessertsElements = document.querySelectorAll(".desserts");
dessertsElements.forEach(el => {el.style.backgroundColor = "lightgreen";});

let liElements = document.querySelectorAll("li");
liElements.forEach(el => {el.style.backgroundColor = "skyblue";});

let labelElements = document.querySelectorAll("[for]");
labelElements.forEach(el => {el.style.backgroundColor = "lightgreen";});