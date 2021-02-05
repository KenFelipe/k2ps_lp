"use strict";

var rangeSlider = document.getElementById('rs-range-line');
var rangeBullet = document.getElementById('rs-bullet');
rangeSlider.addEventListener('input', function () {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = "".concat(rangeSlider.value / rangeSlider.max * 578, "px");
  rangeBullet.style.left = bulletPosition;
  document.getElementsByClassName('progress').item(0).style.width = bulletPosition;
}); /////////////////////////////////////////////////////////////////////////////////////////////////////////////

var range_data = {
  "automovel": {
    range: {
      min: 10,
      max: 2525250,
      step: 1
    }
  }
}; // button when onclick run update rangeBarssss info function getting index of click or actived

var parcela = document.getElementById('parcela');
parcela.addEventListener('click', function () {
  var contain = parcela.classList.contains('active'); // console.log(contain)

  var selectButtons = document.getElementsByClassName('tables-select__button'); // console.log(selectButtons)

  for (var i = 0; i < selectButtons.length; i++) {
    if (!selectButtons.item(i).classList.contains('active')) {
      continue;
    }

    var target = range_data[Object.keys(TABLES_DATA)[i]]; // console.log(target)

    console.log(target.range.min);
  }

  credito.classList.remove('active');
  parcela.classList.add('active');
});
var credito = document.getElementById('credito');
credito.addEventListener('click', function () {
  parcela.classList.remove('active');
  credito.classList.add('active');
});
var rangeBar = document.getElementById('range-bar');
console.log(rangeBar);
rangeBar.value = rangeBar.min;
rangeBar.min = 1000;
rangeBar.max = 1250;
var display = document.getElementById('display-value');
display.value = rangeBar.value;
rangeBar.addEventListener('input', function () {
  var progress = (rangeBar.value - rangeBar.min) / (rangeBar.max - rangeBar.min) * (rangeBar.offsetWidth - 40) + 20;
  var width = "".concat(progress, "px"); // console.log(progress, rangeBar.offsetWidth, rangeBar.value)

  document.getElementById('range-bar-progress').style.width = width; // to display

  var display = document.getElementById('display-value'); // console.log(typeof rangeBar.value)

  var transed = rangeBar.value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  console.log(transed);
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