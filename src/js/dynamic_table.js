/*****  Configura os dados de tabelas aqui *****/

/* Formato */
// const TABLES_DATA = {
//     "nome_do_botao": {
//         "nome_da_aba": {
//             head: [ ... ],
//             body: [
//                 [ ... ],
//             ]
//         },
//     }, ...
// }

const TABLES_DATA = { 
    "automovel": {
        "FLEX 50MESES": {
            head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
            body: [
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
            ]
        }
    },
    "imovel": {
        "Ate 240mil": {
            head: ["thead", "thead"],
            body: [ 
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
            ],
        },
        "Ate 580mil": {
            head: ["500mil", "thead"],
            body: [
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
            ],
        },
        "Ate 100mil": {
            head: ["1000mil", "thead"],
            body: [
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
                ["R$55.000,00", "R$349.00"],
            ]
        },
    },
    "test": {
        "tab1": {
            head: [1, 3, 4],
            body: [[11, 22, 33]]
        }
    }

    // "automovel": { "Ate 240mil": { head: ["thead", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ], }, "Ate 580mil": { head: ["500mil", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ], }, "Ate 100mil": { head: ["thead", "thead"], body: [ ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ["R$55.000,00", "R$349.00"], ] } },

    // automovel: { 
    //     auto: "100$" 
    // }
}


initTables()

/**********************************************************************/
function initTables() {
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

    console.log(tablesContainer)

    // function createTableHead(table) {
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
