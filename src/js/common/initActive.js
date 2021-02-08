// iniciar primeiros elementos(botao, tabs, tabelas) ativado
// (atribui class ".active")
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!! tb para rangeBar

function initActive() {
    // botao
    const buttonsContainer = document.getElementById(ID.buttonsContainer)
    buttonsContainer.childNodes.item(0).classList.add('active')


    // tab
    // primeiro tab section
    const tabBarsContainer = document.getElementById(ID.tabBarContainer)

    const tabBars = tabBarsContainer.childNodes

    // ativar todos primeiros tabs de cada section
    for(let i = 0; i < tabBars.length; i++) {
        tabBars.item(i).childNodes.item(0).classList.add('active')
    }
    

    // tables
    // primeiro tables section
    const tablesSections = document.getElementsByClassName(CLASSNAME.tablesSection)

    // ativar todas primeiros tables do section
    for(let i = 0; i < tablesSections.length; i++) {
        tablesSections.item(i).childNodes.item(0).classList.add('active')
    }


    //
    const firstButtonDataType = DATA[Object.keys(DATA)[0]].type

    if(firstButtonDataType === 'table') {
        tabBars.item(0).classList.add('active')
        tablesSections.item(0).classList.add('active')
    }
}