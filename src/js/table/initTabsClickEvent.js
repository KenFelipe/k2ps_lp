// aplicar funcao "onclick" nos tabs
// pra mostrar tabela correspondente dinamicamente
function initTabsClickEvent() {
    const tabs = document.getElementsByClassName(CLASSNAME.tab)

    const tabBars = document.getElementsByClassName(CLASSNAME.tabBar)

    const tables = document.getElementsByClassName(CLASSNAME.table)

    // ***************************
    // n de tab = n de table
    // ***************************
    // Atribui class ".active" no tab clicado e no table que corresponde mesmo index.
    // Remove ".active" apenas do tab e do table que 
    // pertence mesmo tabBar do tab que foi clicado.
    // (nao remove ".active" de outro tabBar, e de outro table).
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
