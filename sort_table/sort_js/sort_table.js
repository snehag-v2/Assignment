let selectedRow = null

function onFormSubmit() {
    if (validate()) {
        let inpdata = readinpdata();
        if (selectedRow == null)
            insertNewtask(inpdata);
        else
            // updateRecord(inpdata);
        resetForm();

    }
}

function readinpdata() {
    let inpdata = {};
    inpdata["taskName"] = document.getElementById("taskName").value;
    return inpdata;
}

function insertNewtask(data) {
    let table = document.getElementById("taskList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    let totalRowCount = document.getElementById("taskList tr")
    cell1.innerHTML = table.rows.length;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.taskName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = new Date().toLocaleString();
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)"><i class="fa fa-trash-o"></i></a>`;
}

function resetForm() {
    document.getElementById("taskName").value = '';
    selectedRow = null;
}

function onDelete(td) {
    if (confirm('Confirm delete!!')) {
        row = td.parentElement.parentElement;
        document.getElementById("taskList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("taskName").value == "") {
        isValid = false;
        document.getElementById("taskNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("taskNameValidationError").classList.contains("hide"))
            document.getElementById("taskNameValidationError").classList.add("hide");
    }
    return isValid;
}

// sort function

function sortTableByColumn(table, col, asc = true) {
    const dirArrow = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ col + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ col + 1 })`).textContent.trim();  // compare

        return aColText > bColText ? (1 * dirArrow) : (-1 * dirArrow);
        
    });

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    tBody.append(...sortedRows);     // remembering the newly added and sorted elements.
    //tBody.insertRow(...sortedRows);      // a row is getting inserted on the top.

    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ col + 1})`).classList.toggle("th-sort-asc", asc);      // asc
    table.querySelector(`th:nth-child(${ col + 1})`).classList.toggle("th-sort-desc", !asc);  // desc
}

document.querySelectorAll(".list th").forEach(hCell => {
    hCell.addEventListener("click", () => {
        const tEle = hCell.parentElement.parentElement.parentElement;
        const hIndex = Array.prototype.indexOf.call(hCell.parentElement.children, hCell);
        const currAsc = hCell.classList.contains("th-sort-asc");

        sortTableByColumn(tEle, hIndex, !currAsc);
    });
});

// update?
// localstorage?
// let arr = [1,3,4,2,5]
// arr.sort();
// console.log(arr)

// arr = [1,2,4,3,4,5]
// task = {
//     name: arr[1],
//     id : 123   
// }
// console.log(task.name);


function fn(){
    let arr = [1,2,3,4,5,56,565,321,21,2,12,12]
    if(arr.length >10)
        return arr.slice(0,10)
    return arr
}

console.log(fn())