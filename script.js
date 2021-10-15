let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {

    
    let grid = document.getElementById("grid");
    
    if(numRows == 0 && numCols == 0){
        let newRow = document.createElement("tr")
        let cell = document.createElement("td")
        initializeCell(cell)
        cell.className = "uncolored";
        newRow.appendChild(cell);
        grid.appendChild(newRow);
    
    numCols++;
        
    }
    else{

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

//Adds a col
function addC() {

    if(numRows == 0 && numCols == 0){
        let newRow = document.createElement("tr")
        let cell = document.createElement("td")
        initializeCell(cell)
        cell.className = "uncolored";
        newRow.appendChild(cell);
        grid.appendChild(newRow);
    
    
     numCols++   
    }

    else{
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
function removeR() {
    let grid = document.getElementById("grid");
    grid.deleteRow(numRows-1);
    numRows--;
}
function removeC() {
    let grid = document.getElementById("grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;

    for(let i = 0; i < allRows.length; i++) {
        allRows[rowCounter].removeChild(allRows[rowCounter].lastChild);
        rowCounter++;  
    }
    numCols--;

}
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected); 
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

let cells = document.getElementsByTagName("td");
let cellList = [...cells];

for (let i=0; i < cellList.length; i++) {
    const cell = cellList[i];
    initializeCell(cell)
}

function clearAll() {
    let allCells = document.querySelectorAll("td");
    let allCellsList = [...cells];
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = 'lightpink';
        cell.classList.add("uncolored");
    })
}
function fill() {
    let allCells = document.querySelectorAll("td");
    let allCellsList = [...cells];
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = colorSelected;
        cell.classList.remove("uncolored");
    })
}
function fillU(){
    content = document.querySelectorAll('td')   
    content.forEach(element => {
        if(element.style.backgroundColor === 'lightpink' || element.style.backgroundColor === '')
        {
            if(colorSelected == "Red")
                element.style.backgroundColor = 'Red' ;
            else if(colorSelected == "Blue")
                element.style.backgroundColor = 'blue' ;
            else if(colorSelected == "Yellow")
                element.style.backgroundColor = 'yellow' ;
            else if(colorSelected == "Green")
                element.style.backgroundColor = 'green' ;
        }
    });
}


