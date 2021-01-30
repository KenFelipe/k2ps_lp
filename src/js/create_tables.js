/* ******************* Configurar os dados das tabelas aqui ************************ */

/* Formato */
// const TABLES_DATA = { 
//     "nome_do_botao": {           *nome do botao nao pode repetir*
//         "nome_da_aba(tab)": {    *nome do aba nao pode repetir*
//             head: [ ... ],
//             body: [
//                 [ ... ],
//                 [ ... ],
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
        },
        "2 50MESES": {
            head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
            body: [
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
            ]
        },
        "250MESES": {
            head: ["BEN OBJETO", "PLANO", "CREDITO", "PARCELA"],
            body: [
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"],
                ["Cobalt LTZ 1.4 8V Flexpower 4P", "GC", "63.235,00", "942.85"]
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
    },
    "test2": {
        "tab1": {
            head: [1, 3, 4],
            body: [[11, 22, 33]]
        }
    }
}
/* ********************************************************************************* */

// import TABLES_DATA from './data.js'
initTables()

function initTables() {
    createButtons()
    createtabs()
    createTables()
}


/* ********************************************************************************* */
function createButtons() {
    const buttonsContainer = document.getElementById('select-table')

    const tableTypes = Object.keys(TABLES_DATA)
    tableTypes.forEach(tableType => {
        const button = document.createElement('button')
        button.classList.add('select-table__button')
        button.innerHTML = tableType

        buttonsContainer.appendChild(button)
    })

    // active primeiro botao
    buttonsContainer.childNodes.item(0).classList.add('active')
}

function createtabs() {
    const tabsContainer = document.getElementById('select-tab')

    const tableTypes = Object.keys(TABLES_DATA)
    tableTypes.forEach(tableType => {
        const tabSection = document.createElement('div')
        tabSection.classList.add('tab-section')

        const tableTabs = Object.keys(TABLES_DATA[tableType])
        tableTabs.forEach(tabName => {
            const tab = document.createElement('button')
            tab.classList.add('select-tab__tab')

            const span = document.createElement('span')
            span.innerHTML = tabName

            tab.appendChild(span)
            tabSection.appendChild(tab)
        })

        tabsContainer.appendChild(tabSection)
    })

    // active primeiro section
    const tabSection = tabsContainer.childNodes
    tabSection.item(0).classList.add('active')

    // active todos primeiro botao do section
    for(let i = 0; i < tabSection.length; i++) {
        tabSection.item(i).childNodes.item(0).classList.add('active')
    }

    //debug
    // console.log(tabsContainer)
    // console.log('***************************************')
}



/* ********************************************************************************* */
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

    // active primeiro section
    const tableSections = document.getElementsByClassName('table-section')
    tableSections.item(0).classList.add('active')

    // active todos primeira tabela do section
    for(let i = 0; i < tableSections.length; i++) {
        tableSections.item(i).childNodes.item(0).classList.add('active')
    }

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
