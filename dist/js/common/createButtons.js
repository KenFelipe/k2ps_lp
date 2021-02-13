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
    button.classList.add( ////////////////////////////////////////////////////////////////////////////// Kubetsu Disting
    DATA[dataItemKey].type === 'table' ? tableSelBtnCls : DATA[dataItemKey].type === 'bar' ? turnOnRbBtnCls : '');
    buttonCtnr.appendChild(button);
  });
}