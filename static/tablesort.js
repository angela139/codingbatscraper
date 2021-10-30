const table = document.getElementsByClassName('table')[0];
const cells = table.getElementsByTagName('td');
const rows = table.getElementsByClassName('student_row');
const zero_check = document.getElementById("zero");
const one_check = document.getElementById("one");
const three_check = document.getElementById("three");

for (let cell of cells) {
    if (cell.innerHTML == "Done") {
        cell.style.color = "green";
    }
}
function show(){
    for (let row of rows) {
        if (row.getElementsByTagName('td')[0].innerHTML == "0" && zero_check.checked == true) {
            row.style.display = "none";
        }
        else if (row.getElementsByTagName('td')[0].innerHTML == "1" && one_check.checked == true) {
            row.style.display = "none";
        }
        else if (row.getElementsByTagName('td')[0].innerHTML == "3" && three_check.checked == true) {
            row.style.display = "none";
        }
        else {
            row.style.display = "table-row";
        }
    }
}