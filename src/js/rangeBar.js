const rangeSlider = document.getElementById('rs-range-line')
const rangeBullet = document.getElementById('rs-bullet')

rangeSlider.addEventListener('input', () => {
    rangeBullet.innerHTML = rangeSlider.value

    const bulletPosition = `${rangeSlider.value / rangeSlider.max * 578}px`
    rangeBullet.style.left = bulletPosition

    document.getElementsByClassName('progress').item(0).style.width = bulletPosition
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const range_data = {
    "automovel": {
        range: {
            min: 10,
            max: 2525250,
            step: 1,
        }
    }
}


// button when onclick run update rangeBarssss info function getting index of click or actived

const parcela = document.getElementById('parcela')

parcela.addEventListener('click', () => {
    const contain = parcela.classList.contains('active')
    // console.log(contain)
    const selectButtons = document.getElementsByClassName('tables-select__button')
    // console.log(selectButtons)
    for(let i = 0; i < selectButtons.length; i++) {
        if(!selectButtons.item(i).classList.contains('active')) {
            continue
        }
        const target = range_data[Object.keys(TABLES_DATA)[i]]
        // console.log(target)
        console.log(target.range.min)
    }
    credito.classList.remove('active')
    parcela.classList.add('active')
})

const credito = document.getElementById('credito')

credito.addEventListener('click', () => {
    parcela.classList.remove('active')
    credito.classList.add('active')
})

const rangeBar = document.getElementById('range-bar')
console.log(rangeBar)
rangeBar.value = rangeBar.min
rangeBar.min = 1000
rangeBar.max = 1250

const display = document.getElementById('display-value')
display.value = rangeBar.value

rangeBar.addEventListener('input', () => {
    const progress = (rangeBar.value - rangeBar.min) / (rangeBar.max - rangeBar.min) * (rangeBar.offsetWidth - 40) + 20
    const width = `${progress}px`
    // console.log(progress, rangeBar.offsetWidth, rangeBar.value)
    document.getElementById('range-bar-progress').style.width = width

    // to display
    const display = document.getElementById('display-value')
    // console.log(typeof rangeBar.value)
    const transed = rangeBar.value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    console.log(transed)
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