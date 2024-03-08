const container  = document.querySelector('.container');
const btnBox = document.querySelector('button');


function popUp() {
    let input = prompt("Enter a number between 1 and 100");
    input = parseInt(input);
    return input;
}

function createGrid(gridSize) {
    'use strict';
    const gridRow = 560/gridSize;
    const gridColumn = 560/gridSize;


    for(let i = 0; i< gridSize;i++) {
        for(let j = 0; j < gridSize;j++) {
            const box  = document.createElement('div');
            box.classList.add('box');
            container.append(box);

            box.style.width = gridRow +'px';
            box.style.height = gridColumn +'px'
        }
    }
    
}
function checkInput(userInput) {

    if(!isNaN(userInput) && (userInput >0 && userInput <=100)) {

        console.log(userInput);
        createGrid(userInput);
        changeColor()
    }
    else {
        alert("Kindly enter a positive number between 1 and 100")
    }
}
btnBox.addEventListener('click', () => {
    container.innerHTML ='';
    const userInput = popUp();
    checkInput(userInput);


})



function changeColor() {
    const box = document.querySelectorAll('.box');
    box.forEach(item => {
        let color = colorBlack();
        item.addEventListener('mouseover', (e)=> {
            e.target.style.backgroundColor = color;
        })
    })
}







function colorBlack() {
    return 'black'
}




