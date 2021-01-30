"use strict";

initActiveTable();

function initActiveTable() {
  initSelectTypeTable();
  initSelectTabTable();

  function initSelectTypeTable() {
    var buttons = document.getElementsByClassName('select-table__button');
    var tableSections = document.getElementsByClassName('table-section');
    var tableTabs = document.getElementsByClassName('tab-section'); // pode ser ~
    // for(let button of typeSelectButtons) { ... }
    // mas nao functiona no IE de versao baixo

    var _loop = function _loop(i) {
      buttons.item(i).addEventListener('click', function () {
        removeClass(buttons, 'active', i);
        removeClass(tableSections, 'active', i);
        removeClass(tableTabs, 'active', i);
        buttons.item(i).classList.add('active');
        tableSections.item(i).classList.add('active');
        tableTabs.item(i).classList.add('active'); // debug

        console.log('CLICKED!!!');
      });
    };

    for (var i = 0; i < buttons.length; i++) {
      _loop(i);
    }
  }

  function initSelectTabTable() {
    var tabs = document.getElementsByClassName('select-tab__tab');
    var tabSections = document.getElementsByClassName('tab-section');
    console.log(tabs);
    console.log(tabSections);
    var tableTabs = document.getElementsByClassName('table-tab');
    console.log(tableTabs);

    var _loop2 = function _loop2(i, _count) {
      var sectionChilds = tabSections.item(i).childElementCount; // debug
      // console.log(`sectionChilds: ${sectionChilds}, count: ${count}`)

      var _loop3 = function _loop3(j) {
        // debug
        // console.log(`j: ${j}, count: ${count}, tab:`, tabs.item(j));
        var startIdx = _count;
        tabs.item(j).addEventListener('click', function () {
          for (var f = startIdx; f < startIdx + sectionChilds; f++) {
            // debug
            // console.log(`j: ${j}, f: ${f}, startIdx: ${startIdx}`);
            j !== f ? tabs.item(f).classList.remove('active') : '';
            j !== f ? tableTabs.item(f).classList.remove('active') : '';
          }

          tabs.item(j).classList.add('active');
          tableTabs.item(j).classList.add('active');
        });
      };

      for (var j = _count; j < _count + sectionChilds; j++) {
        _loop3(j);
      }

      _count += sectionChilds; // debug
      // console.log('count:', count)
      // console.log('**********************************************************************************')

      count = _count;
    };

    for (var i = 0, count = 0; i < tabSections.length; i++) {
      _loop2(i, count);
    }
  }

  function removeClass(nodes, className, index) {
    for (var i = 0; i < nodes.length; i++) {
      // vai remover classe 
      // se nao for o proprio elemento
      i !== index ? nodes.item(i).classList.remove(className) : '';
    }
  }
}