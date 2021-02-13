// CLASSNAME and ID config in "config/idClassName.js" //
// DATA in "config/data.js"

function createTables() {
    const tableCls = CLASSNAME.table
    const tableSecCls = CLASSNAME.tableSec

    const tableCtnr = document.getElementById(ID.tableCtnr)

    // itemKeys: imovel, automovel, ...
    const dataItemKeys = Object.keys(DATA)

    dataItemKeys.forEach(dataItemKey => {
        // type: "table" or "bar"
        // logica sobre "bar" esta no "js/rangebar/"
        if(DATA[dataItemKey].type === CONFIG.dataTypeName.table) {
            const tableSec = document.createElement('div')
            tableSec.className = tableSecCls

            const tableData = DATA[dataItemKey].table

            // tableTabNames: "ate 240mil", a "partir de 250mil", ...
            const tabNames = Object.keys(tableData)

            tabNames.forEach(tabName => {
                const table = document.createElement('table')
                table.className = tableCls

                const thead = createTableHead(tableData[tabName])
                const tbody = createTableBody(tableData[tabName])
                
                table.appendChild(thead)
                table.appendChild(tbody)

                tableSec.appendChild(table)
            })

            tableCtnr.appendChild(tableSec)
        }
    })


    //
    function createTableHead(table) {
        const thead = document.createElement('thead')
        const tr = document.createElement('tr')

        table.head.forEach(theadData => {
            const td = document.createElement('td')
            td.innerHTML = theadData.replaceAll(' ', '&nbsp;')

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
                td.innerHTML = tbodyRowData.replaceAll(' ', '&nbsp;')

                tr.appendChild(td)
            })
            tbody.appendChild(tr)
        })

        return tbody
    }
}
