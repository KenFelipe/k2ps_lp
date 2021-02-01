// criar botoes atraves de dados
// configurado em 'config/data.js'

function createButtons() {
    const selectTablesContainerClass = CLASSNAME_CONFIG.selectTablesContainer
    const selectTablesButtonClass = CLASSNAME_CONFIG.selectTablesButton

    const buttonsContainer = document.getElementsByClassName(selectTablesContainerClass).item(0)

    Object.keys(TABLES_DATA).forEach(tableName => {
        const button = document.createElement('button')

        button.classList.add(selectTablesButtonClass)
        button.innerHTML = tableName

        buttonsContainer.appendChild(button)
    })
}
