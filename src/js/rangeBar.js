const rangeSlider = document.getElementById('rs-range-line')
const rangeBullet = document.getElementById('rs-bullet')

rangeSlider.addEventListener('input', () => {
    rangeBullet.innerHTML = rangeSlider.value

    const bulletPosition = `${rangeSlider.value / rangeSlider.max * 578}px`
    rangeBullet.style.left = bulletPosition

    document.getElementsByClassName('progress').item(0).style.width = bulletPosition
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const parcela = document.getElementById('parcela')

parcela.addEventListener('click', () => {
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

rangeBar.addEventListener('input', () => {
    // const width = '20px'
    const progress = (rangeBar.value - rangeBar.min) / (rangeBar.max - rangeBar.min) * (rangeBar.offsetWidth - 40) + 20
    console.log(progress, rangeBar.offsetWidth)
    // const width = '80%'
    const width = `${progress}px`
    document.getElementById('range-bar-progress').style.width = width
})