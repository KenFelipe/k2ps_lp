initActiveTable()

function initActiveTable() {
    initSelectTypeTable()
    initSelectTabTable()

    function initSelectTypeTable() {
        const selectTableButtons = document.getElementsByClassName('select-table__button')
        const tableSections = document.getElementsByClassName('table-section')

        // pode ser ~
        // for(let button of typeSelectButtons) { ... }
        // mas nao functiona no IE de versao baixo
        for(let i = 0; i < selectTableButtons.length; i++) {
            selectTableButtons.item(i).addEventListener('click', () => {
                removeClass(selectTableButtons, 'active', i)
                removeClass(tableSections, 'active', i)

                selectTableButtons.item(i).classList.add('active')
                tableSections.item(i).classList.add('active')

                // for debug
                console.log('CLICKED!!!')
            })
        }
    }

    function initSelectTabTable() {
        const selectTabs = document.getElementsByClassName('select-tab__tab')
        const tableTabSections = document.getElementsByClassName('table-tab')
        console.log(selectTabs);
        console.log(tableTabSections);

        // for(let i = 0; i < typeSelectButtons.length; i++) {
        //     typeSelectButtons.item(i).addEventListener('click', () => {
        //         removeClass(typeSelectButtons, 'active', i)
        //         removeClass(tableTypeSections, 'active', i)

        //         typeSelectButtons.item(i).classList.add('active')
        //         tableTypeSections.item(i).classList.add('active')

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
