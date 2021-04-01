const gridContainer = document.querySelector('#gridContainer');


function makeGrid(){
    gridContainer.innerHTML = "";
    
    let size = Number(prompt("Type a number for nxn size grid. Limit is 64"));

    if(size > 64)
    {
        makeGrid();
    }

    //Generate grid boxes

    gridContainer.style.setProperty('--grid-rows', size);
    gridContainer.style.setProperty('--grid-cols', size);

    for(i = 0; i < (size*size); i++){
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = "grid-item";
    }

    const gridItem = document.querySelectorAll('.grid-item');

    Array.from(gridItem).forEach(elem => 
        elem.addEventListener('mouseover', () => {elem.style.background = '#' + Math.floor(Math.random()*16777215).toString(16)})
    );

}

function clearGrid(){
    const gridItem = document.getElementsByClassName('grid-item');
    Array.from(gridItem).forEach(elem => elem.style.background = 'white')
}

const bSize = document.querySelector('#size');
const bReset = document.querySelector('#reset');

bSize.addEventListener('click', makeGrid)
bReset.addEventListener('click', clearGrid)




