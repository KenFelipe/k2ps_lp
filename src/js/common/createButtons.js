// criar botoes atraves de dados
// configurado em 'config/data.js'

function createButtons() {
    const buttonCls = CLASSNAME.button

    // btns to show table
    const tableSelBtnCls = CLASSNAME.tableSelBtn
    // btns to show rangebar
    const turnOnRbBtnCls = CLASSNAME.turnOnRbBtn

    const buttonCtnr = document.getElementById(ID.buttonCtnr)

    DATA.forEach(data => {
        const button = document.createElement('button')
        button.innerHTML = data.sectionName.replace('\\', '<br/>')

        button.classList.add(buttonCls)
        button.classList.add(
            data.dataType === CONFIG.dataTypeName.table ? tableSelBtnCls :
            data.dataType === CONFIG.dataTypeName.bar ? turnOnRbBtnCls : 'error'
        )

        buttonCtnr.appendChild(button)
    })
}
