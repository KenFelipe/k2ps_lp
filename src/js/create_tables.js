function createTables() {
    // config in "class_id_config.js"
    const tablesContainerClass = CLASSNAME_CONFIG.tablesContainer
    const tablesContainer = document.getElementById(tablesContainerClass)

    const tablesSectionClass = CLASSNAME_CONFIG.tablesSection
    const tableClass = CLASSNAME_CONFIG.table

    // tableNames: imovel, automovel, ...
    const tableNames = Object.keys(TABLES_DATA)

    tableNames.forEach(tableName => {
        const tablesSection = document.createElement('div')
        tablesSection.className = tablesSectionClass

        // tableTabNames: ate 240mil, a partir de 250mil, ...
        const tableTabsNames = Object.keys(TABLES_DATA[tableName])

        tableTabsNames.forEach(tableTabName => {
            const table = document.createElement('table')
            table.className = tableClass

            const thead = createTableHead(TABLES_DATA[tableName][tableTabName])
            const tbody = createTableBody(TABLES_DATA[tableName][tableTabName])
            
            table.appendChild(thead)
            table.appendChild(tbody)

            tablesSection.appendChild(table)
        })

        tablesContainer.appendChild(tablesSection)
    })

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
