const gridContainer = document.querySelector('.grid-container');
const btn = document.querySelector("div.button");

function createGrid() {
    const containerWidth = 700;
    const containerHeight = 600;
    numberOfBoxes = getNumberOfBox();
    const gridWidth = containerWidth / numberOfBoxes;
    const gridHeight = containerHeight / numberOfBoxes;

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
function getNumberOfBox() {
    let number = prompt("Enter a number btw 1 and 100");
    if (number <= 100 && number >= 1) {
        number = Number(number)
    } else {
        alert("Try again");
        return;
    }
    return number;
}


btn.addEventListener('click', (e) => {
    gridContainer.textContent = "";
    if (!e.target.matches('div button')) return;
    createGrid();

    gridContainer.addEventListener('mouseover', (e) => {
        const elem = e.target;
        if (!elem.matches('div.grid')) return;

        showHoverEffect(elem)
    })
})


function showHoverEffect(gridItem) {
    gridItem.classList.add('hover');
}
