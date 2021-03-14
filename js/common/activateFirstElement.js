"use strict";

function activateFirstElement() {
  var firstDataType = DATA[Object.keys(DATA)[0]].type;
  var firstButton = document.getElementsByClassName(CLASSNAME.button).item(0);
  firstButton.click(); // if(firstDataType === CONFIG.dataTypeName.table) {
  // }

  if (firstDataType === CONFIG.dataTypeName.bar) {
    var parcela = document.getElementById(ID.parcela);
    parcela.click();
  }
}