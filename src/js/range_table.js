function rangeTabletest() {
    // const buttonsContainer = document.getElementById('buttons-container')
    const buttonsbar = document.getElementsByClassName('bar-button')
    const buttonsT = document.getElementsByClassName(CLASSNAME.tablesSelectButton)
    const tabBars = document.getElementsByClassName('tabbar')
    const tablesSectionClass = CLASSNAME.tablesSection
    const tablesSections = document.getElementsByClassName(tablesSectionClass)

    console.log(buttonsbar)
    console.log(buttonsbar.item(0))

    for(let i = 0; i < buttonsbar.length; i++) {
        buttonsbar.item(i).addEventListener('click', () => {

            for(let targetIndex = 0; targetIndex < buttonsT.length; targetIndex++) {
                // nao vai remover classe do proprio elemento clicado
                // e dos elementos de mesmo index.
                buttonsT.item(targetIndex).classList.remove('active')
                tabBars.item(targetIndex).classList.remove('active')

                tablesSections.item(targetIndex).classList.remove('active')
            }
        })
    }
}
rangeTabletest()