"use strict";

// raise on: 
// rbButton-onclick, parcela/credito-toggle-onclick
function updateRangeBar() {
  var rangeBar = document.getElementById(ID.rangeBar);
  var selected = rangeBar.dataset.selected;
  var activeRangeBarData = getActiveRangeBarData();
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