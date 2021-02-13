function init() {
    ////////////// common //////////////
    createButtons()
    setResponsiveButtons()

    initTableSelBtnsClickEvent()
    initRbButtonsClickEvent()

    ////////////// table //////////////
    createTables()

    createTabs()
    initTabsClickEvent()
    setResponsiveTabs()

    activateTableElements()

    ////////////// rangeBar //////////////
    initRangeBarToggle()
    initRangeBarInputEvent()

    activateRangeBar()

    ////////////// active first elements //////////////
    activateFirstElement()

    ////////////// iframe //////////////
    initIframe()
}

init()