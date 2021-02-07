function initRangeBar() {
    // toggle parcela-credito
    initRangeBarToggle()

    // event oninput rangebar
    initRangeBarInputEvent()

    activeRangeBar()
}

initRangeBar()

function activeRangeBar() {
    const rangeBar = document.getElementById('range-bar')
    // 'parcela' ou 'credito'
    rangeBar.dataset.selected = 'parcela'

    //
    const firstButtonDataType = DATA[Object.keys(DATA)[0]].type

    if(firstButtonDataType === 'bar') {
        const firstButton = document.getElementsByClassName('select__button').item(0)
        firstButton.click()

        const parcela = document.getElementById('parcela')
        parcela.click()
    }

    const parcela = document.getElementById('parcela')
    parcela.classList.add('active')
}
