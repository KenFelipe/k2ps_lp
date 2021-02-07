function getActiveBarData() {
    const activeIndex = getActiveIndex()
    const keys = Object.keys(TABLES_DATA)
    const data = TABLES_DATA[keys[activeIndex]]

    return data.bar
}

function getActiveIndex() {
    // const showBarButtons = document.getElementsByClassName(CLASSNAME.showBarButton)
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
        if(!(rangeBar.value >= formula.min) || !(rangeBar.value <= formula.max)) {
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

    // update formula
    updateRangeBarFormula(data[selected].formulas)

    const rangeLimitDisplayMin = document.getElementById('range-min')
    rangeLimitDisplayMin.innerHTML = `R$${rangeBar.min.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`

    const rangeLimitDisplayMax = document.getElementById('range-max')
    rangeLimitDisplayMax.innerHTML = `R$${rangeBar.max.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`

    const progressBar = document.getElementById('range-bar-progress')
    progressBar.style.width = 0

    updateRangeBarDisplay(rangeBar.dataset.formula, rangeBar.value)
}

