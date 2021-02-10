function setResponsiveTabs() {
    const tabbars = document.getElementsByClassName(CLASSNAME.tabbar)
    const tableSelBtns = document.getElementsByClassName(CLASSNAME.tableSelBtn)

    // tabbar bottom bar
    const tabbarUnderline = document.getElementById(ID.tabbarUnderline)

    for(let tabbarI = 0; tabbarI < tabbars.length; tabbarI++) {
        // classe atribuido depende da quantidade de tabs
        const tabClass = getTabClassName(tabbars.item(tabbarI).childElementCount)

        // adicionar pro tabs
        const tabs = tabbars.item(tabbarI).childNodes
        for(let tabI = 0; tabI < tabs.length; tabI++) {
            tabs.item(tabI).classList.add(tabClass)
        }

        // pro tabbarUnderline classe adequado vai ser 
        // atribuido cada vez que clicar tableSelBtns
        tableSelBtns.item(tabbarI).addEventListener('click', () => {
            if(!tabbarUnderline.classList.contains('active')) {
                tabbarUnderline.className = tabClass
                return
            }
            tabbarUnderline.className = tabClass
            tabbarUnderline.classList.add('active')
        })
    }

    // classe atribuido depende da quantidade de tabs
    function getTabClassName(tabs) {
        if(tabs === 5) {
            return 'tabs-5'
        }
        if(tabs > 5) {
            return 'tabs-more-5'
        }

        return 'tabs-less-5'
    }
}
