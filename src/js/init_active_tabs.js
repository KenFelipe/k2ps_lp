// seta as funcoes "onclick" nos tabs
// pra atribuir class ".active"
// pra mostrar tabela respectivo dinamicamente

function initActiveTabs() {
    const tabClass = CLASSNAME_CONFIG.tab
    const tabs = document.getElementsByClassName(tabClass)

    const tabBarClass = CLASSNAME_CONFIG.tabBar
    const tabBars = document.getElementsByClassName(tabBarClass)

    const tableClass = CLASSNAME_CONFIG.table
    const tables = document.getElementsByClassName(tableClass)

    // ***************************
    // n de tab = n de table
    // ***************************
    // aplicar funcao "onclick" em cada tab
    // que atribui class ".active" no tab clicado e no table respectivo
    // (que corresponde mesmo index).
    // remove ".active" apenas do tab e table que 
    // pertence mesmo tabBar do tab q foi clicado.
    // (nao remove ".active" de outro tabBar, e de outro table)
    for(let tabBarIndex = 0, tabIndexCount = 0; tabBarIndex < tabBars.length; tabBarIndex++) {
        // tabBarChilds: n de tab de um tabBar
        // serve pra limitar remocao do ".active" de outro grupo tabBar e table
        const tabBarChilds = tabBars.item(tabBarIndex).childElementCount

        for(let tabIndex = tabIndexCount; tabIndex < tabIndexCount + tabBarChilds; tabIndex++) {
            // targetStartIndex: primeiro index do
            // grupo tabBar pra remover ".active"
            const targetStartIndex = tabIndexCount

            tabs.item(tabIndex).addEventListener('click', () => {
                // nao remove ".active" de outro grupo tabBar e table
                for(let targetIndex = targetStartIndex; targetIndex < targetStartIndex + tabBarChilds; targetIndex++) {
                    // nao remove classe do proprio tab clicado
                    // e do table do mesmo index
                    if(targetIndex === tabIndex) {
                        continue
                    }
                    tabs.item(targetIndex).classList.remove('active')
                    tables.item(targetIndex).classList.remove('active')
                }

                tabs.item(tabIndex).classList.add('active')
                tables.item(tabIndex).classList.add('active')
            })
        }

        tabIndexCount += tabBarChilds
    }
}
