"use strict";

function initRangeBar() {
  // toggle parcela-credito
  initRangeBarToggle(); // event rangebar

  initRbButtonsClickEvent();
  initRangeBarInputEvent();
  activeRangeBar();
}

initRangeBar();

function activeRangeBar() {
  var rangeBar = document.getElementById('range-bar');
  rangeBar.dataset.selected = 'parcela';
  var firstButtonDataType = DATA[Object.keys(DATA)[0]].type;

  if (firstButtonDataType === 'bar') {
    var firstButton = document.getElementsByClassName('select__button').item(0);
    firstButton.click();
    var parcela = document.getElementById('parcela');
    parcela.click();
  } else {
    var description = document.getElementById('display-description');
    description.innerHTML = 'VALOR DA PARCELA: ';

    var _parcela = document.getElementById('parcela');

    _parcela.classList.add('active');
  }
}