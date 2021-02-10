"use strict";

// toggle parcela - credito
function initRangeBarToggle() {
  var rangeBar = document.getElementById(ID.rangeBar);
  var displayDescription = document.getElementById(ID.displayDescription);
  var parcela = document.getElementById(ID.parcela);
  var credito = document.getElementById(ID.credito); // parcela

  parcela.addEventListener('click', function () {
    if (parcela.classList.contains('active')) {
      return;
    }

    rangeBar.dataset.selected = 'parcela';
    displayDescription.innerHTML = 'VALOR DA PARCELA: ';
    credito.classList.remove('active');
    parcela.classList.add('active');
    updateRangeBar();
  }); // credito

  credito.addEventListener('click', function () {
    if (credito.classList.contains('active')) {
      return;
    }

    rangeBar.dataset.selected = 'credito';
    displayDescription.innerHTML = 'CREDITO PRETENDIDO: ';
    parcela.classList.remove('active');
    credito.classList.add('active');
    updateRangeBar();
  });
}