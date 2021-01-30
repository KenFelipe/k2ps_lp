function createTables() {
    const tablesContainer = document.getElementById('tables')

    // Types: imovel, automovel, ...
    const tableTypes = Object.keys(TABLES_DATA)

    tableTypes.forEach((tableType, tableTypeIdx) => {
        const tableTypeSection = document.createElement('div')
        tableTypeSection.className = 'table-section'

        // Tabs: ate 240mil, partir de 250mil, ...
        const tableTabs = Object.keys(TABLES_DATA[tableType])

        tableTabs.forEach((tableTab, tableTabIdx) => {
            const table = document.createElement('table')
            table.className = 'table-tab'

            const thead = createTableHead(TABLES_DATA[tableType][tableTab])
            const tbody = createTableBody(TABLES_DATA[tableType][tableTab])
            
            table.appendChild(thead)
            table.appendChild(tbody)
            tableTypeSection.appendChild(table)
        })

        tablesContainer.appendChild(tableTypeSection)
    })
    // debug
    // console.log(tablesContainer)

    function createTableHead(table) {
        const thead = document.createElement('thead')
        const tr = document.createElement('tr')

        table.head.forEach(theadTd => {
            const td = document.createElement('td')
            td.innerHTML = theadTd

            tr.appendChild(td)
            thead.appendChild(tr)
        })

        return thead
    }

    function createTableBody(table) {
        const tbody = document.createElement('tbody')

        table.body.forEach(tbodyRow => {
            const tr = document.createElement('tr')

            tbodyRow.forEach(tbodyRowTd => {
                const td = document.createElement('td')
                td.innerHTML = tbodyRowTd

                tr.appendChild(td)
            })
            tbody.appendChild(tr)
        })

        return tbody
    }
}
