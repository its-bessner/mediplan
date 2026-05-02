

const data = [
    [1, "ASS-100", 1, 0, 0, 0],
    [2, "Atorvastatin", 0, 0, 1, 0],
    [3, "Bisoprolol", 1, 0, 0, 0],
    [4, "Candesartan", 1, 0, 0, 0],
    [5, "Ezetimib", 1, 0, 0, 0],
    [6, "Folsäure (nur Fr.)", 1, 0, 0, 0],
    [7, "Jardiance", 1, 0, 0, 0],
    [8, "Metformin", 1, 0, 1, 0],
    [9, "Mirtazapin", 0, 0, 0, 0.5],
    [10, "Pantoprazol", 1, 0, 0, 0],
    [11, "Quilonum", 0, 0, 0, 1.5],
    [12, "Risperidon", 0, 0, 0, 1],
]

let indexRow = 0;

content =   document.querySelector("tbody");
data.forEach((row,rowIndex) => {
    const divRow = document.createElement("tr");
    divRow.addEventListener("click", (e) => {
        setSelected(rowIndex)
    })
    divRow.classList.add("highlight");
    content.appendChild(divRow);
    row.forEach ((field, fieldIndex) => {
        const divField = document.createElement("td");
        divField.innerText = field
        divRow.appendChild(divField);
        if (fieldIndex >1) {
            if(field) {
                divField.classList.add("highlight");
            }
        }
    })
})

setSelected = function (indexSelected) {
    indexRow = indexSelected;
    content.querySelectorAll("tr").forEach((item,index) => {
        item.classList.remove("selected");
        if(indexSelected === index) {
            item.classList.add("selected");
        }
    })
}


const down = function() {
    indexRow = Math.min(indexRow + 1, data.length-1);
    setSelected(indexRow);
}

const up = function() {
    indexRow = Math.max(indexRow - 1, 0);
    setSelected(indexRow);
}


setSelected(indexRow)




document.addEventListener("keyup", e  => {
    if(e.key === "ArrowDown" || e.key === "Enter") {
        down();
    }
    else if(e.key === "ArrowUp") {
        up()
    }
});


