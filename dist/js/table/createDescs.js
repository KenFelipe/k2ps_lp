"use strict";

function createDescs() {
  var descCtn = document.getElementById('tbl-desc-ctn');
  DATA.forEach(function (data) {
    var sec = document.createElement('div');
    sec.className = 'desc-div';
    data.tableDataList.forEach(function (tableData) {
      var descDev = document.createElement('ul');
      descDev.className = 'desc-col';
      tableData.descriptions.forEach(function (desc) {
        var li = "\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<span class=\"desc-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i \n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"".concat(desc.icon, "\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: #008def;\"\n\t\t\t\t\t\t\t\t\t\t\t></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"desc-text\">").concat(desc.text, "</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t");
        descDev.innerHTML += li;
      });

      if (tableData.aside) {
        var li = "\n\t\t\t\t\t\t\t\t\t<li class=\"desc-aside-li\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"desc-aside\">".concat(tableData.aside, "</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t");
        descDev.innerHTML += li;
      }

      sec.appendChild(descDev);
    });
    descCtn.appendChild(sec);
  });
}