"use strict";

// iniciar primeiros elementos(botao, tabs, tabelas) ativado
// (atribui class ".active")
function setActive() {
  // botao
  var selectTablesContainerClass = CLASSNAME_CONFIG.selectTablesContainer;
  var buttonsContainer = document.getElementsByClassName(selectTablesContainerClass).item(0);
  buttonsContainer.childNodes.item(0).classList.add('active'); // tab
  // primeiro tab section

  var tabBarsContainerClass = CLASSNAME_CONFIG.tabBarsContainer;
  var tabBarsContainer = document.getElementsByClassName(tabBarsContainerClass).item(0);
  var tabBars = tabBarsContainer.childNodes;
  tabBars.item(0).classList.add('active'); // ativar todos primeiros tabs de cada section

  for (var i = 0; i < tabBars.length; i++) {
    tabBars.item(i).childNodes.item(0).classList.add('active');
  } // tables
  // primeiro tables section


  var tablesSectionClass = CLASSNAME_CONFIG.tablesSection;
  var tablesSections = document.getElementsByClassName(tablesSectionClass);
  tablesSections.item(0).classList.add('active'); // ativar todas primeiros tables do section

  for (var _i = 0; _i < tablesSections.length; _i++) {
    tablesSections.item(_i).childNodes.item(0).classList.add('active');
  }
}