"use strict";

// aplicar funcao "onclick" nas abas(tabs)
// pra mostrar tabela correspondente dinamicamente
function initTabsClickEvent() {
  var tabbars = document.getElementsByClassName(CLASSNAME.tabbar); // ***************************
  // n de tab = n de table
  // ***************************
  // Atribui class ".active" no tab clicado e no table que corresponde mesmo index.
  // Remove ".active" apenas do tab e do table que 
  // pertence mesmo tabbar do tab que foi clicado.
  // (nao remove ".active" de outro tabbar, e de outro table).

  var _loop = function _loop(tabbarIndex, _tabIndexCount) {
    // tabbarChilds: n de tab de um tabbar
    // serve pra limitar remocao do ".active" de outro grupo tabbar e table
    var tabbarChilds = tabbars.item(tabbarIndex).childElementCount;

    var _loop2 = function _loop2(tabIndex) {
      // targetStartIndex: primeiro index do
      // grupo tabbar pra remover ".active"
      var targetStartIndex = _tabIndexCount;
      var tabs = document.getElementsByClassName(CLASSNAME.tab);
      var tables = document.getElementsByClassName(CLASSNAME.table);
      tabs.item(tabIndex).addEventListener('click', function () {
        // nao remove ".active" de outro grupo tabbar e table
        for (var targetIndex = targetStartIndex; targetIndex < targetStartIndex + tabbarChilds; targetIndex++) {
          // nao remove classe do proprio tab clicado
          // e da tabela do mesmo index
          if (targetIndex === tabIndex) {
            continue;
          }

          tabs.item(targetIndex).classList.remove('active');
          tables.item(targetIndex).classList.remove('active');
        }

        tabs.item(tabIndex).classList.add('active');
        tables.item(tabIndex).classList.add('active');
      });
    };

    for (var tabIndex = _tabIndexCount; tabIndex < _tabIndexCount + tabbarChilds; tabIndex++) {
      _loop2(tabIndex);
    }

    _tabIndexCount += tabbarChilds;
    tabIndexCount = _tabIndexCount;
  };

  for (var tabbarIndex = 0, tabIndexCount = 0; tabbarIndex < tabbars.length; tabbarIndex++) {
    _loop(tabbarIndex, tabIndexCount);
  }
}