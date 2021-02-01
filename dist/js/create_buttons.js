"use strict";

// criar botoes atraves de dados
// configurado em 'config/data.js'
function createButtons() {
  var selectTablesContainerClass = CLASSNAME_CONFIG.selectTablesContainer;
  var selectTablesButtonClass = CLASSNAME_CONFIG.selectTablesButton;
  var buttonsContainer = document.getElementsByClassName(selectTablesContainerClass).item(0);
  Object.keys(TABLES_DATA).forEach(function (tableName) {
    var button = document.createElement('button');
    button.classList.add(selectTablesButtonClass);
    button.innerHTML = tableName;
    buttonsContainer.appendChild(button);
  });
}