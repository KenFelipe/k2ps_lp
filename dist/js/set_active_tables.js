"use strict";

// seta as funcoes "onclick" do botoes e tabs
// pra mostrar tabela respectivo dinamicamente
function setActiveTables() {
  //
  setActiveButtons();
  setActiveTabs();

  function setActiveButtons() {
    var selectTablesButtonClass = CLASS_ID_CONFIG["class"].selectTablesButton;
    var buttons = document.getElementsByClassName(selectTablesButtonClass);
    var tabBarClass = CLASS_ID_CONFIG["class"].tabBar;
    var tabBars = document.getElementsByClassName(tabBarClass);
    var tablesSectionClass = CLASS_ID_CONFIG["class"].tablesSection;
    var tableSections = document.getElementsByClassName(tablesSectionClass); // pode ser ~
    // for(let button of typeSelectButtons) { ... }
    // mas directive "of" nao functiona no IE de versao baixo

    var _loop = function _loop(buttonIndex) {
      buttons.item(buttonIndex).addEventListener('click', function () {
        // MUDAR O NOME DO VARIAVEL EVALBTNIDX TO TARGETINDEX
        // MUDAR O NOME DO VARIAVEL EVALBTNIDX TO TARGETINDEX
        // MUDAR O NOME DO VARIAVEL EVALBTNIDX TO TARGETINDEX
        for (var evalButtonIndex = 0; evalButtonIndex < buttons.length; evalButtonIndex++) {
          // nao vai remover classe do proprio elemento clicado
          if (evalButtonIndex === buttonIndex) {
            continue;
          }

          buttons.item(evalButtonIndex).classList.remove('active');
          tabBars.item(evalButtonIndex).classList.remove('active');
          tableSections.item(evalButtonIndex).classList.remove('active');
        }

        buttons.item(buttonIndex).classList.add('active');
        tabBars.item(buttonIndex).classList.add('active');
        tableSections.item(buttonIndex).classList.add('active');
      });
    };

    for (var buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
      _loop(buttonIndex);
    }
  }

  function setActiveTabs() {
    var tablesSectionTableClass = CLASS_ID_CONFIG["class"].tablesSectionTable;
    var tableTabs = document.getElementsByClassName(tablesSectionTableClass);
    var tabBarClass = CLASS_ID_CONFIG["class"].tabBar;
    var tabBars = document.getElementsByClassName(tabBarClass);
    var tabClass = CLASS_ID_CONFIG["class"].tab;
    var tabs = document.getElementsByClassName(tabClass);

    var _loop2 = function _loop2(tabBarIndex, _tabIndexCount) {
      var tabBarChilds = tabBars.item(tabBarIndex).childElementCount;

      var _loop3 = function _loop3(tabIndex) {
        var evalStartTabIndex = _tabIndexCount;
        tabs.item(tabIndex).addEventListener('click', function () {
          for (var evalTabIndex = evalStartTabIndex; evalTabIndex < evalStartTabIndex + tabBarChilds; evalTabIndex++) {
            // nao vai remover classe do proprio elemento clicado
            if (evalTabIndex === tabIndex) {
              continue;
            }

            tabs.item(evalTabIndex).classList.remove('active');
            tableTabs.item(evalTabIndex).classList.remove('active');
          }

          tabs.item(tabIndex).classList.add('active');
          tableTabs.item(tabIndex).classList.add('active');
        });
      };

      for (var tabIndex = _tabIndexCount; tabIndex < _tabIndexCount + tabBarChilds; tabIndex++) {
        _loop3(tabIndex);
      }

      _tabIndexCount += tabBarChilds;
      tabIndexCount = _tabIndexCount;
    };

    for (var tabBarIndex = 0, tabIndexCount = 0; tabBarIndex < tabBars.length; tabBarIndex++) {
      _loop2(tabBarIndex, tabIndexCount);
    }
  }
}