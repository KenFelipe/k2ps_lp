"use strict";

function initRangeBarInputEvent() {
  var rangeBar = document.getElementById('range-bar'); // console.log('debug')

  rangeBar.addEventListener('input', updateProgressBar);
  rangeBar.addEventListener('input', function () {
    // update formula
    var barData = getRangeBarData(getActiveRangeBarIndex());
    var selected = rangeBar.dataset.selected;
    updateRangeBarFormula(barData[selected].formulas); // update display

    updateRangeBarDisplay(rangeBar.dataset.formula, rangeBar.value);
  });

  function updateProgressBar() {
    var rbThumbSize = 30;
    var rbRange = rangeBar.max - rangeBar.min;
    var rbVisibleWidth = rangeBar.offsetWidth - rbThumbSize / 2 * 2;
    var rbProgressValue = rangeBar.value - rangeBar.min;
    var rbProgressPercentage = rbProgressValue / rbRange;
    var progressWidth = "".concat(rbProgressPercentage * rbVisibleWidth + rbThumbSize / 2, "px");
    var progressBar = document.getElementById('range-bar-progress');
    progressBar.style.width = progressWidth;
  }
}