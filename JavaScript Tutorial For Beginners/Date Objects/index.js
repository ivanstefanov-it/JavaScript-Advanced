// The Date object is used to work with dates and times

let date = new Date();
console.log(date);// Wed Jun 14 2023 11:25:32 GMT+0300 (Eastern European Summer Time)

date = date.toLocaleString();
console.log(date);// 6/14/2023 11:27:10 AM

document.getElementById("myLabel").innerHTML = date;

let zeroDate = new Date(0);
console.log(zeroDate);//Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let dayOfWeek = date.getDay();
let hour = date.getHours();
let minutes = date.getMinutes();

console.log(year);// 2023
console.log(month);// 5
console.log(day);// 14
console.log(dayOfWeek);// 3
console.log(hour);// 11
console.log(minutes);// 35