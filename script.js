const GRID_CONTAINER = document.querySelector("#gridContainer");
const GRID_BORDER_BUTTON = document.querySelector("#gridBorder")
const RANGE_SLIDER = document.querySelector("#rangeSlider")
const RANGE_OUTPUT = document.querySelector("#sliderValue")

let isBorderOn = false;

window.addEventListener('load', () => {
    RANGE_OUTPUT.innerHTML = RANGE_SLIDER.value + "x" + RANGE_SLIDER.value;
    grid(RANGE_SLIDER.value);
});

function handleSliderChange() {
    RANGE_OUTPUT.innerHTML = RANGE_SLIDER.value + "x" + RANGE_SLIDER.value;
    GRID_CONTAINER.innerHTML = "";
    grid(RANGE_SLIDER.value);
}

function toggleBorder() {
    isBorderOn = !isBorderOn;
    const squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
        if (isBorderOn) {
            square.style.border = "1px solid black";
        } else {
            square.style.border = "none";
        }
    });
}

function changeColorPermanent(event) {
    event.target.style.backgroundColor = 'red';
    event.target.removeEventListener('mouseenter', changeColorPermanent);
}

function grid(number){    
    const DIV_SQUARE = document.createElement("div");
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

RANGE_SLIDER.addEventListener("input", handleSliderChange)
GRID_BORDER_BUTTON.addEventListener("click", toggleBorder)