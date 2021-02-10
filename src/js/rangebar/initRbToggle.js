// toggle parcela - credito
function initRangeBarToggle() {
    const rangeBar = document.getElementById(ID.rangeBar)
    const displayDescription = document.getElementById(ID.displayDescription)

    const parcela = document.getElementById(ID.parcela)
    const credito = document.getElementById(ID.credito)

    // parcela
    parcela.addEventListener('click', () => {
        if(parcela.classList.contains('active')) {
            return
        }

        rangeBar.dataset.selected = 'parcela'
        displayDescription.innerHTML = 'VALOR DA PARCELA: '

        credito.classList.remove('active')
        parcela.classList.add('active')

        updateRangeBar()
    })

    // credito
    credito.addEventListener('click', () => {
        if(credito.classList.contains('active')) {
            return
        }

        rangeBar.dataset.selected = 'credito'
        displayDescription.innerHTML = 'CREDITO PRETENDIDO: ' 

        parcela.classList.remove('active')
        credito.classList.add('active')

        updateRangeBar()
    })
}
