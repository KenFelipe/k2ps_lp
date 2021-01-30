initActiveTable()

function initActiveTable() {
    initSelectTypeTable()
    initSelectTabTable()

    function initSelectTypeTable() {
        const buttons = document.getElementsByClassName('select-table__button')
        const tableSections = document.getElementsByClassName('table-section')
        const tableTabs = document.getElementsByClassName('tab-section')

        // pode ser ~
        // for(let button of typeSelectButtons) { ... }
        // mas nao functiona no IE de versao baixo
        for(let i = 0; i < buttons.length; i++) {
            buttons.item(i).addEventListener('click', () => {
                removeClass(buttons, 'active', i)
                removeClass(tableSections, 'active', i)
                removeClass(tableTabs, 'active', i)

                buttons.item(i).classList.add('active')
                tableSections.item(i).classList.add('active')
                tableTabs.item(i).classList.add('active')

                // debug
                console.log('CLICKED!!!')
            })
        }
    }

    function initSelectTabTable() {
        const tabs = document.getElementsByClassName('select-tab__tab')
        const tabSections = document.getElementsByClassName('tab-section')
        console.log(tabs);
        console.log(tabSections);

        const tableTabs = document.getElementsByClassName('table-tab')
        console.log(tableTabs)

        for(let i = 0, count = 0; i < tabSections.length; i++) {
            const sectionChilds = tabSections.item(i).childElementCount
            // debug
            // console.log(`sectionChilds: ${sectionChilds}, count: ${count}`)

            for(let j = count; j < count + sectionChilds; j++) {
                // debug
                // console.log(`j: ${j}, count: ${count}, tab:`, tabs.item(j));

                const startIdx = count
                tabs.item(j).addEventListener('click', () => {

                    for(let f = startIdx; f < startIdx + sectionChilds; f++) {
                        // debug
                        // console.log(`j: ${j}, f: ${f}, startIdx: ${startIdx}`);
                        j !== f ? tabs.item(f).classList.remove('active') : ''
                        j !== f ? tableTabs.item(f).classList.remove('active') : ''
                    }

                    tabs.item(j).classList.add('active')
                    tableTabs.item(j).classList.add('active')
                })
            }
            count += sectionChilds
            // debug
            // console.log('count:', count)
            // console.log('**********************************************************************************')
        }
    }

    function removeClass(nodes, className, index) {
        for(let i = 0; i < nodes.length; i++) {
            // vai remover classe 
            // se nao for o proprio elemento
            i !== index ? nodes.item(i).classList.remove(className) : ''
        } 
    }
}
