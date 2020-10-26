const gridContainer = document.getElementById('gridContainer');

function makeGrid(rows,cols){

    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for(i = 0; i < (rows*cols); i++){
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = "grid-item";
    }
}

makeGrid(16,16);

const gridItem = document.getElementsByClassName('grid-item');

Array.from(gridItem).forEach(elem => 
    elem.addEventListener('mouseover', () => {elem.style.background = 'black';})
);

const menuContainer = document.getElementById('menu');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    Array.from(gridItem).forEach(elem => 
        elem.style.background = 'white')
})


