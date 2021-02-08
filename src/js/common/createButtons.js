// criar botoes atraves de dados
// configurado em 'config/data.js'

function createButtons() {
    const buttonClass = CLASSNAME.button

    const tablesSelectButtonClass = CLASSNAME.tablesSelectButton
    const showRbButtonClass = CLASSNAME.showRbButton

    const buttonsContainer = document.getElementById(ID.buttonsContainer)

    Object.keys(DATA).forEach(tableName => {
        const button = document.createElement('button')

        button.classList.add(buttonClass)

        button.classList.add(
            DATA[tableName].type === 'table' ? tablesSelectButtonClass :
            DATA[tableName].type === 'bar' ? showRbButtonClass : ''
        )

        button.innerHTML = tableName

        buttonsContainer.appendChild(button)
    })
}
