//js for odin-etch-a-sketch

//create a div box in javascript and display in div #container
const theBox = document.createElement('div');
theBox.setAttribute('class', 'box');

const theGrid = document.querySelector('#container');


//create a flex row to add boxes to
const theRow = document.createElement('div');
theRow.setAttribute('class', 'flexRow');





//loop to create 16 rows
//populate each row with 16 boxes
function createGrid(gridsize = 16) {
    for (let i = 0; i < gridsize; i++){
        theRow.appendChild(theBox.cloneNode(true));
    }

    for (let i = 0; i < gridsize; i++) {
        theGrid.appendChild(theRow.cloneNode(true));
    }
    setGrid();
}

function destroyGrid() {
    while (theGrid.firstChild) {
        theGrid.removeChild(theGrid.firstChild);
    }
    while (theRow.firstChild) {
        theRow.removeChild(theRow.firstChild);
    }
}

//add event listener for mouse hover of theBox
function setGrid () {
let items = document.querySelectorAll('.box');
items.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = 'black';
    });
});
}

//dynamically change backgroundColor of box on mouse hover

//addeventlistener to button and event handler to trigger createGridfunction
let reset = document.querySelector('#resize');
reset.addEventListener("click", () => {
    let gridSize;
    do {
        gridSize = prompt("Please enter a grid size", 0);
    }while (gridSize && (gridSize < 1 || gridSize > 100));
    destroyGrid();
    createGrid(gridSize);
});
createGrid();