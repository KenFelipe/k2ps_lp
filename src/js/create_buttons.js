// criar botoes atraves de dados
// configurado em 'config/data.js'

function createButtons() {
    const buttonClass = CLASSNAME.button

    const selectTablesButtonClass = CLASSNAME.tablesSelectButton
    const showBarButtonClass = CLASSNAME.showBarButton

    const buttonsContainer = document.getElementById(ID.buttonsContainer)

    Object.keys(TABLES_DATA).forEach(tableName => {
        const button = document.createElement('button')

        button.classList.add(
            TABLES_DATA[tableName].type === 'table' ? selectTablesButtonClass :
            TABLES_DATA[tableName].type === 'bar' ? showBarButtonClass : ''
        )

        button.classList.add(buttonClass)
        button.innerHTML = tableName

        buttonsContainer.appendChild(button)
    })
}
