"use strict";

var tables_container = document.getElementById('tables'); ////////////////////////////////////////

var table_section = document.createElement('div');
table_section.id = 'imovel-table';
var table = document.createElement('table');

function createTableHead() {
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  var colsN = 2;

  for (var i = 0; i < colsN; i++) {
    var td = document.createElement('td');
    td.innerHTML = "thead-".concat(i);
    tr.appendChild(td);
    thead.appendChild(tr);
  }

  table.appendChild(thead);
}

var func = function func() {
  return false;
};

function createTableBody() {
  var tbody = document.createElement('tbody');
  Array(10).fill(0).map(function (_, i) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerHTML = 'R$55.000,00';
    var td2 = document.createElement('td');
    td2.innerHTML = 'R$349,00';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

createTableHead();
createTableBody();
table_section.appendChild(table);
tables_container.appendChild(table_section); ////////////////////////////////////////

console.log(tables_container);