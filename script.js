const GRIDSIDE = 600;
let squaresPerSide = 16;


const sketchArea = document.getElementById("grid-container");
const sliderContainer = document.getElementById("slider-container");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value}`;

sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function setCellColor() {
    this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide) {
    const numOfCells = squaresPerSide * squaresPerSide;
    const widthOrHeight = `${(GRIDSIDE/squaresPerSide) - 2}px`;

    for (let i = 0; i < numOfCells; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseenter", setCellColor)
    }
}

function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

slider.oninput = function () {
    let txt = `${this.value} x ${this.value}`;
    sliderValue.innerHTML = txt;
    removeGridCells();
    createGridCells(this.value);
}

createGridCells(16);