"use strict";

// buttons
var buttons = document.getElementsByClassName(CLASSNAME_CONFIG.selectTablesButton);
var btnClassName = {
  1: '',
  2: '',
  3: '',
  4: 'column-buttons-2',
  5: 'column-buttons-3',
  "default": 'column-buttons-4'
};
var btnClass = btnClassName[btnClassName.hasOwnProperty(buttons.length) ? buttons.length : 'default']; // console.log(btnClass)

for (var btnIndex = 0; btnIndex < buttons.length; btnIndex++) {
  buttons.item(btnIndex).classList.add(btnClass);
}