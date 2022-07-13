wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animate__animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();

const secondHeader = document.querySelector(".second-header");

const texts = [" Swam Htet Paing.", " from Myanmar.", " a Web-Developer."];

let index = 0;
let count = 0;

let currentText = "";
let letter = "";

function typingAuto() {
    console.log("Hello")
    if (index === 3) {
        index = 0;
    }
    currentText = texts[index];
    letter = currentText.slice(0, ++count);
    secondHeader.textContent = letter;
    if (letter.length === currentText.length) {
        count = 0;
        index++;
    }
}

setInterval(typingAuto, 200)