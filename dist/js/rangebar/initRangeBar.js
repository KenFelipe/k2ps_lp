"use strict";

function initRangeBar() {
  // toggle parcela-credito
  initRangeBarToggle(); // event oninput rangebar

  initRangeBarInputEvent();
  activeRangeBar();
}

initRangeBar();

function activeRangeBar() {
  var rangeBar = document.getElementById('range-bar'); // 'parcela' ou 'credito'

  rangeBar.dataset.selected = 'parcela'; //

  var firstButtonDataType = DATA[Object.keys(DATA)[0]].type;

  if (firstButtonDataType === 'bar') {
    var firstButton = document.getElementsByClassName('select__button').item(0);
    firstButton.click();

    var _parcela = document.getElementById('parcela');

    _parcela.click();
  }

  var parcela = document.getElementById('parcela');
  parcela.classList.add('active');
}