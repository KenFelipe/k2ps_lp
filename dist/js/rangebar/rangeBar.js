"use strict";

// toggle parcela - credito
function initRangeBarToggle() {
  var rangeBar = document.getElementById('range-bar'); // parcela

  var parcela = document.getElementById('parcela');
  parcela.addEventListener('click', function () {
    if (parcela.classList.contains('active')) {
      return;
    }

    rangeBar.dataset.selected = 'parcela'; // rangebar update function()

    var barData = getActiveBarData();
    updateRangeBar(barData);
    credito.classList.remove('active');
    parcela.classList.add('active');
  }); // credito

  var credito = document.getElementById('credito');
  credito.addEventListener('click', function () {
    if (credito.classList.contains('active')) {
      return;
    }

    rangeBar.dataset.selected = 'credito';
    var barData = getActiveBarData();
    updateRangeBar(barData);
    parcela.classList.remove('active');
    credito.classList.add('active');
  });
}

initRangeBarToggle(); //////////////////////////////////////////////////////////////////////////////////////////////

function initRangeBar() {
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

initRangeBar(); //////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// after finished
// function test() {
//     let number = '1234567d'
//     const lastI = number.length - 1
//     console.log(lastI, number[lastI])
//     if(!number[lastI].match(/\d/)) {
//         // console.log('not number')
//         number = number.slice(0, lastI)
//         console.log(number)
//     }
//     const input = document.querySelector('[type=number]')
//     input.addEventListener('focus', () => {
//         console.log('focus')
//     })
//     input.addEventListener('click', () => {
//         console.log('click')
//     })
//     input.addEventListener('keyup', () => {
//         console.log('keyup')
//     })
//     // input.addEventListener('input', () => {
//     //     input.value = 123
//     //     console.log(input)
//     // })
//     console.log(input)
// }
// test()