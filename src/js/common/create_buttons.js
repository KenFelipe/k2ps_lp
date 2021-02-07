// criar botoes atraves de dados
// configurado em 'config/data.js'

function createButtons() {
    const buttonClass = CLASSNAME.button

    const tablesSelectButtonClass = CLASSNAME.tablesSelectButton
    const showBarButtonClass = CLASSNAME.showBarButton

    const buttonsContainer = document.getElementById(ID.buttonsContainer)

    Object.keys(DATA).forEach(tableName => {
        const button = document.createElement('button')

        button.classList.add(
            DATA[tableName].type === 'table' ? tablesSelectButtonClass :
            DATA[tableName].type === 'bar' ? showBarButtonClass : ''
        )

        button.classList.add(buttonClass)
        button.innerHTML = tableName

        buttonsContainer.appendChild(button)
    })
}
