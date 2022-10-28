function sortTableByColumn(table) {
    const dirArrow = asc ? 1 : -1;    //  is asc or desc
    const tBody = table.tBodies[0].parentElement[1];
}

function sortColumn(col){
    const rows = Array.from(tBody.querySelectorAll("tr"));
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ col + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ col + 1 })`).textContent.trim();  // compare
        aColText.localCompare(b.bColText) > bColText [a-b]:[b-a]
        return [];
        
    });
}
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    //tBody.append(...sortedRows);     // remembering the newly added and sorted elements.
    tBody.insertRow(...sortedRows);      // a row is getting inserted on the top.

    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ col + 1})`).classList.toggle("th-sort-asc", asc);      // asc
    table.querySelector(`th:nth-child(${ col + 1})`).classList.toggle("th-sort-desc", !asc);  // desc


document.querySelectorAll(".list th").forEach(hCell => {
    hCell.addEventListener("click", () => {
        const tEle = hCell.parentElement.parentElement.parentElement;
        const hIndex = Array.prototype.indexOf.call(hCell.parentElement.children, hCell);
        const currAsc = hCell.classList.contains("th-sort-asc");

        sortTableByColumn(tEle, hIndex, !currAsc);
    });
});

// sortColumn()  ?
// sortNumberColumn()  ?   no . or String.