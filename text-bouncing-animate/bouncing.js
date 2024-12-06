const animateText = (element) => {
    let fontSize = parseFloat(element.style.fontSize);
    let maxFontSize = 50; // Maximální velikost
    let minFontSize = fontSize; // Původní velikost
    let increment = 1; // Krok změny velikosti

    // Nastavení nekonečného opakování animace
    setInterval(() => {
        // Zvýšení nebo snížení velikosti písma
        fontSize += increment;

        // Pokud velikost dosáhne maxima nebo minima, změníme směr
        if (fontSize >= maxFontSize || fontSize <= minFontSize) {
            increment *= -1;
        }

        // Aktualizace velikosti písma
        element.style.fontSize = fontSize + "px";
    }, 50); // Interval animace (nižší hodnota = plynulejší animace)
};

const modifyDiv = () => {
    const testDiv = document.getElementById("test-div");
    testDiv.innerText = "nazdar";
    testDiv.style.color = "#c21c1c";
    testDiv.style.fontSize = "16px";

    animateText(testDiv)
}

document.addEventListener("DOMContentLoaded", modifyDiv);
// alternativní zápisy event listeneru
/*
document.addEventListener("DOMContentLoaded", () => {
    modifyDiv()
});

document.addEventListener("DOMContentLoaded", function() {
    modifyDiv()
});
*/