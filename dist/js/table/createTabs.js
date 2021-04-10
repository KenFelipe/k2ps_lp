"use strict";

// criar abas(tabs) que seleciona table 
// atraves de dados configurado em 'config/data.js'
function createTabs() {
  var tabClass = CLASSNAME.tab;
  var tabbarClass = CLASSNAME.tabbar;
  var tabbarCtnr = document.getElementById(ID.tabbarCtnr);
  DATA.forEach(function (data) {
    if (data.dataType !== CONFIG.dataTypeName.table) {
      return;
    }

    var tabbar = document.createElement('div');
    tabbar.classList.add(tabbarClass);
    data.tableDataList.forEach(function (tableData) {
      var tab = document.createElement('button');
      tab.classList.add(tabClass);
      var span = document.createElement('span');
      span.innerHTML = tableData.tabName.replace('\\', '<br/>');
      tab.appendChild(span);
      tabbar.appendChild(tab);
    });
    tabbarCtnr.appendChild(tabbar);
  });
}