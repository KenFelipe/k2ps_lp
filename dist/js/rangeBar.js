"use strict";

var rangeSlider = document.getElementById('rs-range-line');
var rangeBullet = document.getElementById('rs-bullet');
rangeSlider.addEventListener('input', function () {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = "".concat(rangeSlider.value / rangeSlider.max * 578, "px");
  rangeBullet.style.left = bulletPosition;
  document.getElementsByClassName('progress').item(0).style.width = bulletPosition;
});