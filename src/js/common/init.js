const DATA = {}

fetch('./config/data.json')
    .then(resp => resp.text())
    .then(text => JSON.parse(text))
    .then(data => {
        Object.assign(DATA, data)
        console.log('DATA: \n', DATA)

        init()
    })
    .catch(error => console.log('Error:', error))


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
