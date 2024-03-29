const gridContainer = document.querySelector("#gridContainer");

const divSquare = document.createElement("div");
divSquare.classList.add("square");


for (let line = 0; line < 16; line++) {
    for (let row = 0; row < 16; row++){
        let divSquareClone = divSquare.cloneNode(true);
        gridContainer.appendChild(divSquareClone);
    }
}