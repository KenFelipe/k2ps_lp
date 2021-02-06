"use strict";

// seta as funcoes "onclick" nos botoes 
// pra atribuir class ".active"
// pra mostrar tabBar e tabela respectivo dinamicamente
function initActiveButtons() {
  // buttons que seleta table
  var buttons = document.getElementsByClassName(CLASSNAME.tablesSelectButton);
  var tabBars = document.getElementsByClassName(CLASSNAME.tabBar);
  var tablesSections = document.getElementsByClassName(CLASSNAME.tablesSection); // *******************************
  // n de buttons = n de tabBar
  // *******************************
  // aplicar funcao "onclick" em cada botao
  // que atribui class ".active" no botao clicado,
  // e no tabBar e table_section respectivo(que corresponde mesmo index).
  // tambem remove .active de outros elementos.

  var _loop = function _loop(i) {
    buttons.item(i).addEventListener('click', function () {
      for (var target = 0; target < buttons.length; target++) {
        // nao vai remover classe do proprio elemento clicado
        // e dos elementos de mesmo index.
        if (target === i) {
          continue;
        }

        buttons.item(target).classList.remove('active');
        tabBars.item(target).classList.remove('active');
        tablesSections.item(target).classList.remove('active');
      }

      buttons.item(i).classList.add('active');
      tabBars.item(i).classList.add('active');
      tablesSections.item(i).classList.add('active');
    });
  };

  for (var i = 0; i < buttons.length; i++) {
    _loop(i);
  }
}