"use strict";

// criar abas(tabs) atraves de dados
// configurado em 'config/data.js'
function createTabs() {
  var tabBarsContainerClass = CLASSNAME_CONFIG.tabBarsContainer;
  var tabBarClass = CLASSNAME_CONFIG.tabBar;
  var tabClass = CLASSNAME_CONFIG.tab;
  var tabBarsContainer = document.getElementsByClassName(tabBarsContainerClass).item(0);
  Object.keys(TABLES_DATA).forEach(function (tableName) {
    var tabBar = document.createElement('div');
    tabBar.classList.add(tabBarClass);
    Object.keys(TABLES_DATA[tableName]).forEach(function (tabName) {
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
  });
}