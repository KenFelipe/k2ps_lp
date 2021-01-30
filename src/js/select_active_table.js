initActiveTable()
const _btns = document.getElementsByClassName('select-table_button')


function initActiveTable() {
    initSelectTable()
    initSelectTableTab()

    function initSelectTable() {
        const buttons = document.getElementsByClassName('select-table__button')
        const tabSections = document.getElementsByClassName('tab-section')

        const tableSections = document.getElementsByClassName('table-section')

        // pode ser ~
        // for(let button of typeSelectButtons) { ... }
        // mas directive "of" nao functiona no IE de versao baixo
        for(let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {

            buttons.item(buttonIndex).addEventListener('click', () => {
                for(let evalButtonIndex = 0; evalButtonIndex < buttons.length; evalButtonIndex++) {
                    // nao vai remover classe do proprio elemento clicado
                    if(evalButtonIndex === buttonIndex) {
                        continue
                    }
                    buttons.item(evalButtonIndex).classList.remove('active')
                    tabSections.item(evalButtonIndex).classList.remove('active')

                    tableSections.item(evalButtonIndex).classList.remove('active')
                }
                buttons.item(buttonIndex).classList.add('active')
                tabSections.item(buttonIndex).classList.add('active')

                tableSections.item(buttonIndex).classList.add('active')
            })
        }
    }

    function initSelectTableTab() {
        const tabs = document.getElementsByClassName('select-tab__tab')
        const tabSections = document.getElementsByClassName('tab-section')

        const tableTabs = document.getElementsByClassName('table-tab')

        // debug
        // console.log('select-tab__tab:',tabs);
        // console.log('tab-section:', tabSections);
        // console.log('table-tab', tableTabs)
        // console.log('**********************************************')

        for(let tabSection = 0, tabIndexCount = 0; tabSection < tabSections.length; tabSection++) {

            const sectionChilds = tabSections.item(tabSection).childElementCount
            // debug
            // console.log(`sectionChilds: ${sectionChilds}, tabIndexCount: ${tabIndexCount}`)

            for(let tabIndex = tabIndexCount; tabIndex < tabIndexCount + sectionChilds; tabIndex++) {
                // debug
                // console.log(`tabIndex: ${tabIndex}, tabIndexCount: ${tabIndexCount}, tab:`, tabs.item(tabIndex));

                const evalStartTabIndex = tabIndexCount
                tabs.item(tabIndex).addEventListener('click', () => {
                    for(let evalTabIndex = evalStartTabIndex; evalTabIndex < evalStartTabIndex + sectionChilds; evalTabIndex++) {
                        // debug
                        // console.log(`tabIndex: ${tabIndex}, evalTabIndex: ${evalTabIndex}, evalStartTabIndex: ${evalStartTabIndex}`);

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
            tabIndexCount += sectionChilds
            // debug
            // console.log('tabIndexCount:', tabIndexCount)
            // console.log('**********************************************')
        }
    }
}
