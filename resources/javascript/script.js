const inputElements = document.querySelectorAll("input:not([type='submit']), textarea");
const button = document.querySelector("button");

const resetInput = () => {
    console.log("Ok its working here");
    inputElements.forEach(input => input.value = "");
};

button.onclick = resetInput;

