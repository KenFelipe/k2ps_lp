// iniciar primeiros elementos(botao, tabs, tabelas) ativado

function activateTableElems() {
    const tabbars = document.getElementsByClassName(CLASSNAME.tabbar)
    for(let i = 0; i < tabbars.length; i++) {
        // active first tab of tabBar and first table of tableSection
        tabbars.item(i).childNodes.item(0).click()
    }

    const firstDataType = DATA[Object.keys(DATA)[0]].type
    if(firstDataType === 'table') {
        const firstButton = document.getElementsByClassName(CLASSNAME.button).item(0)
        firstButton.click()
    }
}
