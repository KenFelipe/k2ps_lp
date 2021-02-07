"use strict";

// button when onclick run update rangeBarssss info function getting index of click or actived
function updateRangeBar(data) {
  var rangeBar = document.getElementById('range-bar');
  var selected = rangeBar.dataset.selected;
  rangeBar.min = data[selected].min;
  rangeBar.max = data[selected].max;
  rangeBar.step = data[selected].step;
  rangeBar.value = data[selected].min;
  data[selected].formulas.forEach(function (formula) {
    // console.log(formula, rangeBar.value)
    if (rangeBar.value >= formula.min && rangeBar.value <= formula.max) {
      rangeBar.dataset.formula = formula.formula;
    }
  }); // rangeBar.dataset.formula = data[selected].formula

  var display = document.getElementById('display-value');
  var formula = rangeBar.dataset.formula.replaceAll('x', rangeBar.value); // console.log(formula)
  // const result = `${eval(formula)}`

  var result = "".concat(Math.round(eval(formula) * 100) / 100);
  var transed = result.replace(/(\.)/g, ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  display.value = transed; // display.value = rangeBar.value

  var rangeLimitDisplayMin = document.getElementById('range-min');
  rangeLimitDisplayMin.innerHTML = "R$".concat(rangeBar.min.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'));
  var rangeLimitDisplayMax = document.getElementById('range-max');
  rangeLimitDisplayMax.innerHTML = "R$".concat(rangeBar.max.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'));
  var progressBar = document.getElementById('range-bar-progress');
  progressBar.style.width = 0;
}

function initRangeBarToggle() {
  // parcela
  var parcela = document.getElementById('parcela');
  parcela.addEventListener('click', function () {
    if (parcela.classList.contains('active')) {
      return;
    }

    var rangeBar = document.getElementById('range-bar');
    rangeBar.dataset.selected = 'parcela'; // rangebar update function()

    var activeIndex = getActiveIndex();
    var barData = TABLES_DATA[Object.keys(TABLES_DATA)[activeIndex]].bar;
    updateRangeBar(barData);
    credito.classList.remove('active');
    parcela.classList.add('active');
  }); // credito

  var credito = document.getElementById('credito');
  credito.addEventListener('click', function () {
    if (credito.classList.contains('active')) {
      return;
    }

    var rangeBar = document.getElementById('range-bar');
    rangeBar.dataset.selected = 'credito';
    var activeIndex = getActiveIndex();
    var barData = TABLES_DATA[Object.keys(TABLES_DATA)[activeIndex]].bar;
    updateRangeBar(barData);
    parcela.classList.remove('active');
    credito.classList.add('active');
  });
}

initRangeBarToggle(); //////////////////////////////////////////////////////////////////////////////////////////////

var rangeBar = document.getElementById('range-bar');
rangeBar.addEventListener('input', function () {
  // update ProgressBar
  var rbThumbSize = 30;
  var rbRange = rangeBar.max - rangeBar.min;
  var rbVisibleWidth = rangeBar.offsetWidth - rbThumbSize / 2 * 2;
  var rbProgressValue = rangeBar.value - rangeBar.min;
  var rbProgressPercentage = rbProgressValue / rbRange;
  var progressWidth = "".concat(rbProgressPercentage * rbVisibleWidth + rbThumbSize / 2, "px");
  document.getElementById('range-bar-progress').style.width = progressWidth; //

  var activeIndex = getActiveIndex();
  var barData = TABLES_DATA[Object.keys(TABLES_DATA)[activeIndex]].bar; // setar Formula conforme regras definidas no data

  barData[rangeBar.dataset.selected].formulas.forEach(function (formula) {
    // setar se atingir a regra
    if (rangeBar.value >= formula.min && rangeBar.value <= formula.max) {
      rangeBar.dataset.formula = formula.formula;
    }
  }); // replace x para valor do rb

  var formula = rangeBar.dataset.formula.replaceAll('x', rangeBar.value); // console.log(formula)
  // executar a formula com "eval" ou Constructor "Function"

  var result = "".concat(Math.round(eval(formula) * 100) / 100); // local money expression

  var transed = result.replace(/(\.)/g, ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'); // to display

  var display = document.getElementById('display-value');
  display.value = transed;
  var displayResult = document.getElementById('display-result');
  displayResult.innerHTML = transed;
}); //////////////////////////////////////////////////////////////////////////////////////////////

function getActiveIndex() {
  // const showBarButtons = document.getElementsByClassName(CLASSNAME.showBarButton)
  var buttons = document.getElementsByClassName(CLASSNAME.button);

  for (var i = 0; i < buttons.length; i++) {
    if (!buttons.item(i).classList.contains('active')) {
      continue;
    }

    return i;
  }
} //////////////////////////////////////////////////////////////////////////////////////////////
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