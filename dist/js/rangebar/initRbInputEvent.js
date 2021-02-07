"use strict";

function initRangeBarInputEvent() {
  var rangeBar = document.getElementById('range-bar');
  rangeBar.addEventListener('input', function () {
    // update ProgressBar
    var rbThumbSize = 30;
    var rbRange = rangeBar.max - rangeBar.min;
    var rbVisibleWidth = rangeBar.offsetWidth - rbThumbSize / 2 * 2;
    var rbProgressValue = rangeBar.value - rangeBar.min;
    var rbProgressPercentage = rbProgressValue / rbRange;
    var progressWidth = "".concat(rbProgressPercentage * rbVisibleWidth + rbThumbSize / 2, "px");
    document.getElementById('range-bar-progress').style.width = progressWidth; // update formula

    var barData = getActiveBarData();
    var selected = rangeBar.dataset.selected;
    updateRangeBarFormula(barData[selected].formulas, rangeBar.value); // update display

    updateRangeBarDisplay(rangeBar.dataset.formula, rangeBar.value);
  });
}