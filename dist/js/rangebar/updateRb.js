"use strict";

function getRangeBarData(index) {
  var keys = Object.keys(DATA);
  var keysFiltered = keys.filter(function (key) {
    return DATA[key].type === CONFIG.dataTypeName.bar;
  });
  var data = DATA[keysFiltered[index]];
  return data.bar;
}

function getActiveRangeBarIndex() {
  var turnOnRbBtns = document.getElementsByClassName(CLASSNAME.turnOnRbBtn);

  for (var i = 0; i < turnOnRbBtns.length; i++) {
    if (!turnOnRbBtns.item(i).classList.contains('active')) {
      continue;
    }

    return i;
  }
} //


function updateRangeBarFormula() {
  var rangeBar = document.getElementById(ID.rangeBar);
  var selected = rangeBar.dataset.selected;
  var activeRangeBarIndex = getActiveRangeBarIndex();
  var activeRangeBarData = getRangeBarData(activeRangeBarIndex);
  var formulas = activeRangeBarData[selected].formulas;
  formulas.forEach(function (formula) {
    if (rangeBar.value < formula.min || rangeBar.value > formula.max) {
      return;
    }

    if (rangeBar.dataset.formula === formula.formula) {
      return;
    }

    rangeBar.dataset.formula = formula.formula;
  });
} // raise on: 
// rbButton-onclick, parcela/credito-toggle-onclick


function updateRangeBar() {
  var rangeBar = document.getElementById(ID.rangeBar);
  var selected = rangeBar.dataset.selected;
  var activeRangeBarIndex = getActiveRangeBarIndex();
  var activeRangeBarData = getRangeBarData(activeRangeBarIndex);
  rangeBar.min = activeRangeBarData[selected].min;
  rangeBar.max = activeRangeBarData[selected].max;
  rangeBar.step = activeRangeBarData[selected].step; // iniciar com valor minimo

  rangeBar.value = activeRangeBarData[selected].min; //

  var rangeLimitDisplayMin = document.getElementById(ID.displayRangeMin);
  rangeLimitDisplayMin.innerHTML = 'R$' + toBRL(rangeBar.min, false);
  var rangeLimitDisplayMax = document.getElementById(ID.displayRangeMax);
  rangeLimitDisplayMax.innerHTML = 'R$' + toBRL(rangeBar.max, false); // reset progressBar

  var progressBar = document.getElementById(ID.rbProgressBar);
  progressBar.style.width = 0; // update formula

  updateRangeBarFormula(); // calc formula and update display value

  updateRangeBarDisplayValue();
}