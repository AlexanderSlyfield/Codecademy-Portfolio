const inputElements = document.querySelectorAll("input:not([type='submit']), textarea");
const button = document.querySelector("button");
const script = document.querySelector("head script:nth-of-type(2)")

const resetInput = () => {
    inputElements.forEach(input => input.value = "");
};

if (button) {
    button.onclick = resetInput;
};




const ul = document.querySelectorAll("#skills ul");
const div = document.querySelector("#skills>div")

const pauseCarosel = () => {
    if (script.getAttribute("src") === "/resources/javascript/script.js") {
        for (let list of ul) {
            list.style.animationPlayState = "paused";
        };
    }
};

const playCarosel = () => {
    if (script.getAttribute("src") === "/resources/javascript/script.js") {
        for (let list of ul) {
            list.style.animationPlayState = "running";
        };
    };
};

if (div) {
    div.onmouseenter = pauseCarosel;
    div.onmouseleave = playCarosel;
}

