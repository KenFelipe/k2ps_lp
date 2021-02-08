"use strict";

// CLASSNAME and ID in "config/idClassName.js" //
// DATA in "config/data.js"
function createTables() {
  var tableClass = CLASSNAME.table;
  var tablesSectionClass = CLASSNAME.tablesSection;
  var tablesContainer = document.getElementById(ID.tablesContainer); // items: imovel, automovel, ...

  var items = Object.keys(DATA);
  items.forEach(function (item) {
    // type: "table" or "bar"
    // logica sobre "bar" esta no "js/rangebar/"
    if (DATA[item].type === "table") {
      var tablesSection = document.createElement('div');
      tablesSection.className = tablesSectionClass;
      var tablesData = DATA[item].table; // tableTabNames: "ate 240mil", a "partir de 250mil", ...

      var tableTabNames = Object.keys(tablesData);
      tableTabNames.forEach(function (tableTabName) {
        var table = document.createElement('table');
        table.className = tableClass;
        var thead = createTableHead(tablesData[tableTabName]);
        var tbody = createTableBody(tablesData[tableTabName]);
        table.appendChild(thead);
        table.appendChild(tbody);
        tablesSection.appendChild(table);
      });
      tablesContainer.appendChild(tablesSection);
    }
  }); //

  function createTableHead(table) {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    table.head.forEach(function (theadData) {
      var td = document.createElement('td');
      td.innerHTML = theadData.replaceAll(' ', '&nbsp;');
      tr.appendChild(td);
      thead.appendChild(tr);
    });
    return thead;
  } //


  function createTableBody(table) {
    var tbody = document.createElement('tbody');
    table.body.forEach(function (tbodyRow) {
      var tr = document.createElement('tr');
      tbodyRow.forEach(function (tbodyRowData) {
        var td = document.createElement('td');
        td.innerHTML = tbodyRowData.replaceAll(' ', '&nbsp;');
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
}