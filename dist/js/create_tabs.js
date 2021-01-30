"use strict";

// criar abas(tabs) atraves de dados
// configurado em 'config/data.js'
function createTabs() {
  var tabsContainer = document.getElementById('select-tab');
  Object.keys(TABLES_DATA).forEach(function (tableName) {
    var tabSection = document.createElement('div');
    tabSection.classList.add('tab-section');
    Object.keys(TABLES_DATA[tableName]).forEach(function (tabName) {
      var tab = document.createElement('button');
      tab.classList.add('select-tab__tab');
      var span = document.createElement('span');
      span.innerHTML = tabName;
      tab.appendChild(span);
      tabSection.appendChild(tab);
    });
    tabsContainer.appendChild(tabSection);
  }); //debug
  // console.log(tabsContainer)
  // console.log('***************************************')
}