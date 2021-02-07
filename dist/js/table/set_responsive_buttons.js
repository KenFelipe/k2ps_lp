"use strict";

function setResponsiveButtons() {
  var buttons = document.getElementsByClassName(CLASSNAME.button);

  if (buttons.length === 5) {
    //
    var btnClass = 'buttons-5';

    for (var btnI = 0; btnI < buttons.length; btnI++) {
      buttons.item(btnI).classList.add(btnClass);
    }
  }
}