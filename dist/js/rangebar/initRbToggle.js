"use strict";

// toggle parcela - credito
function initRangeBarToggle() {
  var rangeBar = document.getElementById('range-bar');
  var description = document.getElementById('display-description');
  var parcela = document.getElementById('parcela');
  var credito = document.getElementById('credito'); // parcela

  parcela.addEventListener('click', function () {
    if (parcela.classList.contains('active')) {
      return;
    }

    rangeBar.dataset.selected = 'parcela';
    description.innerHTML = 'VALOR DA PARCELA: ';
    credito.classList.remove('active');
    parcela.classList.add('active');
    updateRangeBar();
  }); // credito

  credito.addEventListener('click', function () {
    if (credito.classList.contains('active')) {
      return;
    }

    rangeBar.dataset.selected = 'credito';
    description.innerHTML = 'CREDITO PRETENDIDO: ';
    parcela.classList.remove('active');
    credito.classList.add('active');
    updateRangeBar();
  });
}