"use strict";

function createDescs() {
  var descCtn = document.getElementById('tbl-desc-ctn');
  DATA.forEach(function (data) {
    var descDev = document.createElement('ul');
    descDev.className = 'desc-col';

    if (!data.descriptions) {
      return;
    }

    data.descriptions.forEach(function (desc) {
      var li = document.createElement('li');
      li.innerText = desc.text;
      descDev.appendChild(li);
    });
    descCtn.appendChild(descDev);
  });
}