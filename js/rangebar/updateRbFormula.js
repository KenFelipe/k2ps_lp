"use strict";

function updateRangeBarFormula() {
  var rangeBar = document.getElementById(ID.rangeBar);
  var selected = rangeBar.dataset.selected;
  var activeRangeBarData = getActiveRangeBarData();
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
}