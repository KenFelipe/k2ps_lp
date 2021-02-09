function getRangeBarData(index) {
    const keys = Object.keys(DATA)
    const keysFiltered = keys.filter(key => DATA[key].type === 'bar')

    const data = DATA[keysFiltered[index]]

    return data.bar
}

function getActiveRangeBarIndex() {
    const showRbButtons = document.getElementsByClassName(CLASSNAME.showRbButton)

    for(let i = 0; i < showRbButtons.length; i++) {
        if(!showRbButtons.item(i).classList.contains('active')) {
            continue
        }
        return i
    }
}

//
function updateRangeBarFormula() {
    const rangeBar = document.getElementById('range-bar')
    const selected = rangeBar.dataset.selected

    const activeRangeBarIndex = getActiveRangeBarIndex()
    const activeRangeBarData = getRangeBarData(activeRangeBarIndex)

    const formulasData = activeRangeBarData[selected].formulas

    formulasData.forEach(formula => {
        if(rangeBar.value < formula.min || rangeBar.value > formula.max) {
            return
        }
        if(rangeBar.dataset.formula === formula.formula) {
            return
        }
        rangeBar.dataset.formula = formula.formula
    })
}

// fire on: 
// rbButton-onclick, parcela/credito-toggle-onclick
function updateRangeBar() {
    const rangeBar = document.getElementById('range-bar')
    const selected = rangeBar.dataset.selected

    const activeRangeBarIndex = getActiveRangeBarIndex()
    const activeRangeBarData = getRangeBarData(activeRangeBarIndex)

    rangeBar.min = activeRangeBarData[selected].min
    rangeBar.max = activeRangeBarData[selected].max
    rangeBar.step = activeRangeBarData[selected].step

    // iniciar com valor minimo
    rangeBar.value = activeRangeBarData[selected].min

    //
    const rangeLimitDisplayMin = document.getElementById('range-min')
    rangeLimitDisplayMin.innerHTML = 'R$' + toBRL(rangeBar.min, false)

    const rangeLimitDisplayMax = document.getElementById('range-max')
    rangeLimitDisplayMax.innerHTML = 'R$' + toBRL(rangeBar.max, false)

    // reset progressBar
    const progressBar = document.getElementById('range-bar-progress')
    progressBar.style.width = 0

    // update formula
    updateRangeBarFormula()

    // calc formula and update display value
    updateRangeBarDisplayValue()
}
