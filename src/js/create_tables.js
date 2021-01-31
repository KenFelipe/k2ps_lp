function createTables() {
    // config in "class_id_config.js"
    const tablesContainerId = CLASS_ID_CONFIG.id.tablesContainer

    const tablesSectionClass = CLASS_ID_CONFIG.class.tablesSection
    const tablesSectionTableClass = CLASS_ID_CONFIG.class.tablesSectionTable

    const tablesContainer = document.getElementById(tablesContainerId)

    // Types: imovel, automovel, ...
    const tableNames = Object.keys(TABLES_DATA)

    tableNames.forEach(tableName => {
        const tablesSection = document.createElement('div')
        tablesSection.className = tablesSectionClass

        // Tabs: ate 240mil, partir de 250mil, ...
        const tableTabNames = Object.keys(TABLES_DATA[tableName])

        tableTabNames.forEach(tableTabName => {
            const table = document.createElement('table')
            table.className = tablesSectionTableClass

            const thead = createTableHead(TABLES_DATA[tableName][tableTabName])
            const tbody = createTableBody(TABLES_DATA[tableName][tableTabName])
            
            table.appendChild(thead)
            table.appendChild(tbody)

            tablesSection.appendChild(table)
        })

        tablesContainer.appendChild(tablesSection)
    })
    // debug
    // console.log(tablesContainer)

    function createTableHead(table) {
        const thead = document.createElement('thead')
        const tr = document.createElement('tr')

        table.head.forEach(theadData => {
            const td = document.createElement('td')
            td.innerHTML = theadData

            tr.appendChild(td)
            thead.appendChild(tr)
        })

        return thead
    }

    function createTableBody(table) {
        const tbody = document.createElement('tbody')

        table.body.forEach(tbodyRow => {
            const tr = document.createElement('tr')

            tbodyRow.forEach(tbodyRowData => {
                const td = document.createElement('td')
                td.innerHTML = tbodyRowData

                tr.appendChild(td)
            })
            tbody.appendChild(tr)
        })

        return tbody
    }
}
