const table = document.getElementsByClassName('table')[0];
const cells = table.getElementsByTagName('td');
const rows = table.getElementsByClassName('student_row');
const block = document.getElementById('block_filter');
const form = document.querySelector("#filter");

for (let cell of cells) {
    if (cell.innerHTML == "Done") {
        cell.style.color = "green";
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    for (let row of rows) {
        if (row.getElementsByTagName('td')[0].innerHTML == block.value){
            row.style.display = "table-row";
        }
        else {
            row.style.display = "none";
        }
    }
});

form.addEventListener("reset", function (event) {
    event.preventDefault();
    for (let row of rows) {
        row.style.display = "table-row";
    }
})