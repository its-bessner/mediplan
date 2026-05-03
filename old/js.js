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
let rowSelectedIndex = null;
const arrange = () => {
    const indexHighlight = 3;
    const groups = [];
    const clearClass = (classname) => {
        groups.forEach((group) => {
            group.forEach((item) => {
                item.classList.remove(classname);
            })
        })
    }
    const setClass = (target, group, classname) => {
        clearClass(classname);
        group.forEach((item) => {
            item.classList.add(classname);
        })
    }

    const target = document.querySelector(".target");
    data.forEach((row, rowindex) => {
        const group = [];
        groups.push(group);
        row.forEach((value, index) => {
            const newCol = document.createElement("div");
            newCol.innerHTML = value;

            if ((index === 2 & !value) || (index >= indexHighlight && value)) {
                newCol.classList.add("highlight");
            } else {

                if (rowindex % 2) {
                    newCol.classList.add("even");

                }
            }
            target.appendChild(newCol);
            group.push(newCol);
            newCol.group = group;

            newCol.addEventListener("click", () => {
                clearClass('selected')
                setClass(newCol, group,"selected");
                rowSelectedIndex = rowindex;
                console.log(rowSelectedIndex);
            })
            newCol.addEventListener("" +
                "mouseover", () => {
                setClass(newCol, group,"active");
            })
            newCol.addEventListener("mouseout", () => {

                clearClass("active");
            })

        })

        document.body.onkeyup = e => {
           if (e.key === "Escape") {
               clearClass("selected");
               rowSelectedIndex = null;
           }
           if(e.key === "ArrowUp") {
               if(rowSelectedIndex === null) {
                   rowSelectedIndex = groups.length - 1;
               }
               else {
                   rowSelectedIndex = Math.max(rowSelectedIndex -1,0);
               }

               row = row > 0 ? row - 1 : 0;
               let group = groups[rowSelectedIndex];
               clearClass("selected");
               setClass(row, group, "selected");
           }

           if(e.key === "Home") {
               rowSelectedIndex = 0;
               clearClass("selected");
               setClass(0, groups[0], "selected");
           }
           if(e.key === "End") {
               rowSelectedIndex = groups.length - 1;
               clearClass("selected");
               setClass(rowSelectedIndex, groups[rowSelectedIndex], "selected");
           }
           if(e.key === "ArrowDown" || e.key === "Enter") {
               if(rowSelectedIndex === null) {
                   rowSelectedIndex = 0;
               }
               else {
                   rowSelectedIndex = Math.min(rowSelectedIndex +1,groups.length - 1);
               }
               let group = groups[rowSelectedIndex];
               clearClass("selected");
               setClass(row, group, "selected");

           }
        }
    })

}



