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
  activateTableElems(); ////////////// rangeBar //////////////

  initRangeBarToggle();
  initRangeBarInputEvent();
  activateRangeBar(); ////////////// iframe //////////////

  initIframe();
}

init();