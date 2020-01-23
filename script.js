const container = document.querySelector('.grid-container');
let squareNumber = 16;

let resetButton = document.createElement('button');


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

