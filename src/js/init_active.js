// iniciar primeiros elementos(botao, tabs, tabelas) ativado

function initActiveNodes() {
    // botao
    const selectTablesContainerClass = CLASS_ID_CONFIG.class.selectTablesContainer

    const buttonsContainer = document.getElementsByClassName(selectTablesContainerClass).item(0)
    buttonsContainer.childNodes.item(0).classList.add('active')



    // tab
    // primeiro tab section
    const tabBarsContainerClass = CLASS_ID_CONFIG.class.tabBarsContainer

    const tabBarsContainer = document.getElementsByClassName(tabBarsContainerClass).item(0)

    const tabBars = tabBarsContainer.childNodes
    tabBars.item(0).classList.add('active')

    // ativar todos primeiros tabs de cada section
    for(let i = 0; i < tabBars.length; i++) {
        tabBars.item(i).childNodes.item(0).classList.add('active')
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