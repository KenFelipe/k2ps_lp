// iniciar primeiros elementos(botao, tabs, tabelas) ativado
// (atribui class ".active")

function setActive() {
    // botao
    const selectTablesContainerClass = CLASSNAME_CONFIG.selectTablesContainer

    const buttonsContainer = document.getElementsByClassName(selectTablesContainerClass).item(0)
    buttonsContainer.childNodes.item(0).classList.add('active')


    // tab
    // primeiro tab section
    const tabBarsContainerClass = CLASSNAME_CONFIG.tabBarsContainer

    const tabBarsContainer = document.getElementsByClassName(tabBarsContainerClass).item(0)

    const tabBars = tabBarsContainer.childNodes
    tabBars.item(0).classList.add('active')

    // ativar todos primeiros tabs de cada section
    for(let i = 0; i < tabBars.length; i++) {
        tabBars.item(i).childNodes.item(0).classList.add('active')
    }
    

    // tables
    // primeiro tables section
    const tablesSectionClass = CLASSNAME_CONFIG.tablesSection

    const tablesSections = document.getElementsByClassName(tablesSectionClass)
    tablesSections.item(0).classList.add('active')

    // ativar todas primeiros tables do section
    for(let i = 0; i < tablesSections.length; i++) {
        tablesSections.item(i).childNodes.item(0).classList.add('active')
    }
}