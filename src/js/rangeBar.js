const rangeSlider = document.getElementById('rs-range-line')
const rangeBullet = document.getElementById('rs-bullet')

rangeSlider.addEventListener('input', () => {
    rangeBullet.innerHTML = rangeSlider.value

    const bulletPosition = `${rangeSlider.value / rangeSlider.max * 578}px`
    rangeBullet.style.left = bulletPosition

    document.getElementsByClassName('progress').item(0).style.width = bulletPosition
})