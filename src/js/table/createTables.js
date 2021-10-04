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

        if(!Array.isArray(table.head[0])) {
            // isNotArray
            const tr = document.createElement('tr')

            table.head.forEach((theadData, i) => {
                const td = document.createElement('td')
                td.innerHTML = theadData.replaceAll('\\', '&nbsp;')

                td.style.color = table.headTextColor && table.headTextColor[i] || 'inherit'
                td.style.backgroundColor = table.headBackground && table.headBackground[i] || 'inherit'

                tr.appendChild(td)
                thead.appendChild(tr)
            })

            return thead
        }
        else {
            // isArray
            table.head.forEach((theadrow, ir) => {
                const tr = document.createElement('tr')

                theadrow.forEach((theadrow, id) => {
                    if(table.headStructure.row && table.headStructure.row[ir][id] === 'skip') return

                    const td = document.createElement('td')
                    td.innerHTML = theadrow.replaceAll('\\', '&nbsp;')

                    if(table.headStructure.column) {
                        td.colSpan = table.headStructure.column[ir][id]
                    }
                    if(table.headStructure.row) {
                        td.rowSpan = table.headStructure.row[ir][id]
                    }

                    // td.style.color = table.headTextColor && table.headTextColor[i] || 'inherit'
                    // td.style.backgroundColor = table.headBackground && table.headBackground[i] || 'inherit'

                    tr.appendChild(td)
                })

                thead.appendChild(tr)
            })

            return thead
        }
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
