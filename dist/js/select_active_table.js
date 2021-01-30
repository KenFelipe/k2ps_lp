"use strict";

initActiveTable();

var _btns = document.getElementsByClassName('select-table_button');

function initActiveTable() {
  initSelectTable();
  initSelectTableTab();

  function initSelectTable() {
    var buttons = document.getElementsByClassName('select-table__button');
    var tabSections = document.getElementsByClassName('tab-section');
    var tableSections = document.getElementsByClassName('table-section'); // pode ser ~
    // for(let button of typeSelectButtons) { ... }
    // mas directive "of" nao functiona no IE de versao baixo

    var _loop = function _loop(buttonIndex) {
      buttons.item(buttonIndex).addEventListener('click', function () {
        for (var evalButtonIndex = 0; evalButtonIndex < buttons.length; evalButtonIndex++) {
          // nao vai remover classe do proprio elemento clicado
          if (evalButtonIndex === buttonIndex) {
            continue;
          }

          buttons.item(evalButtonIndex).classList.remove('active');
          tabSections.item(evalButtonIndex).classList.remove('active');
          tableSections.item(evalButtonIndex).classList.remove('active');
        }

        buttons.item(buttonIndex).classList.add('active');
        tabSections.item(buttonIndex).classList.add('active');
        tableSections.item(buttonIndex).classList.add('active');
      });
    };

    for (var buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
      _loop(buttonIndex);
    }
  }

  function initSelectTableTab() {
    var tabs = document.getElementsByClassName('select-tab__tab');
    var tabSections = document.getElementsByClassName('tab-section');
    var tableTabs = document.getElementsByClassName('table-tab'); // debug
    // console.log('select-tab__tab:',tabs);
    // console.log('tab-section:', tabSections);
    // console.log('table-tab', tableTabs)
    // console.log('**********************************************')

    var _loop2 = function _loop2(tabSection, _tabIndexCount) {
      var sectionChilds = tabSections.item(tabSection).childElementCount; // debug
      // console.log(`sectionChilds: ${sectionChilds}, tabIndexCount: ${tabIndexCount}`)

      var _loop3 = function _loop3(tabIndex) {
        // debug
        // console.log(`tabIndex: ${tabIndex}, tabIndexCount: ${tabIndexCount}, tab:`, tabs.item(tabIndex));
        var evalStartTabIndex = _tabIndexCount;
        tabs.item(tabIndex).addEventListener('click', function () {
          for (var evalTabIndex = evalStartTabIndex; evalTabIndex < evalStartTabIndex + sectionChilds; evalTabIndex++) {
            // debug
            // console.log(`tabIndex: ${tabIndex}, evalTabIndex: ${evalTabIndex}, evalStartTabIndex: ${evalStartTabIndex}`);
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

      for (var tabIndex = _tabIndexCount; tabIndex < _tabIndexCount + sectionChilds; tabIndex++) {
        _loop3(tabIndex);
      }

      _tabIndexCount += sectionChilds; // debug
      // console.log('tabIndexCount:', tabIndexCount)
      // console.log('**********************************************')

      tabIndexCount = _tabIndexCount;
    };

    for (var tabSection = 0, tabIndexCount = 0; tabSection < tabSections.length; tabSection++) {
      _loop2(tabSection, tabIndexCount);
    }
  }
}