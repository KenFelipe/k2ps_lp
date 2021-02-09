function initRangeBarInputEvent() {
    const rangeBar = document.getElementById('range-bar')

    // console.log('debug')
    rangeBar.addEventListener('input', updateProgressBar)

    rangeBar.addEventListener('input', () => {
        // update formula
        const barData = getRangeBarData(getActiveRangeBarIndex())
        const selected = rangeBar.dataset.selected

        updateRangeBarFormula(barData[selected].formulas)

        // update display
        updateRangeBarDisplay(rangeBar.dataset.formula, rangeBar.value)
    })

    function updateProgressBar() {
        const rbThumbSize = 30
        const rbRange = rangeBar.max - rangeBar.min
        const rbVisibleWidth = rangeBar.offsetWidth - (rbThumbSize / 2) * 2

        const rbProgressValue = rangeBar.value - rangeBar.min
        const rbProgressPercentage = rbProgressValue / rbRange

        const progressWidth = `${rbProgressPercentage * rbVisibleWidth + (rbThumbSize / 2)}px`

        const progressBar = document.getElementById('range-bar-progress')
        progressBar.style.width = progressWidth
    }
}
