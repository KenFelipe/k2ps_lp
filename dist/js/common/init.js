"use strict";

function init() {
  createButtons();
  createTables();
  createTabs();
  initTsButtonsClickEvent();
  initTabsClickEvent();
  initActive();
  setResponsiveTabs();
  setResponsiveButtons();
}

init();