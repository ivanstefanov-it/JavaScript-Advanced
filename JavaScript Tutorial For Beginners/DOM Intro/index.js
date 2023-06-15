// DOM = Document Object Model (API)
//       An interface for changing the content of a page

console.log(document.title);// Document
console.log(document.URL);// http://127.0.0.1:5500/

document.title = "Some title";
console.log(document.title);// Some title

//document.location = "https://www.google.bg";

document.body.style.backgroundColor = "skyblue";
document.getElementById("myDiv").innerHTML = "Hello!";