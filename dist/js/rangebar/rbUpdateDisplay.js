"use strict";

// calc and update display
function updateRangeBarDisplay(formula, x) {
  var display = document.getElementById('display-value');
  var transed = x.replace(/(\.)/g, ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  display.value = transed; // replace x para valor do rb

  var formulaReplaced = formula.replaceAll('x', x); // executar a formula com "eval" ou Constructor "Function"

  var result = "".concat(Math.round(eval(formulaReplaced) * 100) / 100); // local money expression

  var resultTransed = result.replace(/(\.)/g, ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'); // to display

  var displayResult = document.getElementById('display-result');
  displayResult.innerHTML = resultTransed;
}