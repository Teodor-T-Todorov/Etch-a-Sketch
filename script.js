const container = document.getElementById('container');

function makeGrid(rows,cols){

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(i = 0; i < (rows*cols); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrid(16,16);

const gridItem = document.getElementsByClassName('grid-item');

Array.from(gridItem).forEach(elem => 
    elem.addEventListener('mouseover', () => {elem.style.background = 'black';}));


