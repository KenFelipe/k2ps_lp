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

    ////////////// iframe //////////////
    initIframe()
}

init()