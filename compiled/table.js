"use strict";

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

function createTableBody(row, column) {
  var tbody = document.createElement('tbody');

  for (var r = 1; r < row; r++) {
    var tr = document.createElement('tr');

    for (var c = 0; c < column; c++) {
      var td = document.createElement('td'); // mudar aqui

      td.innerHTML = "td-column-".concat(c);
      tr.appendChild(td);
      thead.appendChild(tr);
    }

    tbody.appendChild(tr);
  }

  return tbody;
}

function init(config) {
  var tablesContainer = document.getElementById('tables'); // return config length

  var tableTypes = Object.keys(TABLES_CONFIG); // sep types

  tableTypes.forEach(function (tableType, tableTypeIdx) {
    var tableTypeSection = document.createElement('div');
    console.log(tableType);
    console.log(Object.keys(TABLES_DATA[tableType]));
    Object.keys(TABLES_DATA[tableType]).forEach(function (tabName, tabIdx) {
      var table = document.createElement('table'); // const thead = createTableHead(tableType, tabName)

      var thead = createTableHead(TABLES_DATA[tableType][tabName]);
      table.appendChild(thead);
      tableTypeSection.appendChild(table);
    });
    tablesContainer.appendChild(tableTypeSection);
  }); // for(let typeIdx = 0; typeIdx < tableTypesQty; typeIdx++) {}
  // for config length {
  //     table_section = document.createElement('div')
  //     // sep tabs
  //     for tabs {
  //         const table = document.createElement('table')
  //         const thead = createTableHead(.column)
  // 
  //         // need get row
  //         // const row = getrow(array)
  //         const tbody = createTableBody(.column)
  //         table.appendChild(thead)
  //         table.appendChild(tbody)
  //         table_section.appendChild(table)
  //     }
  //     tables_container.appendChild(table_section)
  // }

  console.log(tablesContainer);
}

var TABLES_DATA = {
  imovel: {
    'Ate 240mil': {
      head: ['thead', 'thead'],
      body: [['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00']]
    },
    'Ate 580mil': {
      head: ['500mil', 'thead'],
      body: [['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00']]
    },
    'Ate 100mil': {
      head: ['thead', 'thead'],
      body: [['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00'], ['R$55.000,00', 'R$349.00']]
    }
  } // automovel: { 
  //     auto: '100$' 
  // }

};
var TABLES_CONFIG = {
  imovel: {
    tabs: 3,
    columns: 2
  } // automovel: {
  //     tabs: 3,
  //     columns: 5
  // }

};
init(); // const imovel = [
//     [ 
//         ['thead', 'thead'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//     ],
//     [
//         ['thead', 'thead'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//     ],
//     [
//         ['thead', 'thead'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//         ['R$55.000,00', 'R$349.00'],
//     ]
// ]
// const tables_container = document.getElementById('tables')
// ////////////////////////////////////////
// const table_section = document.createElement('div')
// table_section.id = 'imovel-table'
// const table = document.createElement('table')
// const thead = createTableHead(2)
// const tbody = createTableBody(5, 2)
// table.appendChild(thead)
// table.appendChild(tbody)
// table_section.appendChild(table)
// tables_container.appendChild(table_section)