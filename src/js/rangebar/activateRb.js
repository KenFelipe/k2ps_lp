function activateRangeBar() {
    const rangeBar = document.getElementById(ID.rangeBar)
    rangeBar.dataset.selected = 'parcela'

    const firstDataType = DATA[Object.keys(DATA)[0]].type

    if(firstDataType === 'bar') {
        const firstButton = document.getElementsByClassName(CLASSNAME.button).item(0)
        firstButton.click()

        const parcela = document.getElementById(ID.parcela)
        parcela.click()
    } else {
        const displayDescription = document.getElementById(ID.displayDescription)
        displayDescription.innerHTML = 'VALOR DA PARCELA: '

        const parcela = document.getElementById(ID.parcela)
        parcela.classList.add('active')
    }
}
