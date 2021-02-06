"use strict";

function setResponsiveTabs() {
  var tabBars = document.getElementsByClassName(CLASSNAME.tabBar);
  var buttons = document.getElementsByClassName(CLASSNAME.tablesSelectButton); //

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
    } // tabBar bottom bar


    var bottomBarClass = CLASSNAME.tabBarBottomBar;
    var bottomBar = document.getElementsByClassName(bottomBarClass).item(0); //

    if (tabBarI === 0) {
      bottomBar.className = "".concat(bottomBarClass, " ").concat(tabClass);
    } // 


    buttons.item(tabBarI).addEventListener('click', function () {
      bottomBar.className = "".concat(bottomBarClass, " ").concat(tabClass);
    });
  };

  for (var tabBarI = 0; tabBarI < tabBars.length; tabBarI++) {
    _loop(tabBarI);
  }
}