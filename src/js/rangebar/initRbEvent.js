function initRangeBarEvent() {
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
