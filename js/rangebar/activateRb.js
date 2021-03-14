"use strict";

function activateRangeBar() {
  var rangeBar = document.getElementById(ID.rangeBar);
  rangeBar.dataset.selected = 'parcela';
  var displayDescription = document.getElementById(ID.displayDescription);
  displayDescription.innerHTML = 'VALOR DA PARCELA: ';
  var parcela = document.getElementById(ID.parcela);
  parcela.classList.add('active');
}