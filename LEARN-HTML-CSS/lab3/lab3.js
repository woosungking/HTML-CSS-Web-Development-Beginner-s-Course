const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

function changeImg() {
    for(let i = 0; i < allImg.length; i++) {
        allImg[i].src = "http://www.reactiongifs.com/r/2013/07/running.gif";
        allImg[i].alt = "change";
    }
}

const colorChange = document.getElementsByClassName("change-color")[0];
const text = document.getElementsByClassName("hidden")[0];
const allImg = document.querySelectorAll("img");

function changeColor() {
    document.body.style.backgroundColor = "red";
    text.innerText=`your color is red`;
    text.classList.toggle("hidden");

}

colorChange.addEventListener("click", changeColor);
console.log(colorChange);

changeImg();
