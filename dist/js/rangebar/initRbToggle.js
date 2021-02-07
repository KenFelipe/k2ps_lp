"use strict";

// toggle parcela - credito
function initRangeBarToggle() {
  var rangeBar = document.getElementById('range-bar');
  var description = document.getElementById('display-description'); // parcela

  var parcela = document.getElementById('parcela');
  parcela.addEventListener('click', function () {
    if (parcela.classList.contains('active')) {
      return;
    }

    rangeBar.dataset.selected = 'parcela';
    description.innerHTML = 'VALOR DA PARCELA: '; // rangebar update function()

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
    description.innerHTML = 'CREDITO PRETENDIDO: ';
    var barData = getActiveBarData();
    updateRangeBar(barData);
    parcela.classList.remove('active');
    credito.classList.add('active');
  });
}