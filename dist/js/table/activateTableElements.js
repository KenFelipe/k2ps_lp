"use strict";

// iniciar primeiros elementos(botao, tabs, tabelas) ativado
function activateTableElements() {
  var tabbars = document.getElementsByClassName(CLASSNAME.tabbar);

  for (var i = 0; i < tabbars.length; i++) {
    // active first tab of tabBar and first table of tableSection
    tabbars.item(i).childNodes.item(0).click();
  } //


  var firstDataType = DATA[Object.keys(DATA)[0]].type;

  if (firstDataType === CONFIG.dataTypeName.table) {
    var firstButton = document.getElementsByClassName(CLASSNAME.button).item(0);
    firstButton.click();
  }
}