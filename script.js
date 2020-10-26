const gridContainer = document.getElementById('gridContainer');

let isThereGrid = false;

function makeGrid(){
    if(isThereGrid = true)
    {
        gridContainer.innerHTML = "";
    }

    let size = Number(prompt("Type a number for nxn size"));
    gridContainer.style.setProperty('--grid-rows', size);
    gridContainer.style.setProperty('--grid-cols', size);

    for(i = 0; i < (size*size); i++){
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = "grid-item";
    }

    const gridItem = document.getElementsByClassName('grid-item');

    Array.from(gridItem).forEach(elem => 
        elem.addEventListener('mouseover', () => {elem.style.background = 'black';})
    );

    isThereGrid = true;
}

const button = document.querySelector('button');

button.addEventListener('click', makeGrid)



