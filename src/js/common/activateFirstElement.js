function activateFirstElement() {
    const firstDataType = DATA[0].dataType

    const firstButton = document.getElementsByClassName(CLASSNAME.button).item(0)
    firstButton.click()

    // if(firstDataType === CONFIG.dataTypeName.table) {
    // }

    if(firstDataType === CONFIG.dataTypeName.bar) {
        const parcela = document.getElementById(ID.parcela)
        parcela.click()
    }
}