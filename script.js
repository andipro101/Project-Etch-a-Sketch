const GRID_CONTAINER = document.querySelector("#gridContainer");
const GRID_SIZE = document.querySelector("#gridSize")
const DIV_SQUARE = document.createElement("div");

window.addEventListener('load', () => {
    grid(16);
});

function changeColorPermanent(event) {
    event.target.style.backgroundColor = 'red';
    event.target.removeEventListener('mouseenter', changeColorPermanent);
}


function grid(number){    
    DIV_SQUARE.classList.add("square");

    let size = 880 / number + "px"

    for (let line = 0; line < number; line++) {
        for (let row = 0; row < number; row++){
            let divSquareClone = DIV_SQUARE.cloneNode(true);
            divSquareClone.style.width = size;
            divSquareClone.style.height = size;
            divSquareClone.addEventListener('mouseenter', changeColorPermanent);
            GRID_CONTAINER.appendChild(divSquareClone);
        }
    }
}


GRID_SIZE.addEventListener("click", () => {
    let gridSizeInput;
    do {
        gridSizeInput = prompt("Please enter a grid number between 1 and 100:");
    } while ((gridSizeInput !== null) && (isNaN(gridSizeInput) || parseInt(gridSizeInput) < 1 || parseInt(gridSizeInput) > 100));

    if (gridSizeInput !== null) {
        gridSizeInput = parseInt(gridSizeInput);
        GRID_CONTAINER.innerHTML = "";
        grid(gridSizeInput)
    }
});