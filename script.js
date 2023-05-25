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

function newColor () {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    return boxColor = 'rgb(' + red + ',' + blue + ',' + green +')';
}

function increaseBlack (currentColor) {
    let newColor = currentColor.replace('rgb(', '').replace(')', '').split(",");
    let tempColor;
    for (let i = 0; i < 3; i++) {
        tempColor = parseInt(newColor[i]);
        newColor[i] = Math.max((tempColor - 25.5), 0);
    }
    return boxColor = 'rgb(' + newColor[0] + ',' + newColor[1] + ',' + newColor[2] +')';
}

//add event listener for mouse hover of theBox
function setGrid () {
    let items = document.querySelectorAll('.box');
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            //dynamically change backgroundColor of box on mouse hover
            if (!item.style.backgroundColor) {
                item.style.backgroundColor = newColor();
            }else {
                item.style.backgroundColor = increaseBlack(item.style.backgroundColor);
            }
        });
    });
}

//addeventlistener to button and event handler to trigger createGridfunction
let resize = document.querySelector('#resize');
resize.addEventListener("click", () => {
    let gridSize = null;
    do {
        gridSize = prompt("Please enter a canvas size (1-100):", 0);
    }while (gridSize && (gridSize < 1 || gridSize > 100));
    if (gridSize != null) {
        destroyGrid();
        createGrid(gridSize);
    }; 
});

//addeventlistener to button to reset image on grid at current size grid
let reset = document.querySelector('#reset');
reset.addEventListener("click", () => {
    let currentRows = document.getElementById("container");
    let gridSize = currentRows.childNodes.length;
    if (gridSize != null) {
        destroyGrid();
        createGrid(gridSize);
    }; 
});

createGrid();