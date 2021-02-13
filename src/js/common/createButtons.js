// criar botoes atraves de dados
// configurado em 'config/data.js'

function createButtons() {
    const buttonCls = CLASSNAME.button

    // btns to show table
    const tableSelBtnCls = CLASSNAME.tableSelBtn
    // btns to show rangebar
    const turnOnRbBtnCls = CLASSNAME.turnOnRbBtn

    const buttonCtnr = document.getElementById(ID.buttonCtnr)

    Object.keys(DATA).forEach(dataItemKey => {
        const button = document.createElement('button')
        button.innerHTML = dataItemKey

        button.classList.add(buttonCls)
        button.classList.add(
            DATA[dataItemKey].type === CONFIG.dataTypeName.table ? tableSelBtnCls :
            DATA[dataItemKey].type === CONFIG.dataTypeName.bar ? turnOnRbBtnCls : ''
        )

        buttonCtnr.appendChild(button)
    })
}
