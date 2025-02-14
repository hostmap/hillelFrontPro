"use strict";

const tableContainer = document.getElementById("table-container");

const table = document.createElement("table");

const headerRow = table.insertRow();
headerRow.insertCell().textContent = "";
for (let i = 1; i <= 10; i++) {
  headerRow.insertCell().textContent = i;
}

for (let i = 1; i <= 10; i++) {
  const row = table.insertRow();
  row.insertCell().textContent = i;
  for (let j = 1; j <= 10; j++) {
    const cell = row.insertCell();
    cell.textContent = i * j;
  }
}

tableContainer.appendChild(table);
