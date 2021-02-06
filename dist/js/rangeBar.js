"use strict";

// button when onclick run update rangeBarssss info function getting index of click or actived
function updateRangeBar(data) {
  var rangeBar = document.getElementById('range-bar');
  var selected = rangeBar.dataset.selected;
  rangeBar.min = data[selected].min;
  rangeBar.max = data[selected].max;
  rangeBar.step = data[selected].step;
  rangeBar.value = data[selected].min;
  var display = document.getElementById('display-value');
  display.value = rangeBar.value;
  var rangeLimitDisplayMin = document.getElementById('range-min');
  rangeLimitDisplayMin.innerHTML = "R$".concat(rangeBar.min);
  var rangeLimitDisplayMax = document.getElementById('range-max');
  rangeLimitDisplayMax.innerHTML = "R$".concat(rangeBar.max);
  var progressBar = document.getElementById('range-bar-progress');
  progressBar.style.width = 0;
}

function getActiveIndex() {
  // const showBarButtons = document.getElementsByClassName(CLASSNAME.showBarButton)
  var buttons = document.getElementsByClassName(CLASSNAME.button);

  for (var i = 0; i < buttons.length; i++) {
    if (!buttons.item(i).classList.contains('active')) {
      continue;
    }

    return i;
  }
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

initRangeBarToggle(); ////////////////////////////////////////////////

var rangeBar = document.getElementById('range-bar');
rangeBar.addEventListener('input', function () {
  var progress = (rangeBar.value - rangeBar.min) / (rangeBar.max - rangeBar.min) * (rangeBar.offsetWidth - 40) + 20;
  var width = "".concat(progress, "px"); // console.log(progress, rangeBar.offsetWidth, rangeBar.value)

  document.getElementById('range-bar-progress').style.width = width; // local money expression

  var transed = rangeBar.value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'); // to display

  var display = document.getElementById('display-value');
  display.value = transed;
}); // Kansei go ni Yaru
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