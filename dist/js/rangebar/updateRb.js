"use strict";

function getRangeBarData(index) {
  var keys = Object.keys(DATA);
  var keysFiltered = keys.filter(function (key) {
    return DATA[key].type === 'bar';
  });
  var data = DATA[keysFiltered[index]];
  return data.bar;
}

function getActiveRangeBarIndex() {
  var showRbButtons = document.getElementsByClassName(CLASSNAME.showRbButton);

  for (var i = 0; i < showRbButtons.length; i++) {
    if (!showRbButtons.item(i).classList.contains('active')) {
      continue;
    }

    return i;
  }
} //


function updateRangeBarFormula() {
  var rangeBar = document.getElementById('range-bar');
  var selected = rangeBar.dataset.selected;
  var activeRangeBarIndex = getActiveRangeBarIndex();
  var activeRangeBarData = getRangeBarData(activeRangeBarIndex);
  var formulasData = activeRangeBarData[selected].formulas;
  formulasData.forEach(function (formula) {
    if (rangeBar.value < formula.min || rangeBar.value > formula.max) {
      return;
    }

    if (rangeBar.dataset.formula === formula.formula) {
      return;
    }

    rangeBar.dataset.formula = formula.formula;
  });
} // fire on: 
// rbButton-onclick, parcela/credito-toggle-onclick


function updateRangeBar() {
  var rangeBar = document.getElementById('range-bar');
  var selected = rangeBar.dataset.selected;
  var activeRangeBarIndex = getActiveRangeBarIndex();
  var activeRangeBarData = getRangeBarData(activeRangeBarIndex);
  rangeBar.min = activeRangeBarData[selected].min;
  rangeBar.max = activeRangeBarData[selected].max;
  rangeBar.step = activeRangeBarData[selected].step; // iniciar com valor minimo

  rangeBar.value = activeRangeBarData[selected].min; //

  var rangeLimitDisplayMin = document.getElementById('range-min');
  rangeLimitDisplayMin.innerHTML = 'R$' + toBRL(rangeBar.min, false);
  var rangeLimitDisplayMax = document.getElementById('range-max');
  rangeLimitDisplayMax.innerHTML = 'R$' + toBRL(rangeBar.max, false); // reset progressBar

  var progressBar = document.getElementById('range-bar-progress');
  progressBar.style.width = 0; // update formula

  updateRangeBarFormula(); // calc formula and update display value

  updateRangeBarDisplayValue();
}