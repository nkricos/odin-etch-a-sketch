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

for (let i = 0; i < 16; i++){
    theRow.appendChild(theBox.cloneNode(true));
}

for (let i = 0; i < 16; i++) {
    theGrid.appendChild(theRow.cloneNode(true));
}


//add event listener for mouse hover of theBox
let items = document.querySelectorAll('.box');
items.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = 'black';
    });
});

//dynamically change backgroundColor of box on mouse hover