// iniciar primeiros elementos(botao, tabs, tabelas) ativedo

function initActiveNodes() {
    // botao
    const buttonsContainer = document.getElementById('select-table')
    buttonsContainer.childNodes.item(0).classList.add('active')

    // primeiro tab section
    const tabsContainer = document.getElementById('select-tab')

    const tabSection = tabsContainer.childNodes
    tabSection.item(0).classList.add('active')

    // ativar todos primeiros tabs de cada section
    for(let i = 0; i < tabSection.length; i++) {
        tabSection.item(i).childNodes.item(0).classList.add('active')
    }
    
    // primeiro table section
    const tableSections = document.getElementsByClassName('table-section')
    tableSections.item(0).classList.add('active')

    // ativar todas primeiras tabelas do section
    for(let i = 0; i < tableSections.length; i++) {
        tableSections.item(i).childNodes.item(0).classList.add('active')
    }
}