"use strict";

var DATA = {};
fetch('./config/data.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  Object.assign(DATA, data);
  console.log('DATA: \n', DATA);
  init();
})["catch"](function (error) {
  return console.log('Error:', error);
});

function init() {
  ////////////// common //////////////
  createButtons();
  setResponsiveButtons();
  initTableSelBtnsClickEvent();
  initRbButtonsClickEvent(); ////////////// table //////////////

  createTables();
  createTabs();
  initTabsClickEvent();
  setResponsiveTabs();
  activateTableElements(); ////////////// rangeBar //////////////

  initRangeBarToggle();
  initRangeBarInputEvent();
  activateRangeBar(); ////////////// active first element //////////////

  activateFirstElement(); ////////////// iframe //////////////

  initIframe();
}