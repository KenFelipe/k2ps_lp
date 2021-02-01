// seta as funcoes "onclick" nos botoes 
// pra atribuir class ".active"
// pra mostrar tabBar e tabela respectivo dinamicamente

function initActiveButtons() {
    const selectTablesButtonClass = CLASSNAME_CONFIG.selectTablesButton
    const buttons = document.getElementsByClassName(selectTablesButtonClass)

    const tabBarClass = CLASSNAME_CONFIG.tabBar
    const tabBars = document.getElementsByClassName(tabBarClass)

    const tablesSectionClass = CLASSNAME_CONFIG.tablesSection
    const tablesSections = document.getElementsByClassName(tablesSectionClass)

    // *******************************
    // n de buttons = n de tabBar
    // *******************************
    // aplicar funcao "onclick" em cada botao
    // que atribui class ".active" no botao clicado,
    // e no tabBar e table section respectivo(que corresponde mesmo index).
    // tambem remove .active de outros elementos.
    for(let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {

        buttons.item(buttonIndex).addEventListener('click', () => {
            for(let targetIndex = 0; targetIndex < buttons.length; targetIndex++) {
                // nao vai remover classe do proprio elemento clicado
                // e dos elementos de mesmo index.
                if(targetIndex === buttonIndex) {
                    continue
                }
                buttons.item(targetIndex).classList.remove('active')
                tabBars.item(targetIndex).classList.remove('active')

                tablesSections.item(targetIndex).classList.remove('active')
            }
            buttons.item(buttonIndex).classList.add('active')
            tabBars.item(buttonIndex).classList.add('active')

            tablesSections.item(buttonIndex).classList.add('active')
        })
    }
}
