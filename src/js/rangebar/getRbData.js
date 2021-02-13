function getRangeBarData(index) {
    const keys = Object.keys(DATA)
    const keysFiltered = keys.filter(key => DATA[key].type === CONFIG.dataTypeName.bar)

    const data = DATA[keysFiltered[index]]

    return data.bar
}

function getActiveRangeBarIndex() {
    const turnOnRbBtns = document.getElementsByClassName(CLASSNAME.turnOnRbBtn)

    for(let i = 0; i < turnOnRbBtns.length; i++) {
        if(!turnOnRbBtns.item(i).classList.contains('active')) {
            continue
        }
        return i
    }
}

function getActiveRangeBarData() {
    const activeRbIndex = getActiveRangeBarIndex()

    return getRangeBarData(activeRbIndex)
}