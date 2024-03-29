const gridContainer = document.querySelector("#gridContainer");

const divSquare = document.createElement("div");
divSquare.classList.add("square");



function changeColorPermanent(event) {
    event.target.style.backgroundColor = 'red';
    event.target.removeEventListener('mouseenter', changeColorPermanent);
}





function grid(number){
    for (let line = 0; line < number; line++) {
        for (let row = 0; row < number; row++){
            let divSquareClone = divSquare.cloneNode(true);
            divSquareClone.addEventListener('mouseenter', changeColorPermanent);
            gridContainer.appendChild(divSquareClone);
        }
    }
}

grid(16)

