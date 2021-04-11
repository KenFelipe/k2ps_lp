"use strict";

// criar botoes atraves de dados
// configurado em 'config/data.js'
function createButtons() {
  var buttonCls = CLASSNAME.button; // btns to show table

  var tableSelBtnCls = CLASSNAME.tableSelBtn; // btns to show rangebar

  var turnOnRbBtnCls = CLASSNAME.turnOnRbBtn;
  var buttonCtnr = document.getElementById(ID.buttonCtnr);
  DATA.forEach(function (data) {
    var button = document.createElement('button');
    button.innerHTML = data.sectionName.replace('\\', '<br/>');
    button.classList.add(buttonCls);
    button.classList.add(data.dataType === CONFIG.dataTypeName.table ? tableSelBtnCls : data.dataType === CONFIG.dataTypeName.bar ? turnOnRbBtnCls : 'error');
    buttonCtnr.appendChild(button);
  });
}