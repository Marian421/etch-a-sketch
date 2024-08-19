// create container for grid and button
const page = document.createElement("div");
page.classList.add("page");
document.documentElement.appendChild(page);

// create button to change size of grid
const changeGridSizeBtn = document.createElement("button");
changeGridSizeBtn.classList.add("gridBtn");
changeGridSizeBtn.textContent = "Change Size";

// add event listener for the btn

changeGridSizeBtn.addEventListener('click', () => {
    let size = prompt("new size of grid, between 2-100");
    while ( size < 2 || size > 100)
    {
        size = prompt("between 2 and 100 please");
    }
    deleteGrid();
    createSquares(size);
})

//create container for the grid
const container = document.createElement("div");
container.classList.add("container");

// append btn and grid
page.appendChild(changeGridSizeBtn);
page.appendChild(container);

// get size of grid
let size = 16;

// function for creating grid
function createSquares(gridSize){
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("row")
    
        for (let j = 0; j < gridSize; j++)
        {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener('mouseover', () =>
            {
                square.setAttribute('style', 'background-color:blue');
            });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function deleteGrid() {
    let elements = document.getElementsByClassName("row");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
createSquares(size);
//deleteGrid();



