//js for odin-etch-a-sketch

//create a div box in javascript and display in div #container
const theBox = document.createElement('div');
theBox.setAttribute('id', 'box');
const theGrid = document.querySelector('#container');
theGrid.appendChild(theBox);