// criar botoes atraves de dados
// configurado em 'config/data.js'

function createButtons() {
    const buttonsContainer = document.getElementById('select-table')

    Object.keys(TABLES_DATA).forEach(tableName => {
        const button = document.createElement('button')

        button.classList.add('select-table__button')
        button.innerHTML = tableName

        buttonsContainer.appendChild(button)
    })
}
