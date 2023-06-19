//windolw = interface used to takl to the web browser
//          DOM is a property of the window

console.dir(window);

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.scrollX);
console.log(window.scrollY);

console.log(window.location.href);// http://localhost:5500/
console.log(window.location.hostname);// localhost
console.log(window.location.pathname);// /
//window.location.href = "https://google.bg";

const button = document.querySelector("#myButton");
//button.addEventListener("click", () => { window.open("https://google.bg") });
//button.addEventListener("click", () => { window.close() });
//button.addEventListener("click", () => { window.print() });

window.alert("Hello");
//window.confirm("Press OK to continue");
let age = window.prompt("Enter your age");
 if (age < 18) {
    window.alert("You must be 18+ to visit this site!");
    window.close();
 }
