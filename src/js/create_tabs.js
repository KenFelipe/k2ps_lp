// criar abas(tabs) atraves de dados
// configurado em 'config/data.js'

function createTabs() {
    const tabsContainer = document.getElementById('select-tab')

    Object.keys(TABLES_DATA).forEach(tableName => {
        const tabSection = document.createElement('div')
        tabSection.classList.add('tab-section')

        Object.keys(TABLES_DATA[tableName]).forEach(tabName => {
            const tab = document.createElement('button')
            tab.classList.add('select-tab__tab')

            const span = document.createElement('span')
            span.innerHTML = tabName

            tab.appendChild(span)
            tabSection.appendChild(tab)
        })

        tabsContainer.appendChild(tabSection)
    })

    //debug
    // console.log(tabsContainer)
    // console.log('***************************************')
}
