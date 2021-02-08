"use strict";

function getActiveBarData() {
  var activeIndex = getActiveIndex();
  var keys = Object.keys(DATA);
  var data = DATA[keys[activeIndex]];
  return data.bar;
}

function getActiveIndex() {
  // const showRbButtons = document.getElementsByClassName(CLASSNAME.showRbButton)
  var buttons = document.getElementsByClassName(CLASSNAME.button);

  for (var i = 0; i < buttons.length; i++) {
    if (!buttons.item(i).classList.contains('active')) {
      continue;
    }

    return i;
  }
}

function updateRangeBarFormula(formulasData) {
  var rangeBar = document.getElementById('range-bar');
  formulasData.forEach(function (formula) {
    if (rangeBar.value < formula.min || rangeBar.value > formula.max) {
      return;
    }

    if (rangeBar.dataset.formula === formula.formula) {
      return;
    }

    rangeBar.dataset.formula = formula.formula;
  });
}

function updateRangeBar(data) {
  var rangeBar = document.getElementById('range-bar');
  var selected = rangeBar.dataset.selected;
  rangeBar.min = data[selected].min;
  rangeBar.max = data[selected].max;
  rangeBar.step = data[selected].step; // iniciar com valor minimo

  rangeBar.value = data[selected].min; //

  var rangeLimitDisplayMin = document.getElementById('range-min');
  rangeLimitDisplayMin.innerHTML = 'R$' + toBRL(rangeBar.min, false);
  var rangeLimitDisplayMax = document.getElementById('range-max');
  rangeLimitDisplayMax.innerHTML = 'R$' + toBRL(rangeBar.max, false); //

  var progressBar = document.getElementById('range-bar-progress');
  progressBar.style.width = 0; // update formula

  updateRangeBarFormula(data[selected].formulas);
  updateRangeBarDisplay(rangeBar.dataset.formula, rangeBar.value);
}