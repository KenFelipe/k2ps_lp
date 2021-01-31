"use strict";

// iniciar primeiros elementos(botao, tabs, tabelas) ativado
function initActiveNodes() {
  // botao
  var selectTablesContainerClass = CLASS_ID_CONFIG["class"].selectTablesContainer;
  var buttonsContainer = document.getElementsByClassName(selectTablesContainerClass).item(0);
  buttonsContainer.childNodes.item(0).classList.add('active'); // tab
  // primeiro tab section

  var tabBarsContainerClass = CLASS_ID_CONFIG["class"].tabBarsContainer;
  var tabBarsContainer = document.getElementsByClassName(tabBarsContainerClass).item(0);
  var tabBars = tabBarsContainer.childNodes;
  tabBars.item(0).classList.add('active'); // ativar todos primeiros tabs de cada section

  for (var i = 0; i < tabBars.length; i++) {
    tabBars.item(i).childNodes.item(0).classList.add('active');
  } // tables
  // primeiro tables section


  var tablesSectionClass = CLASS_ID_CONFIG["class"].tablesSection;
  var tableSections = document.getElementsByClassName(tablesSectionClass);
  tableSections.item(0).classList.add('active'); // ativar todas primeiros tables do section

  for (var _i = 0; _i < tableSections.length; _i++) {
    tableSections.item(_i).childNodes.item(0).classList.add('active');
  }
}