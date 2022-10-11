let selectedRow = null

function onFormSubmit() {
    if (validate()) {
        let inpdata = readinpdata();
        if (selectedRow == null)
            insertNewtask(inpdata);
        else
            updateRecord(inpdata);
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
    cell1.innerHTML = table.rows.length-1;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.taskName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = Date();
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)"><i class="fa fa-trash-o"></i></a>`;
}

function resetForm() {
    document.getElementById("taskName").value = "";
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
        const bColText = b.querySelector(`td:nth-child(${ col + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirArrow) : (-1 * dirArrow);
    });

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    tBody.append(...sortedRows);

    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ col + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ col + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".list th").forEach(hCell => {
    hCell.addEventListener("click", () => {
        const tEle = hCell.parentElement.parentElement.parentElement;
        const hIndex = Array.prototype.indexOf.call(hCell.parentElement.children, hCell);
        const currAsc = hCell.classList.contains("th-sort-asc");

        sortTableByColumn(tEle, hIndex, !currAsc);
    });
});
