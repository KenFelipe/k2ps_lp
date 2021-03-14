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

    ////////////// active first element //////////////
    activateFirstElement()

    ////////////// iframe //////////////
    initIframe()
}

// fetch('./config/data.js')
//     .then(resp => resp.text())
//     .then(resp => console.log(resp))
//     .then(jsontext => JSON.parse(jsontext))
//     .then(data => console.log(data))
//     .catch(error => console.log('Error:', error))

init()