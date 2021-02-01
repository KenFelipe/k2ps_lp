"use strict";

function createTables() {
  // config in "class_id_config.js"
  var tablesContainerClass = CLASSNAME_CONFIG.tablesContainer;
  var tablesContainer = document.getElementById(tablesContainerClass);
  var tablesSectionClass = CLASSNAME_CONFIG.tablesSection;
  var tableClass = CLASSNAME_CONFIG.table; // tableNames: imovel, automovel, ...

  var tableNames = Object.keys(TABLES_DATA);
  tableNames.forEach(function (tableName) {
    var tablesSection = document.createElement('div');
    tablesSection.className = tablesSectionClass; // tableTabNames: ate 240mil, a partir de 250mil, ...

    var tableTabsNames = Object.keys(TABLES_DATA[tableName]);
    tableTabsNames.forEach(function (tableTabName) {
      var table = document.createElement('table');
      table.className = tableClass;
      var thead = createTableHead(TABLES_DATA[tableName][tableTabName]);
      var tbody = createTableBody(TABLES_DATA[tableName][tableTabName]);
      table.appendChild(thead);
      table.appendChild(tbody);
      tablesSection.appendChild(table);
    });
    tablesContainer.appendChild(tablesSection);
  });

  function createTableHead(table) {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    table.head.forEach(function (theadData) {
      var td = document.createElement('td');
      td.innerHTML = theadData;
      tr.appendChild(td);
      thead.appendChild(tr);
    });
    return thead;
  }

  function createTableBody(table) {
    var tbody = document.createElement('tbody');
    table.body.forEach(function (tbodyRow) {
      var tr = document.createElement('tr');
      tbodyRow.forEach(function (tbodyRowData) {
        var td = document.createElement('td');
        td.innerHTML = tbodyRowData;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
}