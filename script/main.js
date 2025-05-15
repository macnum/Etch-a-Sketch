const gridContainer = document.querySelector('grid-container');
const containerWidth = 570;
const containerHeight = 570;
let numberOfBoxes = 16;

for (let i = 1; i <= numberOfBoxes; i++) {
    for (let j = 1; j <= numberOfBoxes; j++) {
        const grid = document.createElement("div")
        gridContainer.appendChild(grid)
    }

}