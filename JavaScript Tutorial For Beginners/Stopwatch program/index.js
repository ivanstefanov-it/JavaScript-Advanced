const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapseTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
   if (paused) {
      paused = false;
      startTime = Date.now() - elapseTime;
      intervalId = setInterval(updateTime, 75);
   }
});
pauseBtn.addEventListener("click", () => {
   if (!paused) {
      paused = true;
      elapseTime = Date.now() - startTime;
      clearInterval(intervalId);
   }
});
resetBtn.addEventListener("click", () => {
   paused = true;
   clearInterval(intervalId);
   startTime = 0;
   elapseTime = 0;
   currentTime = 0;
   hrs = 0;
   mins = 0;
   secs = 0;
   timeDisplay.textContent = "00:00:00";
});

function updateTime(){
   elapseTime = Date.now() - startTime;
   secs = Math.floor((elapseTime / 1000) % 60);
   mins = Math.floor((elapseTime / (1000 * 60)) % 60);
   hrs = Math.floor((elapseTime / (1000 * 60 * 60)) % 60);

   secs = pad(secs);
   mins = pad(mins);
   hrs = pad(hrs);

   timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

   function pad(unit){
      return (("0") + unit).length > 2 ? unit : "0" + unit;
   }
}