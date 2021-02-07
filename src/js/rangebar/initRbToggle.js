// toggle parcela - credito
function initRangeBarToggle() {
    const rangeBar = document.getElementById('range-bar')
    const description = document.getElementById('display-description')

    // parcela
    const parcela = document.getElementById('parcela')
    parcela.addEventListener('click', () => {
        if(parcela.classList.contains('active')) {
            return
        }

        rangeBar.dataset.selected = 'parcela'
        description.innerHTML = 'VALOR DA PARCELA: '

        // rangebar update function()
        const barData = getActiveBarData()
        updateRangeBar(barData)

        credito.classList.remove('active')
        parcela.classList.add('active')
    })

    // credito
    const credito = document.getElementById('credito')
    credito.addEventListener('click', () => {
        if(credito.classList.contains('active')) {
            return
        }

        rangeBar.dataset.selected = 'credito'
        description.innerHTML = 'CREDITO PRETENDIDO: ' 

        const barData = getActiveBarData()
        updateRangeBar(barData)

        parcela.classList.remove('active')
        credito.classList.add('active')
    })
}
