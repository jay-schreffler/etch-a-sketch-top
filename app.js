const grid = document.querySelector('.grid-work-area');
let gridSize = document.querySelector('.slider');
const setGridBtn = document.querySelector('#slider-btn');
const colorPicker = document.querySelector('#color-wheel');
const clearBtn = document.querySelector('#clear-btn');
const eraseBtn = document.querySelector('#erase-btn');
const drawClickBtn = document.querySelector('#draw-click');
const drawDragBtn = document.querySelector('#draw-drag');


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
             //mouse click draw
            drawClickBtn.addEventListener('click', function(){
                boxes.addEventListener('click', function(){
                    boxes.style.backgroundColor = `${colorPicker.value}`
                });
            })
            // mouse over draw
            drawDragBtn.addEventListener('click', function(){
                boxes.addEventListener('mouseover', function(){
                    boxes.style.backgroundColor = `${colorPicker.value}`
                });
            })
            //  });
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
    console.log(`Grid Size: ${gridSize.value}`);
    });

//clear button
clearBtn.addEventListener('click', function(){
    grid.innerHTML = '';
})

//erase button 
eraseBtn.addEventListener('click', function(){
    colorPicker.value = '#ffffff'
    console.log(colorPicker.value)
})

//draw click 

