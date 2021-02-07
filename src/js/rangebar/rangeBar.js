// toggle parcela - credito
function initRangeBarToggle() {
    const rangeBar = document.getElementById('range-bar')

    // parcela
    const parcela = document.getElementById('parcela')
    parcela.addEventListener('click', () => {
        if(parcela.classList.contains('active')) {
            return
        }

        rangeBar.dataset.selected = 'parcela'

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

        const barData = getActiveBarData()
        updateRangeBar(barData)

        parcela.classList.remove('active')
        credito.classList.add('active')
    })
}

initRangeBarToggle()



//////////////////////////////////////////////////////////////////////////////////////////////
function initRangeBar() {
    const rangeBar = document.getElementById('range-bar')

    rangeBar.addEventListener('input', () => {
        // update ProgressBar
        const rbThumbSize = 30
        const rbRange = rangeBar.max - rangeBar.min
        const rbVisibleWidth = rangeBar.offsetWidth - (rbThumbSize / 2) * 2

        const rbProgressValue = rangeBar.value - rangeBar.min
        const rbProgressPercentage = rbProgressValue / rbRange

        const progressWidth = `${rbProgressPercentage * rbVisibleWidth + (rbThumbSize / 2)}px`
        document.getElementById('range-bar-progress').style.width = progressWidth

        // update formula
        const barData = getActiveBarData()
        const selected = rangeBar.dataset.selected
        updateRangeBarFormula(barData[selected].formulas, rangeBar.value)

        // update display
        updateRangeBarDisplay(rangeBar.dataset.formula, rangeBar.value)
    })
}
initRangeBar()



//////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////
// after finished
// function test() {
//     let number = '1234567d'
//     const lastI = number.length - 1
//     console.log(lastI, number[lastI])

//     if(!number[lastI].match(/\d/)) {
//         // console.log('not number')
//         number = number.slice(0, lastI)
//         console.log(number)
//     }

//     const input = document.querySelector('[type=number]')
//     input.addEventListener('focus', () => {
//         console.log('focus')
//     })
//     input.addEventListener('click', () => {
//         console.log('click')
//     })
//     input.addEventListener('keyup', () => {
//         console.log('keyup')
//     })
//     // input.addEventListener('input', () => {
//     //     input.value = 123
//     //     console.log(input)
//     // })
//     console.log(input)
// }
// test()
