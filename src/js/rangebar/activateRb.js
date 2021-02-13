function activateRangeBar() {
    const rangeBar = document.getElementById(ID.rangeBar)
    rangeBar.dataset.selected = 'parcela'

    const displayDescription = document.getElementById(ID.displayDescription)
    displayDescription.innerHTML = 'VALOR DA PARCELA: '

    const parcela = document.getElementById(ID.parcela)
    parcela.classList.add('active')
}
