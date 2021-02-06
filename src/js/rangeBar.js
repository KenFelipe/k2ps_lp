// button when onclick run update rangeBarssss info function getting index of click or actived
function updateRangeBar(data) {
    const rangeBar = document.getElementById('range-bar')

    const selected = rangeBar.dataset.selected
    rangeBar.min = data[selected].min
    rangeBar.max = data[selected].max
    rangeBar.step = data[selected].step

    rangeBar.value = data[selected].min

    data[selected].formulas.forEach(formula => {
        // console.log(formula, rangeBar.value)
        if(rangeBar.value >= formula.min && rangeBar.value <= formula.max) {
            rangeBar.dataset.formula = formula.formula
        }
    })
    // rangeBar.dataset.formula = data[selected].formula

    const display = document.getElementById('display-value')
    const formula = rangeBar.dataset.formula.replaceAll('x', rangeBar.value)
    // console.log(formula)
    // const result = `${eval(formula)}`
    const result = `${Math.round(eval(formula)*100)/100}`
    const transed = result.replace(/(\.)/g, ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    display.value = transed
    // display.value = rangeBar.value

    const rangeLimitDisplayMin = document.getElementById('range-min')
    rangeLimitDisplayMin.innerHTML = `R$${rangeBar.min.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`

    const rangeLimitDisplayMax = document.getElementById('range-max')
    rangeLimitDisplayMax.innerHTML = `R$${rangeBar.max.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`

    const progressBar = document.getElementById('range-bar-progress')
    progressBar.style.width = 0
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


function initRangeBarToggle() {
    // parcela
    const parcela = document.getElementById('parcela')
    parcela.addEventListener('click', () => {
        if(parcela.classList.contains('active')) {
            return
        }

        const rangeBar = document.getElementById('range-bar')
        rangeBar.dataset.selected = 'parcela'

        // rangebar update function()
        const activeIndex = getActiveIndex()
        const barData = TABLES_DATA[Object.keys(TABLES_DATA)[activeIndex]].bar

        updateRangeBar(barData)

        credito.classList.remove('active')
        parcela.classList.add('active')
    })

    // credito
    const credito = document.getElementById('credito')
    credito.addEventListener('click', () => {
        if(credito.classList.contains('active')) {
            return
        }

        const rangeBar = document.getElementById('range-bar')
        rangeBar.dataset.selected = 'credito'

        const activeIndex = getActiveIndex()
        const barData = TABLES_DATA[Object.keys(TABLES_DATA)[activeIndex]].bar

        updateRangeBar(barData)

        parcela.classList.remove('active')
        credito.classList.add('active')
    })
}

initRangeBarToggle()


////////////////////////////////////////////////


const rangeBar = document.getElementById('range-bar')

rangeBar.addEventListener('input', () => {
    const progress = (rangeBar.value - rangeBar.min) / (rangeBar.max - rangeBar.min) * (rangeBar.offsetWidth - 40) + 20
    const width = `${progress}px`
    // console.log(progress, rangeBar.offsetWidth, rangeBar.value)

    document.getElementById('range-bar-progress').style.width = width

    const activeIndex = getActiveIndex()
    const barData = TABLES_DATA[Object.keys(TABLES_DATA)[activeIndex]].bar
    barData[rangeBar.dataset.selected].formulas.forEach(formula => {
        // console.log(formula, rangeBar.value)
        if(rangeBar.value >= formula.min && rangeBar.value <= formula.max) {
            rangeBar.dataset.formula = formula.formula
        }
    })
    const formula = rangeBar.dataset.formula.replaceAll('x', rangeBar.value)
    // console.log(formula)
    const result = `${Math.round(eval(formula)*100)/100}`
    // local money expression
    // const transed = rangeBar.value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    const transed = result.replace(/(\.)/g, ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    // const transed = result.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')

    // to display
    const display = document.getElementById('display-value')
    display.value = transed
})


// Kansei go ni Yaru
// function test() {
//     let number = '1234567d'
//     const lastI = number.length - 1
//     console.log(lastI, number[lastI])

//     if(!number[lastI].match(/\d/)) {
//         // console.log('not number')
//         number = number.slice(0, lastI)
//         console.log(number)
//     }

//     const input = document.querySelector('[type=number]')
//     input.addEventListener('focus', () => {
//         console.log('focus')
//     })
//     input.addEventListener('click', () => {
//         console.log('click')
//     })
//     input.addEventListener('keyup', () => {
//         console.log('keyup')
//     })
//     // input.addEventListener('input', () => {
//     //     input.value = 123
//     //     console.log(input)
//     // })
//     console.log(input)
// }
// test()
