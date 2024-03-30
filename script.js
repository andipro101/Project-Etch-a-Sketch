const GRID_CONTAINER = document.querySelector("#gridContainer");
const GRID_SIZE_BUTTON = document.querySelector("#gridSize")
const RANGE_SLIDER = document.querySelector("#rangeSlider")
const RANGE_OUTPUT = document.querySelector("#sliderValue")

window.addEventListener('load', () => {
    // grid(16);
    RANGE_OUTPUT.innerHTML = RANGE_SLIDER.value;
    grid(RANGE_SLIDER.value);
});




function handleSliderChange() {
    RANGE_OUTPUT.innerHTML = RANGE_SLIDER.value;
    GRID_CONTAINER.innerHTML = "";
    // Call grid function with new value
    grid(RANGE_SLIDER.value);
}

RANGE_SLIDER.addEventListener("input", handleSliderChange)


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


// GRID_SIZE_BUTTON.addEventListener("click", () => {
//     let gridSizeInput;
//     do {
//         gridSizeInput = prompt("Please enter a grid number between 1 and 100:");
//     } while ((gridSizeInput !== null) && (isNaN(gridSizeInput) || parseInt(gridSizeInput) < 1 || parseInt(gridSizeInput) > 100));

    
//     if (gridSizeInput !== null) {
//         if (gridSizeInput === ""){
//             gridSizeInput = 16
//         }
//         gridSizeInput = parseInt(gridSizeInput);
//         GRID_CONTAINER.innerHTML = "";
//         grid(gridSizeInput)
//     }
// });