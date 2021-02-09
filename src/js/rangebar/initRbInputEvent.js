function initRangeBarInputEvent() {
    const rangeBar = document.getElementById('range-bar')

    rangeBar.addEventListener('input', updateValues)

    rangeBar.addEventListener('input', updateRangeBarFormula)

    function updateValues() {
        updateRangeBarDisplayValue()
        updateProgressBar()
    }

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
