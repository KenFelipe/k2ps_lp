"use strict";

function setResponsiveTabs() {
  var tabBars = document.getElementsByClassName(CLASSNAME.tabBar);
  var buttons = document.getElementsByClassName(CLASSNAME.tablesSelectButton); // tabBar bottom bar

  var bottomBar = document.getElementById(ID.bottomBar); //

  var getTabClassName = function getTabClassName(tabs) {
    if (tabs === 5) {
      return 'tabs-5';
    }

    if (tabs > 5) {
      return 'tabs-more-5';
    }

    return 'tabs-less-5';
  };

  var _loop = function _loop(tabBarI) {
    var tabClass = getTabClassName(tabBars.item(tabBarI).childElementCount);
    var tabs = tabBars.item(tabBarI).childNodes;

    for (var tabI = 0; tabI < tabs.length; tabI++) {
      tabs.item(tabI).classList.add(tabClass);
    } //


    if (tabBarI === 0) {
      bottomBar.className = tabClass;
    } // 


    buttons.item(tabBarI).addEventListener('click', function () {
      bottomBar.className = tabClass;
    });
  };

  for (var tabBarI = 0; tabBarI < tabBars.length; tabBarI++) {
    _loop(tabBarI);
  }
}