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


const burgerMenu = document.querySelector("body>nav");
const burgerMenuIcon = document.querySelector(".fa-bars");
const main = document.querySelector("main");
const body = document.querySelector("body");

const toggleBurgerMenu = () => {
    if (getComputedStyle(burgerMenu).top === "-88px") {
        burgerMenu.style.top = "6.9rem";
        main.style.transition = "opacity 0.7s ease";
        main.style.opacity = 0.5;
        body.style.overflow = "hidden";
    } else {
        burgerMenu.style.top = "-8.8rem";
        main.style.opacity = 1;
    }
}

const removeBurgerMenu = () => {
    if (getComputedStyle(burgerMenu).top === "69px") {
        burgerMenu.style.top = "-8.8rem";
        main.style.opacity = 1;
        body.style.overflow = "visible";
    }
}

body.onclick = removeBurgerMenu;
burgerMenuIcon.onclick = toggleBurgerMenu;