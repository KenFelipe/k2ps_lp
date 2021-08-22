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
      var li = "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"desc-icon\">\n\t\t\t\t\t\t\t\t\t<i \n\t\t\t\t\t\t\t\t\t\tclass=\"".concat(desc.icon, "\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #008def;\"\n\t\t\t\t\t\t\t\t\t></i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span class=\"desc-text\">").concat(desc.text, "</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t");
      descDev.innerHTML += li;
    });
    descCtn.appendChild(descDev);
  });
}