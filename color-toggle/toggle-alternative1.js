document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const button = document.getElementById('color-change');

    const originColor = window.getComputedStyle(body).backgroundColor || "rgb(255, 255, 255)"; // Předpokládáme bílou
    const secondColor = "rgb(255, 0, 0)";

    button.addEventListener('click', () => {
        if (body.style.backgroundColor === secondColor) {
            body.style.backgroundColor = originColor;
        } else {
            body.style.backgroundColor = secondColor;
        }
    });
})