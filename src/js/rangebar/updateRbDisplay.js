// to R$ notation
function toBRL(value, leaveDp = true) {
    // ex: 3.145678 => 3.14, 3.00123 => 3, 3 => 3
    const dpRounded = (Math.round(value * 100) / 100).toString()

    // ex: 1.26 => 1,26, 1 => 1,00
    const dpChanged = dpRounded.indexOf('.') === -1 && leaveDp
        ? (dpRounded + '.00').replaceAll(/(\.)/g, ',') : dpRounded.replaceAll(/(\.)/g, ',')

    // ex: 1000 => 1.000 
    const BRLNotation = dpChanged.replaceAll(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')

    return BRLNotation
}

// calc formula replacing x
function calcRbFormula(formula, x) {
    const formulaReplaced = formula.replaceAll('x', x)
    const result = eval(formulaReplaced)

    return result
}

// update display
function updateRangeBarDisplay(formula, x) {
    const displayValue = document.getElementById('display-value')
    displayValue.value = toBRL(x, false)

    const result = calcRbFormula(formula, x)

    const displayResult = document.getElementById('display-result')
    displayResult.innerHTML = toBRL(result)
}