// seta as funcoes "onclick" do botoes e tabs
// pra mostrar tabela respectivo dinamicamente
function setActiveTables() {
    //
    setActiveButtons()
    setActiveTabs()

    function setActiveButtons() {
        const selectTablesButtonClass = CLASS_ID_CONFIG.class.selectTablesButton
        const buttons = document.getElementsByClassName(selectTablesButtonClass)

        const tabBarClass = CLASS_ID_CONFIG.class.tabBar
        const tabBars = document.getElementsByClassName(tabBarClass)

        const tablesSectionClass = CLASS_ID_CONFIG.class.tablesSection
        const tableSections = document.getElementsByClassName(tablesSectionClass)

        // pode ser ~
        // for(let button of typeSelectButtons) { ... }
        // mas directive "of" nao functiona no IE de versao baixo
        for(let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {

            buttons.item(buttonIndex).addEventListener('click', () => {
                // MUDAR O NOME DO VARIAVEL EVALBTNIDX TO TARGETINDEX
                // MUDAR O NOME DO VARIAVEL EVALBTNIDX TO TARGETINDEX
                // MUDAR O NOME DO VARIAVEL EVALBTNIDX TO TARGETINDEX
                for(let evalButtonIndex = 0; evalButtonIndex < buttons.length; evalButtonIndex++) {
                    // nao vai remover classe do proprio elemento clicado
                    if(evalButtonIndex === buttonIndex) {
                        continue
                    }
                    buttons.item(evalButtonIndex).classList.remove('active')
                    tabBars.item(evalButtonIndex).classList.remove('active')

                    tableSections.item(evalButtonIndex).classList.remove('active')
                }
                buttons.item(buttonIndex).classList.add('active')
                tabBars.item(buttonIndex).classList.add('active')

                tableSections.item(buttonIndex).classList.add('active')
            })
        }
    }

    function setActiveTabs() {
        const tablesSectionTableClass = CLASS_ID_CONFIG.class.tablesSectionTable
        const tableTabs = document.getElementsByClassName(tablesSectionTableClass)

        const tabBarClass = CLASS_ID_CONFIG.class.tabBar
        const tabBars = document.getElementsByClassName(tabBarClass)

        const tabClass = CLASS_ID_CONFIG.class.tab
        const tabs = document.getElementsByClassName(tabClass)

        for(let tabBarIndex = 0, tabIndexCount = 0; tabBarIndex < tabBars.length; tabBarIndex++) {
            const tabBarChilds = tabBars.item(tabBarIndex).childElementCount

            for(let tabIndex = tabIndexCount; tabIndex < tabIndexCount + tabBarChilds; tabIndex++) {
                const evalStartTabIndex = tabIndexCount

                tabs.item(tabIndex).addEventListener('click', () => {
                    for(let evalTabIndex = evalStartTabIndex; evalTabIndex < evalStartTabIndex + tabBarChilds; evalTabIndex++) {
                        // nao vai remover classe do proprio elemento clicado
                        if(evalTabIndex === tabIndex) {
                            continue
                        }
                        tabs.item(evalTabIndex).classList.remove('active')
                        tableTabs.item(evalTabIndex).classList.remove('active')
                    }

                    tabs.item(tabIndex).classList.add('active')
                    tableTabs.item(tabIndex).classList.add('active')
                })
            }

            tabIndexCount += tabBarChilds
        }
    }
}
