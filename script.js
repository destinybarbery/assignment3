let numRows = 0;
let numCols = 0;
let colorSelected; 

//This function adds a row 
function addR() {

    
    let grid = document.getElementById("grid");
    
    if(numRows == 0 && numCols == 0){ //if we are starting at 0
        let newRow = document.createElement("tr")
        let cell = document.createElement("td")
        initializeCell(cell)
        cell.className = "uncolored";
        newRow.appendChild(cell);
        grid.appendChild(newRow);
    
    numCols++;
        
    }
    else{//when there are cells present 

        let newRow = document.createElement("tr");


        for(let i = 0; i < numCols; i++) {
            let cell = document.createElement("td");
            initializeCell(cell)
            cell.className = "uncolored";
            newRow.appendChild(cell);
        }
    
    grid.appendChild(newRow);
    numRows++;
}   

}

//Adds a column
function addC() {

    if(numRows == 0 && numCols == 0){ //if we are starting at 0
        let newRow = document.createElement("tr")
        let cell = document.createElement("td")
        initializeCell(cell)
        cell.className = "uncolored";
        newRow.appendChild(cell);
        grid.appendChild(newRow);
    
    
     numCols++   
    }

    else{ //if we have cells already
        let grid = document.getElementById("grid");
        let all = document.querySelectorAll("tr");
        let rowCounter = 0;




        for(let i = 0; i < all.length; i++) {
            let cell = document.createElement("td");
            initializeCell(cell)
            all[rowCounter].appendChild(cell);
            rowCounter++;
        }

    numCols++;

    }
}
function initializeCell(cell) {
    cell.addEventListener("click", selected);
    cell.classList.add("uncolored");
    cell.addEventListener("click", e => {
        coloring = true
    });
    cell.addEventListener("click", e => {
        if (colorSelected) {
            cell.style.backgroundColor = colorSelected;
            cell.classList.remove("uncolored");
        }
    });
    cell.addEventListener("click", e => {
        if (colorSelected) {
            colorSelected = false;
        }
    })
}
