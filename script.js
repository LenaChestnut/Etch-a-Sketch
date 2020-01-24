const container = document.querySelector('.grid-container');
let squareNumber = 16;

let resetButton = document.createElement('button');
resetButton.textContent = "Reset";
resetButton.addEventListener('click', function() {
    squareNumber = prompt("Enter a number of squares in a side of the grid. Numbers above 120 aren't recommended");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid();
})

document.querySelector('body').insertBefore(resetButton, container);

createGrid();

function createGrid() {
    for (let i = 0; i < squareNumber; i++) {

        let columns = `repeat(${i + 1}, 1fr)`;
        container.style.gridTemplateColumns = columns;
    
        for (let j = 0; j < squareNumber; j++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
    
            gridSquare.addEventListener('mouseover', function() {
                gridSquare.classList.add('hover');
            })
    
            container.appendChild(gridSquare);
        }
    
    }
}



