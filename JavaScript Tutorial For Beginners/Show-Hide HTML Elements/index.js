const myBytton = document.querySelector("#myButton");
const myImage = document.querySelector("#myImage");

myBytton.addEventListener("click", () => {

    //if (myImage.style.display == "none") {
    //    myImage.style.display = "block"
    //}
    //else{
    //    myImage.style.display = "none"
    //}

    if (myImage.style.visibility == "hidden") {
        myImage.style.visibility = "visible"
    }
    else{
        myImage.style.visibility = "hidden"
    }
});