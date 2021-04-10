"use strict";

function activateFirstElement() {
  var firstDataType = DATA[0].dataType;
  var firstButton = document.getElementsByClassName(CLASSNAME.button).item(0);
  firstButton.click(); // if(firstDataType === CONFIG.dataTypeName.table) {
  // }

  if (firstDataType === CONFIG.dataTypeName.bar) {
    var parcela = document.getElementById(ID.parcela);
    parcela.click();
  }
}