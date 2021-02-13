"use strict";

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

init();