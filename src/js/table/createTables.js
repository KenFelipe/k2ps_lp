// CLASSNAME and ID config in "config/idClassName.js" //

function createTables() {
    const tableCls = CLASSNAME.table
    const tableSecCls = CLASSNAME.tableSec

    const tableCtnr = document.getElementById(ID.tableCtnr)

    DATA.forEach(data => {
        // type: "table" or "rangeBar"
        // logica sobre "bar" esta no "js/rangebar/"
        if(data.dataType !== CONFIG.dataTypeName.table) {
            return
        }

        const tableSec = document.createElement('div')
        tableSec.className = tableSecCls

        data.tableDataList.forEach(tableData => {
            const table = document.createElement('table')
            table.className = tableCls

            const thead = createTableHead(tableData.tableData)
            const tbody = createTableBody(tableData.tableData)
            
            table.appendChild(thead)
            table.appendChild(tbody)

            tableSec.appendChild(table)
        })

        tableCtnr.appendChild(tableSec)
    })

    //
    function createTableHead(table) {
        const thead = document.createElement('thead')
        const tr = document.createElement('tr')

        table.head.forEach(theadData => {
            const td = document.createElement('td')
            td.innerHTML = theadData.replaceAll('\\', '&nbsp;')
            // td.innerHTML = theadData.replaceAll(' ', '&nbsp;')

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
