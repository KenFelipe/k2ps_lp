"use strict";

// CLASSNAME and ID config in "config/idClassName.js" //
// DATA in "config/data.js"
function createTables() {
  var tableCls = CLASSNAME.table;
  var tableSecCls = CLASSNAME.tableSec;
  var tableCtnr = document.getElementById(ID.tableCtnr); // itemKeys: imovel, automovel, ...

  var dataItemKeys = Object.keys(DATA);
  dataItemKeys.forEach(function (dataItemKey) {
    // type: "table" or "bar"
    // logica sobre "bar" esta no "js/rangebar/"
    if (DATA[dataItemKey].type === CONFIG.dataTypeName.table) {
      var tableSec = document.createElement('div');
      tableSec.className = tableSecCls;
      var tableData = DATA[dataItemKey].table; // tableTabNames: "ate 240mil", a "partir de 250mil", ...

      var tabNames = Object.keys(tableData);
      tabNames.forEach(function (tabName) {
        var table = document.createElement('table');
        table.className = tableCls;
        var thead = createTableHead(tableData[tabName]);
        var tbody = createTableBody(tableData[tabName]);
        table.appendChild(thead);
        table.appendChild(tbody);
        tableSec.appendChild(table);
      });
      tableCtnr.appendChild(tableSec);
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