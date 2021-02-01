// criar abas(tabs) atraves de dados
// configurado em 'config/data.js'

function createTabs() {
    const tabBarsContainerClass = CLASSNAME_CONFIG.tabBarsContainer

    const tabBarClass = CLASSNAME_CONFIG.tabBar
    const tabClass = CLASSNAME_CONFIG.tab

    const tabBarsContainer = document.getElementsByClassName(tabBarsContainerClass).item(0)

    Object.keys(TABLES_DATA).forEach(tableName => {
        const tabBar = document.createElement('div')
        tabBar.classList.add(tabBarClass)

        Object.keys(TABLES_DATA[tableName]).forEach(tabName => {
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
    })
}
