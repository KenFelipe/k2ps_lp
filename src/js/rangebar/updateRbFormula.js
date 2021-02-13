function updateRangeBarFormula() {
    const rangeBar = document.getElementById(ID.rangeBar)
    const selected = rangeBar.dataset.selected

    const activeRangeBarData = getActiveRangeBarData()

    const formulas = activeRangeBarData[selected].formulas

    formulas.forEach(formula => {
        if(rangeBar.value < formula.min || rangeBar.value > formula.max) {
            return
        }
        if(rangeBar.dataset.formula === formula.formula) {
            return
        }
        rangeBar.dataset.formula = formula.formula
    })
}
