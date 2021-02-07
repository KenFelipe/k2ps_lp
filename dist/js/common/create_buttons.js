"use strict";

// criar botoes atraves de dados
// configurado em 'config/data.js'
function createButtons() {
  var buttonClass = CLASSNAME.button;
  var tablesSelectButtonClass = CLASSNAME.tablesSelectButton;
  var showBarButtonClass = CLASSNAME.showBarButton;
  var buttonsContainer = document.getElementById(ID.buttonsContainer);
  Object.keys(DATA).forEach(function (tableName) {
    var button = document.createElement('button');
    button.classList.add(DATA[tableName].type === 'table' ? tablesSelectButtonClass : DATA[tableName].type === 'bar' ? showBarButtonClass : '');
    button.classList.add(buttonClass);
    button.innerHTML = tableName;
    buttonsContainer.appendChild(button);
  });
}