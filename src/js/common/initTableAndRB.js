function initTableAndRB() {
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

    ////////////// active first element //////////////
    activateFirstElement()
}
