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
        else if (row.getElementsByTagName('td')[0].innerHTML == "3" && one_check.checked == true) {
            row.style.display = "none";
        }
        else {
            row.style.display = "table-row";
        }
    }
}

function sortTable() {
  var switching, i, x, y, shouldSwitch;
  switching = true;
  while (switching) {
    switching = false;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[2];
      y = rows[i + 1].getElementsByTagName("td")[2];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase().substring(0,1) > y.innerHTML.toLowerCase().substring(0,1)) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

sortTable();