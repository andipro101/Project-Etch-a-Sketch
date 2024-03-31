const GRID_CONTAINER = document.querySelector("#gridContainer");
const GRID_BORDER_BUTTON = document.querySelector("#gridBorder");
const RANGE_SLIDER = document.querySelector("#rangeSlider");
const RANGE_OUTPUT = document.querySelector("#sliderValue");
const RESET_BUTTON = document.querySelector("#reset");
const CONTAINERS = document.querySelectorAll(".colorsContainer");

let isBorderOn = false;
let currentColor = 'black';


document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

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
    updateBorder();
}

function updateBorder() {
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
    if (event.buttons === 1) {
        event.target.style.backgroundColor = currentColor;
    }
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
            divSquareClone.addEventListener('mousemove', changeColorPermanent);
            GRID_CONTAINER.appendChild(divSquareClone);
        }
    }
    updateBorder();
}

document.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        isMouseDown = true;
    }
});


document.addEventListener('mouseup', () => {
    isMouseDown = false;
});



RESET_BUTTON.addEventListener("click",()=>{
    GRID_CONTAINER.innerHTML = "";
    grid(RANGE_SLIDER.value);
});

GRID_BORDER_BUTTON.addEventListener("click", toggleBorder);
RANGE_SLIDER.addEventListener("input", handleSliderChange);

CONTAINERS.forEach(container => {
    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('colorButton')) {
            if (event.target.id === 'random') {
                currentColor = getRandomColor();
            } else {
                currentColor = event.target.id;
            }
        }
    });
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
