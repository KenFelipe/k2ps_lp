// criar abas(tabs) que seleciona Table 
// atraves de dados configurado em 'config/data.js'

function createTabs() {
    const tabClass = CLASSNAME.tab
    const tabbarClass = CLASSNAME.tabbar

    const tabbarCtnr = document.getElementById(ID.tabbarCtnr)

    Object.keys(DATA).forEach(dataItemkey => {
        // se dados for configurado pra table
        // logica sobre "bar" esta no "js/rangebar/"
        if(DATA[dataItemkey].type === "table") {
            const tabbar = document.createElement('div')
            tabbar.classList.add(tabbarClass)

            Object.keys(DATA[dataItemkey].table).forEach(tabName => {
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
                tabbar.appendChild(tab)
            })

            tabbarCtnr.appendChild(tabbar)
        }
    })
}
