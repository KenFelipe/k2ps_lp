// criar abas(tabs) atraves de dados
// configurado em 'config/data.js'

function createTabs() {
    const tabClass = CLASSNAME.tab
    const tabBarClass = CLASSNAME.tabBar

    const tabBarsContainer = document.getElementById(ID.tabBarContainer)

    Object.keys(TABLES_DATA).forEach(tableName => {
        // nao tem tabs no rangeBar
        if(TABLES_DATA[tableName].type === "table") {
            const tabBar = document.createElement('div')
            tabBar.classList.add(tabBarClass)

            Object.keys(TABLES_DATA[tableName].table).forEach(tabName => {
                const tab = document.createElement('button')
                tab.classList.add(tabClass)

                const span = document.createElement('span')
                span.innerHTML = tabName

                // ***************************************************
                // PRECISA INSERIR LOGICA PARA
                // PROCESSAMENTO DE TEXT APOS DA <SPAN> 
                // (LABEL DO TAB)
                // ***************************************************

                tab.appendChild(span)
                tabBar.appendChild(tab)
            })

            tabBarsContainer.appendChild(tabBar)
        }
    })
}
