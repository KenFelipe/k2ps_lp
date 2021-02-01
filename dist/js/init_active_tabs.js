"use strict";

// seta as funcoes "onclick" nos tabs
// pra atribuir class ".active"
// pra mostrar tabela respectivo dinamicamente
function initActiveTabs() {
  var tabClass = CLASSNAME_CONFIG.tab;
  var tabs = document.getElementsByClassName(tabClass);
  var tabBarClass = CLASSNAME_CONFIG.tabBar;
  var tabBars = document.getElementsByClassName(tabBarClass);
  var tableClass = CLASSNAME_CONFIG.table;
  var tables = document.getElementsByClassName(tableClass); // ***************************
  // n de tab = n de table
  // ***************************
  // aplicar funcao "onclick" em cada tab
  // que atribui class ".active" no tab clicado e no table respectivo
  // (que corresponde mesmo index).
  // remove ".active" apenas do tab e table que 
  // pertence mesmo tabBar do tab q foi clicado.
  // (nao remove ".active" de outro tabBar, e de outro table)

  var _loop = function _loop(tabBarIndex, _tabIndexCount) {
    // tabBarChilds: n de tab de um tabBar
    // serve pra limitar remocao do ".active" de outro grupo tabBar e table
    var tabBarChilds = tabBars.item(tabBarIndex).childElementCount;

    var _loop2 = function _loop2(tabIndex) {
      // targetStartIndex: primeiro index do
      // grupo tabBar pra remover ".active"
      var targetStartIndex = _tabIndexCount;
      tabs.item(tabIndex).addEventListener('click', function () {
        // nao remove ".active" de outro grupo tabBar e table
        for (var targetIndex = targetStartIndex; targetIndex < targetStartIndex + tabBarChilds; targetIndex++) {
          // nao remove classe do proprio tab clicado
          // e do table do mesmo index
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

    for (var tabIndex = _tabIndexCount; tabIndex < _tabIndexCount + tabBarChilds; tabIndex++) {
      _loop2(tabIndex);
    }

    _tabIndexCount += tabBarChilds;
    tabIndexCount = _tabIndexCount;
  };

  for (var tabBarIndex = 0, tabIndexCount = 0; tabBarIndex < tabBars.length; tabBarIndex++) {
    _loop(tabBarIndex, tabIndexCount);
  }
}