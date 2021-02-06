"use strict";

function rangeTabletest() {
  // const buttonsContainer = document.getElementById('buttons-container')
  var buttonsbar = document.getElementsByClassName('bar-button');
  var buttonsT = document.getElementsByClassName(CLASSNAME.tablesSelectButton);
  var tabBars = document.getElementsByClassName('tabbar');
  var tablesSectionClass = CLASSNAME.tablesSection;
  var tablesSections = document.getElementsByClassName(tablesSectionClass);
  console.log(buttonsbar);
  console.log(buttonsbar.item(0));

  for (var i = 0; i < buttonsbar.length; i++) {
    buttonsbar.item(i).addEventListener('click', function () {
      for (var targetIndex = 0; targetIndex < buttonsT.length; targetIndex++) {
        // nao vai remover classe do proprio elemento clicado
        // e dos elementos de mesmo index.
        buttonsT.item(targetIndex).classList.remove('active');
        tabBars.item(targetIndex).classList.remove('active');
        tablesSections.item(targetIndex).classList.remove('active');
      }
    });
  }
}

rangeTabletest();