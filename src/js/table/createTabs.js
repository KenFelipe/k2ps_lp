// criar abas(tabs) que seleciona table 
// atraves de dados configurado em 'config/data.js'

function createTabs() {
    const tabClass = CLASSNAME.tab
    const tabbarClass = CLASSNAME.tabbar

    const tabbarCtnr = document.getElementById(ID.tabbarCtnr)

    DATA.forEach(data => {
        if(data.dataType !== CONFIG.dataTypeName.table) {
            return
        }

        const tabbar = document.createElement('div')
        tabbar.classList.add(tabbarClass)

        data.tableDataList.forEach(tableData => {
            const tab = document.createElement('button')
            tab.classList.add(tabClass)

            const span = document.createElement('span')
            span.innerHTML = tableData.tabName.replace('\\', '<br/>')

            tab.appendChild(span)
            tabbar.appendChild(tab)
        })

        tabbarCtnr.appendChild(tabbar)
    })
}
