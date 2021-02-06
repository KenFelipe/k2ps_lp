"use strict";

// criar abas(tabs) atraves de dados
// configurado em 'config/data.js'
function createTabs() {
  var tabClass = CLASSNAME.tab;
  var tabBarClass = CLASSNAME.tabBar;
  var tabBarsContainer = document.getElementById(ID.tabBarContainer);
  Object.keys(TABLES_DATA).forEach(function (tableName) {
    // nao tem tabs no rangeBar
    if (TABLES_DATA[tableName].type === "table") {
      var tabBar = document.createElement('div');
      tabBar.classList.add(tabBarClass);
      Object.keys(TABLES_DATA[tableName].table).forEach(function (tabName) {
        var tab = document.createElement('button');
        tab.classList.add(tabClass);
        var span = document.createElement('span');
        span.innerHTML = tabName; // ***************************************************
        // PRECISA INSERIR LOGICA PARA
        // PROCESSAMENTO DE TEXT APOS DA <SPAN> 
        // (LABEL DO TAB)
        // ***************************************************

        tab.appendChild(span);
        tabBar.appendChild(tab);
      });
      tabBarsContainer.appendChild(tabBar);
    }
  });
}