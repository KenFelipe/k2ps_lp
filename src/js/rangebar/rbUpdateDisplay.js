// calc and update display
function updateRangeBarDisplay(formula, x) {
    const display = document.getElementById('display-value')
    const transed = x.replace(/(\.)/g, ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    display.value = transed

    // replace x para valor do rb
    const formulaReplaced = formula.replaceAll('x', x)

    // executar a formula com "eval" ou Constructor "Function"
    const result = `${Math.round(eval(formulaReplaced) * 100) / 100}`

    // local money expression
    const resultTransed = result.replace(/(\.)/g, ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')

    // to display
    const displayResult = document.getElementById('display-result')
    displayResult.innerHTML = resultTransed
}
