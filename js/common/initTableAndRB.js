"use strict";

function initTableAndRB() {
  ////////////// common //////////////
  createButtons(); // setResponsiveButtons()

  initTableSelBtnsClickEvent();
  initRbButtonsClickEvent(); ////////////// table //////////////

  createTables();
  createDescs();
  createTabs();
  initTabsClickEvent(); //

  setResponsiveTabs(); //

  activateTableElements(); ////////////// rangeBar //////////////

  initRangeBarToggle();
  initRangeBarInputEvent();
  activateRangeBar(); ////////////// active first element //////////////

  activateFirstElement();
}