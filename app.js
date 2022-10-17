const grid = document.querySelector('.grid-work-area');
let gridSize = document.querySelector('.slider');
const setGridBtn = document.querySelector('#slider-btn')

    function createGrid(size){
        for(let i = 0; i < size * size; i++) {
            let boxes = document.createElement('div');
            //create divs for grid
             boxes.classList.add('box');
             grid.append(boxes);
             //style boxes
             boxes.style.border = '1px solid black';
             boxes.style.minHeight = '100%';
             boxes.style.minWidth = '100%';
             //set hover
             boxes.addEventListener('mouseover', function(){
                 boxes.style.backgroundColor = 'yellow'
             });
             // setup grid
            grid.style.display = 'grid';
            //set grid columns and rows
            grid.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
            grid.style.setProperty('grid-template-rows', `repeat(${size}, 1fr)`);
         }
    }

//set grid size
setGridBtn.addEventListener('click', function(){
    //clears previous grid layout
    grid.innerHTML = '';
    createGrid(gridSize.value)
    console.log(gridSize.value);
    });

