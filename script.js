//js for odin-etch-a-sketch

//create a div box in javascript and display in div #container
const theBox = document.createElement('div');
theBox.setAttribute('class', 'box');

const theGrid = document.querySelector('#container');


//create a flex row to add boxes to
const theRow = document.createElement('div');
theRow.setAttribute('class', 'flexRow');




//loop to create four rows
//populate each row with four boxes

for (let i = 0; i < 4; i++){
    theRow.appendChild(theBox.cloneNode(true));
}

for (let i = 0; i < 4; i++) {
    theGrid.appendChild(theRow.cloneNode(true));
}