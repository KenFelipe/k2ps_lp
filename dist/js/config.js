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
var btnClass = btnClassName[btnClassName.hasOwnProperty(buttons.length) ? buttons.length : 'default'];
console.log(btnClass);

for (var btnIndex = 0; btnIndex < buttons.length; btnIndex++) {
  buttons.item(btnIndex).classList.add(btnClass);
} // tabs


var tabs = document.getElementsByClassName('tabbar__tab'); // console.log(tabs)
// DEBUG
// const column_tab = 5

var column_tab = 'more-5'; // const column_tab = 'less-5'

var testIndex = 3;
var tabClass = "tabs-".concat(column_tab);

for (var tabIdx = 0; tabIdx < tabs.length; tabIdx++) {
  tabs.item(tabIdx).classList.add(tabClass);
}

buttons.item(0).classList.remove('active');
buttons.item(testIndex).classList.add('active');
document.getElementsByClassName('tabbar').item(0).classList.remove('active');
document.getElementsByClassName('tabbar').item(testIndex).classList.add('active');
document.getElementsByClassName('tabs__bottom-bar').item(0).classList.add(tabClass);