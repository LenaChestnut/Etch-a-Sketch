const container = document.querySelector('.grid-container');
let squareNumber = 16;

for (let i = 0; i < squareNumber; i++) {

    let columns = `repeat(${i + 1}, 1fr)`;
    container.style.gridTemplateColumns = columns;

    for (let j = 0; j < squareNumber; j++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
        container.appendChild(gridSquare);
    }

}
