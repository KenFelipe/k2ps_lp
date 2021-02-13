"use strict";

// update display
function updateRangeBarDisplayValue() {
  var rangeBar = document.getElementById(ID.rangeBar);
  var currentValue = rangeBar.value;
  var currentFormula = rangeBar.dataset.formula;
  var result = calcRangeBarFormula(currentFormula, currentValue); // current value

  var displayValue = document.getElementById(ID.displayCurrentValue);
  displayValue.value = toBRL(currentValue, false); // result calclated

  var displayResult = document.getElementById(ID.displayResult);
  displayResult.innerHTML = toBRL(result);
} // to R$ notation


function toBRL(value) {
  var leaveDp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  // ex: 3.145678 => 3.14, 3.00123 => 3, 3 => 3
  var dpRounded = (Math.round(value * 100) / 100).toString(); // ex: 1.26 => 1,26, 1 => 1,00

  var dpChanged = dpRounded.indexOf('.') === -1 && leaveDp ? (dpRounded + '.00').replaceAll(/(\.)/g, ',') : dpRounded.replaceAll(/(\.)/g, ','); // ex: 1000 => 1.000 

  var BRLNotation = dpChanged.replaceAll(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  return BRLNotation;
} // calc formula replacing x


function calcRangeBarFormula(formula, x) {
  var formulaReplaced = formula.replaceAll('x', x);
  var result = eval(formulaReplaced);
  return result;
}