// create the container div 
const page = document.createElement("div");
page.classList.add("page");
document.documentElement.appendChild(page);
const container = document.createElement("div");
container.classList.add("container");
page.appendChild(container);
function createSquares(){
    for (let i = 0; i < 16; i++){
        const row = document.createElement("div");
        row.classList.add("row")
    
        for (let j = 0; j < 16; j++)
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


createSquares();
