// toggle parcela - credito
function initRangeBarToggle() {
    const rangeBar = document.getElementById('range-bar')
    const description = document.getElementById('display-description')

    const parcela = document.getElementById('parcela')
    const credito = document.getElementById('credito')

    // parcela
    parcela.addEventListener('click', () => {
        if(parcela.classList.contains('active')) {
            return
        }

        rangeBar.dataset.selected = 'parcela'
        description.innerHTML = 'VALOR DA PARCELA: '

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
        description.innerHTML = 'CREDITO PRETENDIDO: ' 

        parcela.classList.remove('active')
        credito.classList.add('active')

        updateRangeBar()
    })
}
