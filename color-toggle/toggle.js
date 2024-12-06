document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const button = document.getElementById('color-change');

    const originColor = window.getComputedStyle(body).backgroundColor || "rgb(255, 255, 255)"; // Pokud neexistuje, nastavíme bílou barvu
    const secondColor = "rgb(255, 0, 0)";

    button.addEventListener('click', () => {
        body.style.backgroundColor = body.style.backgroundColor === secondColor ? originColor : secondColor;
    });
})