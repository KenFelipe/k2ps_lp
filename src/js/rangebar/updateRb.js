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

function getActiveBarData() {
    const activeIndex = getActiveIndex()
    const keys = Object.keys(DATA)
    const data = DATA[keys[activeIndex]]

    return data.bar
}

function getActiveIndex() {
    // const showRbButtons = document.getElementsByClassName(CLASSNAME.showRbButton)
    const buttons = document.getElementsByClassName(CLASSNAME.button)
    for(let i = 0; i < buttons.length; i++) {
        if(!buttons.item(i).classList.contains('active')) {
            continue
        }
        return i
    }
}

function updateRangeBarFormula(formulasData) {
    const rangeBar = document.getElementById('range-bar')

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


function updateRangeBar(data) {
    const rangeBar = document.getElementById('range-bar')

    const selected = rangeBar.dataset.selected
    rangeBar.min = data[selected].min
    rangeBar.max = data[selected].max
    rangeBar.step = data[selected].step

    // iniciar com valor minimo
    rangeBar.value = data[selected].min

    //
    const rangeLimitDisplayMin = document.getElementById('range-min')
    rangeLimitDisplayMin.innerHTML = 'R$' + toBRL(rangeBar.min, false)

    const rangeLimitDisplayMax = document.getElementById('range-max')
    rangeLimitDisplayMax.innerHTML = 'R$' + toBRL(rangeBar.max, false)

    //
    const progressBar = document.getElementById('range-bar-progress')
    progressBar.style.width = 0

    // update formula
    updateRangeBarFormula(data[selected].formulas)

    updateRangeBarDisplay(rangeBar.dataset.formula, rangeBar.value)
}

