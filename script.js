//js for odin-etch-a-sketch

//create a div box in javascript and display in div #container
const theBox = document.createElement('div');
theBox.setAttribute('id', 'box');
const theGrid = document.querySelector('#container');


//create a flex row to add boxes to
const theRow = document.createElement('div');
theRow.setAttribute('id', 'flexRow');

theGrid.appendChild(theRow);
theRow.appendChild(theBox);

//loop to create four rows
//populate each row with four boxes