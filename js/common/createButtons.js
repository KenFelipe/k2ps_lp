"use strict";

// criar botoes atraves de dados
// configurado em 'config/data.js'
function createButtons() {
  var buttonCls = CLASSNAME.button; // btns to show table

  var tableSelBtnCls = CLASSNAME.tableSelBtn; // btns to show rangebar

  var turnOnRbBtnCls = CLASSNAME.turnOnRbBtn;
  var buttonCtnr = document.getElementById(ID.buttonCtnr);
  Object.keys(DATA).forEach(function (dataItemKey) {
    var button = document.createElement('button');
    button.innerHTML = dataItemKey;
    button.classList.add(buttonCls);
    button.classList.add(DATA[dataItemKey].type === CONFIG.dataTypeName.table ? tableSelBtnCls : DATA[dataItemKey].type === CONFIG.dataTypeName.bar ? turnOnRbBtnCls : '');
    buttonCtnr.appendChild(button);
  });
}