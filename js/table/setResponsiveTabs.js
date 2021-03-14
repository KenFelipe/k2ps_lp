"use strict";

function setResponsiveTabs() {
  setForTabbarUnderline();
  setForTabs();

  function setForTabs() {
    var tabbars = document.getElementsByClassName(CLASSNAME.tabbar);

    for (var tabbarI = 0; tabbarI < tabbars.length; tabbarI++) {
      // classe atribuido depende da quantidade de tabs
      var tabClass = getTabClassName(tabbars.item(tabbarI).childElementCount); // adicionar pro tabs

      var tabs = tabbars.item(tabbarI).childNodes;

      for (var tabI = 0; tabI < tabs.length; tabI++) {
        tabs.item(tabI).classList.add(tabClass);
      }
    }
  }

  function setForTabbarUnderline() {
    var tabbars = document.getElementsByClassName(CLASSNAME.tabbar);

    var _loop = function _loop(tabbarI) {
      var tabClass = getTabClassName(tabbars.item(tabbarI).childElementCount);
      var tableSelBtns = document.getElementsByClassName(CLASSNAME.tableSelBtn); // pro tabbarUnderline classe adequado vai ser 
      // atribuido cada vez que clicar tableSelBtns

      tableSelBtns.item(tabbarI).addEventListener('click', function () {
        // tabbar bottom bar
        var tabbarUnderline = document.getElementById(ID.tabbarUnderline);

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
    }
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