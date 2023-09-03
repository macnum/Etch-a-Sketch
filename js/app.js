const container = document.querySelector(".sketch-container");

const item = document.querySelector(".items");

function createGrid(x) {
	for(let i = 1; i <= x;i++){
		for(let j = 1; j <= x;j++){

		const newDiv = document.createElement('div');
		newDiv.classList.add("items")
		newDiv.textContent = `${i * j}`
		container.appendChild(newDiv)
		}
	}
	
}
createGrid(16)