const tables_container = document.getElementById('tables')
////////////////////////////////////////

const table_section = document.createElement('div')
table_section.id = 'imovel-table'

const table = document.createElement('table')

function createTableHead() {
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')

    const colsN = 2
    for(let i = 0; i < colsN; i++) {
        const td = document.createElement('td')
        td.innerHTML = `thead-${i}`

        tr.appendChild(td)
        thead.appendChild(tr)
    }
    table.appendChild(thead)
}

const func = () => false

function createTableBody() {
    const tbody = document.createElement('tbody')

    Array(10).fill(0).map((_, i) => {
        const tr = document.createElement('tr')

        const td1 = document.createElement('td')
        td1.innerHTML = 'R$55.000,00'

        const td2 = document.createElement('td')
        td2.innerHTML = 'R$349,00'

        tr.appendChild(td1)
        tr.appendChild(td2)

        tbody.appendChild(tr)
    })
    table.appendChild(tbody)
}

createTableHead()
createTableBody()

table_section.appendChild(table)
tables_container.appendChild(table_section)

////////////////////////////////////////
console.log(tables_container)
