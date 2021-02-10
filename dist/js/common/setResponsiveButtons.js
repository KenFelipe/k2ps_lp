"use strict";

function setResponsiveButtons() {
  var buttons = document.getElementsByClassName(CLASSNAME.button);

  if (buttons.length === 5) {
    var buttonClass = 'buttons-5';

    for (var i = 0; i < buttons.length; i++) {
      buttons.item(i).classList.add(buttonClass);
    }
  }
}