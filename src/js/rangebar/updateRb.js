// raise on: 
// rbButton-onclick, parcela/credito-toggle-onclick
function updateRangeBar() {
    const rangeBar = document.getElementById(ID.rangeBar)
    const selected = rangeBar.dataset.selected

    const activeRangeBarData = getActiveRangeBarData()

    rangeBar.min = activeRangeBarData[selected].min
    rangeBar.max = activeRangeBarData[selected].max
    rangeBar.step = activeRangeBarData[selected].step

    // iniciar com valor minimo
    rangeBar.value = activeRangeBarData[selected].min

    //
    const rangeLimitDisplayMin = document.getElementById(ID.displayRangeMin)
    rangeLimitDisplayMin.innerHTML = 'R$' + toBRL(rangeBar.min, false)

    const rangeLimitDisplayMax = document.getElementById(ID.displayRangeMax)
    rangeLimitDisplayMax.innerHTML = 'R$' + toBRL(rangeBar.max, false)

    // reset progressBar
    const progressBar = document.getElementById(ID.rbProgressBar)
    progressBar.style.width = 0

    // update formula
    updateRangeBarFormula()

    // calc formula and update display value
    updateRangeBarDisplayValue()
}
