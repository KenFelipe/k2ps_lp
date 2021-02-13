"use strict";

function activateRangeBar() {
  var rangeBar = document.getElementById(ID.rangeBar);
  rangeBar.dataset.selected = 'parcela';
  var firstDataType = DATA[Object.keys(DATA)[0]].type;

  if (firstDataType === CONFIG.dataTypeName.bar) {
    var firstButton = document.getElementsByClassName(CLASSNAME.button).item(0);
    firstButton.click();
    var parcela = document.getElementById(ID.parcela);
    parcela.click();
  } else {
    var displayDescription = document.getElementById(ID.displayDescription);
    displayDescription.innerHTML = 'VALOR DA PARCELA: ';

    var _parcela = document.getElementById(ID.parcela);

    _parcela.classList.add('active');
  }
}