"use strict";

function createTables() {
  var tablesContainer = document.getElementById('tables'); // Types: imovel, automovel, ...

  var tableTypes = Object.keys(TABLES_DATA);
  tableTypes.forEach(function (tableType, tableTypeIdx) {
    var tableTypeSection = document.createElement('div');
    tableTypeSection.className = 'table-section'; // Tabs: ate 240mil, partir de 250mil, ...

    var tableTabs = Object.keys(TABLES_DATA[tableType]);
    tableTabs.forEach(function (tableTab, tableTabIdx) {
      var table = document.createElement('table');
      table.className = 'table-tab';
      var thead = createTableHead(TABLES_DATA[tableType][tableTab]);
      var tbody = createTableBody(TABLES_DATA[tableType][tableTab]);
      table.appendChild(thead);
      table.appendChild(tbody);
      tableTypeSection.appendChild(table);
    });
    tablesContainer.appendChild(tableTypeSection);
  }); // debug
  // console.log(tablesContainer)

  function createTableHead(table) {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    table.head.forEach(function (theadTd) {
      var td = document.createElement('td');
      td.innerHTML = theadTd;
      tr.appendChild(td);
      thead.appendChild(tr);
    });
    return thead;
  }

  function createTableBody(table) {
    var tbody = document.createElement('tbody');
    table.body.forEach(function (tbodyRow) {
      var tr = document.createElement('tr');
      tbodyRow.forEach(function (tbodyRowTd) {
        var td = document.createElement('td');
        td.innerHTML = tbodyRowTd;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
}