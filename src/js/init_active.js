// iniciar primeiros elementos(botao, tabs, tabelas) ativado

function initActiveNodes() {
    // botao
    const selectTablesContainerClass = CLASS_ID_CONFIG.class.selectTablesContainer

    const buttonsContainer = document.getElementsByClassName(selectTablesContainerClass).item(0)
    buttonsContainer.childNodes.item(0).classList.add('active')



    // primeiro tab section
    const tabsContainer = document.getElementById('select-tab')

    const tabSection = tabsContainer.childNodes
    tabSection.item(0).classList.add('active')

    // ativar todos primeiros tabs de cada section
    for(let i = 0; i < tabSection.length; i++) {
        tabSection.item(i).childNodes.item(0).classList.add('active')
    }
    


    // tables
    // primeiro tables section
    const tablesSectionClass = CLASS_ID_CONFIG.class.tablesSection

    const tableSections = document.getElementsByClassName(tablesSectionClass)
    tableSections.item(0).classList.add('active')

    // ativar todas primeiros tables do section
    for(let i = 0; i < tableSections.length; i++) {
        tableSections.item(i).childNodes.item(0).classList.add('active')
    }
}