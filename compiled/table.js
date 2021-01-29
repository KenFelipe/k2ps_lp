"use strict";

/*****  Configura os dados de tabela aqui *****/

/* Formato */
// const TABLES_DATA = {
//     "nome_do_botao": {
//         "nome_da_aba": {
//             head: [...],
//             body: [
//                 [...],
//             ]
//         },
//     },
//     ...
// }
var TABLES_DATA = {
  "imovel": {
    "Ate 240mil": {
      head: ["thead", "thead"],
      body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
    },
    "Ate 580mil": {
      head: ["500mil", "thead"],
      body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
    },
    "Ate 100mil": {
      head: ["thead", "thead"],
      body: [["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"]]
    }
  } // "automovel": { "Ate 240mil": { head: ["thead", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ], }, "Ate 580mil": { head: ["500mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ], }, "Ate 100mil": { head: ["thead", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] } },
  // automovel: { 
  //     auto: "100$" 
  // }

};
/**********************************************************************/

function initTables() {
  var tablesContainer = document.getElementById('tables'); // Types: imovel, automovel, ...

  var tableTypes = Object.keys(TABLES_DATA);
  tableTypes.forEach(function (tableType, tableTypeIdx) {
    var tableTypeSection = document.createElement('div'); // Tabs: ate 240mil, partir de 250mil, ...

    var tableTabs = Object.keys(TABLES_DATA[tableType]);
    tableTabs.forEach(function (tableTab, tableTabIdx) {
      var table = document.createElement('table');
      var thead = createTableHead(TABLES_DATA[tableType][tableTab]);
      var tbody = createTableBody(TABLES_DATA[tableType][tableTab]);
      table.appendChild(thead);
      table.appendChild(tbody);
      tableTypeSection.appendChild(table);
    });
    tablesContainer.appendChild(tableTypeSection);
  });
  console.log(tablesContainer);
}

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

initTables();