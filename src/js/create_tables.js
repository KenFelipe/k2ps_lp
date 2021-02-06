// CLASSNAME and ID config in "classname.js" //
// DATA in "config/data.js"

function createTables() {
    const tableClass = CLASSNAME.table
    const tablesSectionClass = CLASSNAME.tablesSection

    const tablesContainer = document.getElementById(ID.tablesContainer)

    // tableNames: imovel, automovel, ...
    const tableNames = Object.keys(TABLES_DATA)

    tableNames.forEach(tableName => {
        // type: "table" or "bar"
        // logica sobre "bar" esta no "rangeBar/....js"
        if(TABLES_DATA[tableName].type === "table") {
            const tablesSection = document.createElement('div')
            tablesSection.className = tablesSectionClass

            const tablesData = TABLES_DATA[tableName].table

            // tableTabNames: ate 240mil, a partir de 250mil, ...
            const tableTabNames = Object.keys(tablesData)

            tableTabNames.forEach(tableTabName => {
                const table = document.createElement('table')
                table.className = tableClass

                const thead = createTableHead(tablesData[tableTabName])
                const tbody = createTableBody(tablesData[tableTabName])
                
                table.appendChild(thead)
                table.appendChild(tbody)

                tablesSection.appendChild(table)
            })

            tablesContainer.appendChild(tablesSection)
        }
    })


    //
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

    //
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
