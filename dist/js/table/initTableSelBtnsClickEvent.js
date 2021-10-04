"use strict";

// aplicar funcao "onclick" em botoes que seleciona tabela.
function initTableSelBtnsClickEvent() {
  // table select buttons
  var tableSelBtns = document.getElementsByClassName(CLASSNAME.tableSelBtn);

  var _loop = function _loop(i) {
    tableSelBtns.item(i).addEventListener('click', toggleTableElementsActive);
    tableSelBtns.item(i).addEventListener('click', enableTabbarUnderline);
    tableSelBtns.item(i).addEventListener('click', deactivateRangeBarButtons);
    tableSelBtns.item(i).addEventListener('click', turnOffRangeBar); // n de tableSelBtns = n de tabBar = n de tableSecs

    function toggleTableElementsActive() {
      var tabbars = document.getElementsByClassName(CLASSNAME.tabbar);
      var tableSecs = document.getElementsByClassName(CLASSNAME.tableSec);
      var descSecs = document.getElementsByClassName('desc-div'); // atribui class ".active" no botao clicado,
      // no tabBar e no table section respectivo(que corresponde mesmo index)
      // e remove .active de outros btn, tabbar e table section.

      for (var target = 0; target < tableSelBtns.length; target++) {
        // nao vai remover classe do proprio elemento clicado
        // e dos elementos de mesmo index.
        if (target === i) {
          continue;
        }

        tableSelBtns.item(target).classList.remove('active');
        tabbars.item(target).classList.remove('active');
        tableSecs.item(target).classList.remove('active');
        descSecs.item(target).classList.remove('active');
      }

      tableSelBtns.item(i).classList.add('active');
      tabbars.item(i).classList.add('active');
      tableSecs.item(i).classList.add('active');
      descSecs.item(i).classList.add('active');
    }

    function enableTabbarUnderline() {
      var tabbarUnderline = document.getElementById(ID.tabbarUnderline);
      tabbarUnderline.classList.add('active');
    }

    function deactivateRangeBarButtons() {
      var turnOnRbBtns = document.getElementsByClassName(CLASSNAME.turnOnRbBtn);

      for (var target = 0; target < turnOnRbBtns.length; target++) {
        turnOnRbBtns.item(target).classList.remove('active');
      }
    }

    function turnOffRangeBar() {
      var rangeBarCtnr = document.getElementById(ID.rangeBarCtnr);
      rangeBarCtnr.classList.remove('active');
    }
  };

  for (var i = 0; i < tableSelBtns.length; i++) {
    _loop(i);
  }
}