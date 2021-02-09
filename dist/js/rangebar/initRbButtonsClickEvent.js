"use strict";

function initRbButtonsClickEvent() {
  var showRbButtons = document.getElementsByClassName(CLASSNAME.showRbButton);

  var _loop = function _loop(i) {
    showRbButtons.item(i).addEventListener('click', toggleRbButtonsActive);
    showRbButtons.item(i).addEventListener('click', ActiveRangeBar);
    showRbButtons.item(i).addEventListener('click', removeTableElementsActive);
    showRbButtons.item(i).addEventListener('click', disableTabbarBottom);

    function toggleRbButtonsActive() {
      for (var target = 0; target < showRbButtons.length; target++) {
        // nao remove do proprio btn clicado
        if (target === i) {
          continue;
        }

        showRbButtons.item(target).classList.remove('active');
      }

      showRbButtons.item(i).classList.add('active');
    }

    function ActiveRangeBar() {
      var barData = getRangeBarData(i);
      updateRangeBar(barData);
      var rangeBarContainer = document.getElementById('range-container');
      rangeBarContainer.classList.add('active');
    }

    function removeTableElementsActive() {
      var tsButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton);
      var tabBars = document.getElementsByClassName(CLASSNAME.tabBar);
      var tablesSections = document.getElementsByClassName(CLASSNAME.tablesSection);

      for (var target = 0; target < tsButtons.length; target++) {
        tsButtons.item(target).classList.remove('active'); // esconder tabBar e tables

        tabBars.item(target).classList.remove('active');
        tablesSections.item(target).classList.remove('active');
      }
    }

    function disableTabbarBottom() {
      var tabBarBottomBar = document.getElementById(ID.tabBarBottomBar);
      tabBarBottomBar.classList.remove('active');
    }
  };

  for (var i = 0; i < showRbButtons.length; i++) {
    _loop(i);
  }
}

initRbButtonsClickEvent();