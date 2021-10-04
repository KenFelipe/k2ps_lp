"use strict";

// CLASSNAME and ID config in "config/idClassName.js" //
function createTables() {
  var tableCls = CLASSNAME.table;
  var tableSecCls = CLASSNAME.tableSec;
  var tableCtnr = document.getElementById(ID.tableCtnr);
  DATA.forEach(function (data) {
    // type: "table" or "rangeBar"
    // logica sobre "bar" esta no "js/rangebar/"
    if (data.dataType !== CONFIG.dataTypeName.table) {
      return;
    }

    var tableSec = document.createElement('div');
    tableSec.className = tableSecCls;
    data.tableDataList.forEach(function (tableData) {
      var table = document.createElement('table');
      table.className = tableCls;
      var thead = createTableHead(tableData.tableData);
      var tbody = createTableBody(tableData.tableData);
      table.appendChild(thead);
      table.appendChild(tbody);
      tableSec.appendChild(table);
    });
    tableCtnr.appendChild(tableSec);
  }); //

  function createTableHead(table) {
    var thead = document.createElement('thead');

    if (!Array.isArray(table.head[0])) {
      // isNotArray
      var tr = document.createElement('tr');
      table.head.forEach(function (theadData, i) {
        var td = document.createElement('td');
        td.innerHTML = theadData.replaceAll('\\', '&nbsp;');
        td.style.color = table.headTextColor && table.headTextColor[i] || 'inherit';
        td.style.backgroundColor = table.headBackground && table.headBackground[i] || 'inherit';
        tr.appendChild(td);
        thead.appendChild(tr);
      });
      return thead;
    } else {
      // isArray
      table.head.forEach(function (theadrow, ir) {
        var tr = document.createElement('tr');
        theadrow.forEach(function (theadrow, id) {
          if (table.headStructure.row && table.headStructure.row[ir][id] === 'skip') return;
          var td = document.createElement('td');
          td.innerHTML = theadrow.replaceAll('\\', '&nbsp;');

          if (table.headStructure.column) {
            td.colSpan = table.headStructure.column[ir][id];
          }

          if (table.headStructure.row) {
            td.rowSpan = table.headStructure.row[ir][id];
          } // td.style.color = table.headTextColor && table.headTextColor[i] || 'inherit'
          // td.style.backgroundColor = table.headBackground && table.headBackground[i] || 'inherit'


          tr.appendChild(td);
        });
        thead.appendChild(tr);
      });
      return thead;
    }
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