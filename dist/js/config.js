"use strict";

var buttons = document.getElementsByClassName(CLASSNAME_CONFIG.selectTablesButton);
var btnClassName = {
  4: 'buttons-2-column',
  5: 'buttons-3-column',
  "default": 'buttons-4-column'
};
var btnClass = btnClassName[btnClassName.hasOwnProperty(buttons.length) ? buttons.length : 'default'];
console.log(btnClass);

for (var btnIndex = 0; btnIndex < buttons.length; btnIndex++) {
  buttons.item(btnIndex).classList.add(btnClass);
}