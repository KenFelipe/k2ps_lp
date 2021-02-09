"use strict";

function initRangeBarInputEvent() {
  var rangeBar = document.getElementById('range-bar');
  rangeBar.addEventListener('input', updateValues);
  rangeBar.addEventListener('input', updateRangeBarFormula);

  function updateValues() {
    updateRangeBarDisplayValue();
    updateProgressBar();
  }

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