const gridContainer = document.querySelector('.grid-container');

let numberOfBoxes = 5;
const containerWidth = 700;
const containerHeight = 600;

const gridWidth = containerWidth / numberOfBoxes;
const gridHeight = containerHeight / numberOfBoxes;


createGrid()
function createGrid() {
    for (let i = 1; i <= numberOfBoxes; i++) {
        for (let j = 1; j <= numberOfBoxes; j++) {
            const grid = document.createElement("div")
            grid.style.width = `${gridWidth}px`;
            grid.style.height = `${gridHeight}px`;
            grid.classList.add('grid');
            gridContainer.appendChild(grid);

        }

    }
}
let i = 0
gridContainer.addEventListener('mouseover', (e) => {
    const elem = e.target;
    if (!elem.matches('div.grid')) return;

    showHoverEffect(elem)
})

function showHoverEffect(gridItem) {
    gridItem.classList.add('hover');
}