const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let degrees = 0;
    timerId = setInterval(frame, 5);

    function frame(){
        if (degrees >= 360) {
            clearInterval(timerId);
        }
        else{
            degrees += 1;
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}
