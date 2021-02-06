"use strict";

function rangeTabletest() {
  var showBarButtons = document.getElementsByClassName(CLASSNAME.showBarButton);
  var tablesSelectButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton);
  var tabBars = document.getElementsByClassName(CLASSNAME.tabBar);
  var tablesSections = document.getElementsByClassName(CLASSNAME.tablesSection);

  var _loop = function _loop(i) {
    showBarButtons.item(i).addEventListener('click', function () {
      //
      for (var target = 0; target < showBarButtons.length; target++) {
        showBarButtons.item(target).classList.remove('active');
      }

      showBarButtons.item(i).classList.add('active'); //

      for (var _target = 0; _target < tablesSelectButtons.length; _target++) {
        // esconder tabBar e tables
        tablesSelectButtons.item(_target).classList.remove('active');
        tabBars.item(_target).classList.remove('active');
        tablesSections.item(_target).classList.remove('active');
      }
    });
  };

  for (var i = 0; i < showBarButtons.length; i++) {
    _loop(i);
  }
}

rangeTabletest();