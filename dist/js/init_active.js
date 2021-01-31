"use strict";

// iniciar primeiros elementos(botao, tabs, tabelas) ativado
function initActiveNodes() {
  // botao
  var buttonsContainer = document.getElementById('select-table');
  buttonsContainer.childNodes.item(0).classList.add('active'); // primeiro tab section

  var tabsContainer = document.getElementById('select-tab');
  var tabSection = tabsContainer.childNodes;
  tabSection.item(0).classList.add('active'); // ativar todos primeiros tabs de cada section

  for (var i = 0; i < tabSection.length; i++) {
    tabSection.item(i).childNodes.item(0).classList.add('active');
  } // tables
  // primeiro tables section


  var tablesSectionClass = CLASS_ID_CONFIG["class"].tablesSection;
  var tableSections = document.getElementsByClassName(tablesSectionClass);
  tableSections.item(0).classList.add('active'); // ativar todas primeiros tables do section

  for (var _i = 0; _i < tableSections.length; _i++) {
    tableSections.item(_i).childNodes.item(0).classList.add('active');
  }
}