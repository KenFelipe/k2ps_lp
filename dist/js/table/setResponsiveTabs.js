"use strict";

function setResponsiveTabs() {
  var tabbars = document.getElementsByClassName(CLASSNAME.tabbar);
  var tableSelBtns = document.getElementsByClassName(CLASSNAME.tableSelBtn); // tabbar bottom bar

  var tabbarUnderline = document.getElementById(ID.tabbarUnderline);

  var _loop = function _loop(tabbarI) {
    // classe atribuido depende da quantidade de tabs
    var tabClass = getTabClassName(tabbars.item(tabbarI).childElementCount); // adicionar pro tabs

    var tabs = tabbars.item(tabbarI).childNodes;

    for (var tabI = 0; tabI < tabs.length; tabI++) {
      tabs.item(tabI).classList.add(tabClass);
    } // pro tabbarUnderline classe adequado vai ser 
    // atribuido cada vez que clicar tableSelBtns


    tableSelBtns.item(tabbarI).addEventListener('click', function () {
      if (!tabbarUnderline.classList.contains('active')) {
        tabbarUnderline.className = tabClass;
        return;
      }

      tabbarUnderline.className = tabClass;
      tabbarUnderline.classList.add('active');
    });
  };

  for (var tabbarI = 0; tabbarI < tabbars.length; tabbarI++) {
    _loop(tabbarI);
  } // classe atribuido depende da quantidade de tabs


  function getTabClassName(tabs) {
    if (tabs === 5) {
      return 'tabs-5';
    }

    if (tabs > 5) {
      return 'tabs-more-5';
    }

    return 'tabs-less-5';
  }
}