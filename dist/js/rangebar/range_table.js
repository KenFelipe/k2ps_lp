"use strict";

function rangeTabletest() {
  var showRbButtons = document.getElementsByClassName(CLASSNAME.showRbButton);
  var tablesSelectButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton);
  var tabBars = document.getElementsByClassName(CLASSNAME.tabBar);
  var tablesSections = document.getElementsByClassName(CLASSNAME.tablesSection);

  var _loop = function _loop(i) {
    showRbButtons.item(i).addEventListener('click', function () {
      //
      for (var target = 0; target < showRbButtons.length; target++) {
        showRbButtons.item(target).classList.remove('active');
      }

      showRbButtons.item(i).classList.add('active'); //

      for (var _target = 0; _target < tablesSelectButtons.length; _target++) {
        // esconder tabBar e tables
        tablesSelectButtons.item(_target).classList.remove('active');
        tabBars.item(_target).classList.remove('active');
        tablesSections.item(_target).classList.remove('active');
      }

      document.getElementById('tabbar-border-bottom').classList.add('disable');
    });
    showRbButtons.item(i).addEventListener('click', function () {
      var barData = DATA[showRbButtons.item(i).innerHTML].bar;
      updateRangeBar(barData);
      var rangeBarContainer = document.getElementById('range-container');
      rangeBarContainer.classList.add('active');
    });
    var tablesSelectButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton);

    for (var _i = 0; _i < tablesSelectButtons.length; _i++) {
      tablesSelectButtons.item(_i).addEventListener('click', function () {
        var rangeBarContainer = document.getElementById('range-container');
        rangeBarContainer.classList.remove('active');
      });
    }
  };

  for (var i = 0; i < showRbButtons.length; i++) {
    _loop(i);
  }
}

rangeTabletest();