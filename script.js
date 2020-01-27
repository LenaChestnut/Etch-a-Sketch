const container = document.querySelector('.grid-container');
let squareNumber = 16;

//BUTTONS

//Reset
let resetButton = document.querySelector(".reset");

resetButton.addEventListener('click', function() {
    squareNumber = prompt("Enter a number of squares in a side of the grid. Numbers above 120 aren't recommended");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid();
})

//Rainbow
let rainbowButton = document.querySelector(".rainbow");

rainbowButton.addEventListener('click', function() {
    squareNumber = prompt("Enter a number of squares in a side of the grid. Numbers above 120 aren't recommended");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < squareNumber; i++) {

        let columns = `repeat(${i + 1}, 1fr)`;
        container.style.gridTemplateColumns = columns;
    
        for (let j = 0; j < squareNumber; j++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
    
            gridSquare.addEventListener('mouseover', function() {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
    
                let randomColor = `rgb(${red}, ${green}, ${blue})`;
    
                gridSquare.style.backgroundColor = randomColor;
            })
    
            container.appendChild(gridSquare);
        }
    
    }

})

//GRID
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





