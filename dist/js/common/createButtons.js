"use strict";

// criar botoes atraves de dados
// configurado em 'config/data.js'
function createButtons() {
  var buttonClass = CLASSNAME.button;
  var tablesSelectButtonClass = CLASSNAME.tablesSelectButton;
  var showRbButtonClass = CLASSNAME.showRbButton;
  var buttonsContainer = document.getElementById(ID.buttonsContainer);
  Object.keys(DATA).forEach(function (tableName) {
    var button = document.createElement('button');
    button.classList.add(buttonClass);
    button.classList.add(DATA[tableName].type === 'table' ? tablesSelectButtonClass : DATA[tableName].type === 'bar' ? showRbButtonClass : '');
    button.innerHTML = tableName;
    buttonsContainer.appendChild(button);
  });
}