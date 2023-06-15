const nameTag = document.createElement("h1");
//nameTag.innerHTML = window.prompt("Enter your name"); //.innerHTML is vulnerable to XSS attacks
//document.body.append(nameTag);

//nameTag.textContent = window.prompt("Enter your name"); //.textContent is more secure
//document.body.append(nameTag);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
//myList.append(listItem); //Last
myList.prepend(listItem); //First