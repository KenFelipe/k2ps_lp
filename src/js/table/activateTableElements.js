// iniciar primeiros elementos(botao, tabs, tabelas) ativado
function activateTableElements() {
    const tabbars = document.getElementsByClassName(CLASSNAME.tabbar)

    for(let i = 0; i < tabbars.length; i++) {
        // active first tab of tabBar and first table of tableSection
        tabbars.item(i).childNodes.item(0).click()
    }
}
