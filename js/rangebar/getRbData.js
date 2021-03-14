"use strict";

function getRangeBarData(index) {
  var keys = Object.keys(DATA);
  var keysFiltered = keys.filter(function (key) {
    return DATA[key].type === CONFIG.dataTypeName.bar;
  });
  var data = DATA[keysFiltered[index]];
  return data.bar;
}

function getActiveRangeBarIndex() {
  var turnOnRbBtns = document.getElementsByClassName(CLASSNAME.turnOnRbBtn);

  for (var i = 0; i < turnOnRbBtns.length; i++) {
    if (!turnOnRbBtns.item(i).classList.contains('active')) {
      continue;
    }

    return i;
  }
}

function getActiveRangeBarData() {
  var activeRbIndex = getActiveRangeBarIndex();
  return getRangeBarData(activeRbIndex);
}