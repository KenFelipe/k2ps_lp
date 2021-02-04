"use strict";

var rangeSlider = document.getElementById('rs-range-line');
var rangeBullet = document.getElementById('rs-bullet');
rangeSlider.addEventListener('input', function () {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = "".concat(rangeSlider.value / rangeSlider.max * 578, "px");
  rangeBullet.style.left = bulletPosition;
  document.getElementsByClassName('progress').item(0).style.width = bulletPosition;
}); /////////////////////////////////////////////////////////////////////////////////////////////////////////////

var parcela = document.getElementById('parcela');
parcela.addEventListener('click', function () {
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
rangeBar.addEventListener('input', function () {
  // const width = '20px'
  var progress = (rangeBar.value - rangeBar.min) / (rangeBar.max - rangeBar.min) * (rangeBar.offsetWidth - 40) + 20;
  console.log(progress, rangeBar.offsetWidth); // const width = '80%'

  var width = "".concat(progress, "px");
  document.getElementById('range-bar-progress').style.width = width;
});