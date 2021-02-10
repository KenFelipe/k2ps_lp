// aplicar funcao "onclick" nos tabs
// pra mostrar tabela correspondente dinamicamente
function initTabsClickEvent() {
    const tabs = document.getElementsByClassName(CLASSNAME.tab)

    const tabbars = document.getElementsByClassName(CLASSNAME.tabbar)

    const tables = document.getElementsByClassName(CLASSNAME.table)

    // ***************************
    // n de tab = n de table
    // ***************************
    // Atribui class ".active" no tab clicado e no table que corresponde mesmo index.
    // Remove ".active" apenas do tab e do table que 
    // pertence mesmo tabbar do tab que foi clicado.
    // (nao remove ".active" de outro tabbar, e de outro table).
    for(let tabbarIndex = 0, tabIndexCount = 0; tabbarIndex < tabbars.length; tabbarIndex++) {
        // tabbarChilds: n de tab de um tabbar
        // serve pra limitar remocao do ".active" de outro grupo tabbar e table
        const tabbarChilds = tabbars.item(tabbarIndex).childElementCount

        for(let tabIndex = tabIndexCount; tabIndex < tabIndexCount + tabbarChilds; tabIndex++) {
            // targetStartIndex: primeiro index do
            // grupo tabbar pra remover ".active"
            const targetStartIndex = tabIndexCount

            tabs.item(tabIndex).addEventListener('click', () => {
                // nao remove ".active" de outro grupo tabbar e table
                for(let targetIndex = targetStartIndex; targetIndex < targetStartIndex + tabbarChilds; targetIndex++) {
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

        tabIndexCount += tabbarChilds
    }
}
