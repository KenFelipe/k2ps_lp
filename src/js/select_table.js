initActiveTable()

function initActiveTable() {
    initSelectTypeTable()
    initSelectTabTable()

    function initSelectTypeTable() {
        const selectTableButtons = document.getElementsByClassName('select-table__button')
        const tableSections = document.getElementsByClassName('table-section')
        const tableTabs = document.getElementsByClassName('select-tab')

        // pode ser ~
        // for(let button of typeSelectButtons) { ... }
        // mas nao functiona no IE de versao baixo
        for(let i = 0; i < selectTableButtons.length; i++) {
            selectTableButtons.item(i).addEventListener('click', () => {
                removeClass(selectTableButtons, 'active', i)
                removeClass(tableSections, 'active', i)
                removeClass(tableTabs, 'active', i)

                selectTableButtons.item(i).classList.add('active')
                tableSections.item(i).classList.add('active')
                tableTabs.item(i).classList.add('active')

                // for debug
                console.log('CLICKED!!!')
            })
        }
    }

    function initSelectTabTable() {
        const selectTabs = document.getElementsByClassName('select-tab__tab')
        const tableTabSections = document.getElementsByClassName('table-tab')
        const tableTabs = document.getElementsByClassName('select-tab')
        console.log(selectTabs);
        console.log(tableTabSections);
        console.log(tableTabs);
        // console.log(tableTabs[0].childElementCount);
        // console.log(tableTabs.length)

        let count = 0
        for(let i = 0; i < tableTabs.length; i++) {
            // console.log(tableTabs[i].childElementCount, count);
            for(let j = count; j < count + tableTabs[i].childElementCount; j++) {
                console.log(j, selectTabs.item(j))
                selectTabs.item(j).addEventListener('click', () => {

                    // problem in remove class process
                    for(let f = count; f < count + tableTabs[i].childElementCount; f++) {
                        console.log(j, f);
                        // console.log(selectTabs);
                        // console.log(selectTabs.item(f))
                        // j !== f ? selectTabs.item(f).classList.remove('active') : ''
                        // j !== f ? tableTabSections.item(f).classList.remove('active') : ''
                    }

                    selectTabs.item(j).classList.add('active')
                    console.log(selectTabs)
                    tableTabSections.item(j).classList.add('active')

                    console.log('***********************')
                    console.log(selectTabs)
                    console.log(tableTabSections)
                    console.log(tableTabs)
                })
            }
            count += tableTabs[i].childElementCount
            // console.log(count);
        }

        // for(let i = 0; i < selectTabs.length; i++) {
        //     selectTabs.item(i).addEventListener('click', () => {
        //         removeClass(selectTabs, 'active', i)
        //         removeClass(tableTabSections, 'active', i)

        //         selectTabs.item(i).classList.add('active')
        //         tableTabSections.item(i).classList.add('active')

        //         // for debug
        //         console.log('CLICKED!!!')
        //     })
        // }
    }

    function removeClass(nodes, className, index) {
        for(let i = 0; i < nodes.length; i++) {
            // vai remover classe 
            // se nao for o proprio elemento
            i !== index ? nodes.item(i).classList.remove(className) : ''
        } 
    }
}
