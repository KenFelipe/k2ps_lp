"use strict";

function setResponsiveTabs() {
  var tabBars = document.getElementsByClassName(CLASSNAME.tabBar);
  var tsButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton); // tabBar bottom bar

  var bottomBar = document.getElementById(ID.bottomBar);

  var _loop = function _loop(tabBarI) {
    // classe atribuido depende da quantidade de tabs
    var tabClass = getTabClassName(tabBars.item(tabBarI).childElementCount);
    var tabs = tabBars.item(tabBarI).childNodes;

    for (var tabI = 0; tabI < tabs.length; tabI++) {
      tabs.item(tabI).classList.add(tabClass);
    } // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
    // colocar na logica da init active 


    if (tabBarI === 0) {
      bottomBar.className = tabClass;
    } // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
    // pro bottomBar classe adequado vai ser 
    // atribuido cada vez que clicar tsButtons


    tsButtons.item(tabBarI).addEventListener('click', function () {
      bottomBar.className = tabClass;
    });
  };

  for (var tabBarI = 0; tabBarI < tabBars.length; tabBarI++) {
    _loop(tabBarI);
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