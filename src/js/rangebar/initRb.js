function initRangeBar() {
    // toggle parcela-credito
    initRangeBarToggle()

    // event rangebar
    initRbButtonsClickEvent()
    initRangeBarInputEvent()

    activeRangeBar()
}

initRangeBar()

function activeRangeBar() {
    const rangeBar = document.getElementById('range-bar')
    rangeBar.dataset.selected = 'parcela'

    const firstButtonDataType = DATA[Object.keys(DATA)[0]].type

    if(firstButtonDataType === 'bar') {
        const firstButton = document.getElementsByClassName('select__button').item(0)
        firstButton.click()

        const parcela = document.getElementById('parcela')
        parcela.click()
    } else {
        const description = document.getElementById('display-description')
        description.innerHTML = 'VALOR DA PARCELA: '

        const parcela = document.getElementById('parcela')
        parcela.classList.add('active')
    }
}
