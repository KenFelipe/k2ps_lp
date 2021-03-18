function initTableAndRB() {
    ////////////// common //////////////
    createButtons()
    // setResponsiveButtons()

    initTableSelBtnsClickEvent() // no change
    initRbButtonsClickEvent()

    ////////////// table //////////////
    createTables()

    createTabs()
    initTabsClickEvent() // no change
    // setResponsiveTabs()

    activateTableElements() // no change

    ////////////// rangeBar //////////////
    initRangeBarToggle()
    initRangeBarInputEvent()

    activateRangeBar()

    ////////////// active first element //////////////
    activateFirstElement()
}
