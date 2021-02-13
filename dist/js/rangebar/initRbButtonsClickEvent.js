"use strict";

// aplicar funcao "onclick" em botoes que mostra barra.
function initRbButtonsClickEvent() {
  var turnOnRbBtns = document.getElementsByClassName(CLASSNAME.turnOnRbBtn);

  var _loop = function _loop(i) {
    turnOnRbBtns.item(i).addEventListener('click', toggleRbButtonsActive);
    turnOnRbBtns.item(i).addEventListener('click', turnOnRangeBar);
    turnOnRbBtns.item(i).addEventListener('click', initRangeBarData);
    turnOnRbBtns.item(i).addEventListener('click', deactivateTableElements);
    turnOnRbBtns.item(i).addEventListener('click', disableTabbarUnderline);

    function toggleRbButtonsActive() {
      for (var target = 0; target < turnOnRbBtns.length; target++) {
        // nao remove do proprio btn clicado
        if (target === i) {
          continue;
        }

        turnOnRbBtns.item(target).classList.remove('active');
      }

      turnOnRbBtns.item(i).classList.add('active');
    }

    function turnOnRangeBar() {
      var rangeBarCtnr = document.getElementById(ID.rangeBarCtnr);
      rangeBarCtnr.classList.add('active');
    }

    function initRangeBarData() {
      updateRangeBar();
    }

    function deactivateTableElements() {
      var tableSelBtns = document.getElementsByClassName(CLASSNAME.tableSelBtn);
      var tabbars = document.getElementsByClassName(CLASSNAME.tabbar);
      var tableSecs = document.getElementsByClassName(CLASSNAME.tableSec);

      for (var target = 0; target < tableSelBtns.length; target++) {
        tableSelBtns.item(target).classList.remove('active'); // esconder tabbar e tabelas

        tabbars.item(target).classList.remove('active');
        tableSecs.item(target).classList.remove('active');
      }
    }

    function disableTabbarUnderline() {
      var tabbarUnderline = document.getElementById(ID.tabbarUnderline);
      tabbarUnderline.classList.remove('active');
    }
  };

  for (var i = 0; i < turnOnRbBtns.length; i++) {
    _loop(i);
  }
}