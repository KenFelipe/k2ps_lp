function setResponsiveTabs() {
    const tabBars = document.getElementsByClassName(CLASSNAME.tabBar)
    const tsButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton)

    // tabBar bottom bar
    const tabBarBottomBar = document.getElementById(ID.tabBarBottomBar)

    for(let tabBarI = 0; tabBarI < tabBars.length; tabBarI++) {
        // classe atribuido depende da quantidade de tabs
        const tabClass = getTabClassName(tabBars.item(tabBarI).childElementCount)

        const tabs = tabBars.item(tabBarI).childNodes
        for(let tabI = 0; tabI < tabs.length; tabI++) {
            tabs.item(tabI).classList.add(tabClass)
        }

        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
        // colocar na logica da init active 
        if(tabBarI === 0) {
            tabBarBottomBar.className = tabClass
        }
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

        // pro tabBarBottomBar classe adequado vai ser 
        // atribuido cada vez que clicar tsButtons
        tsButtons.item(tabBarI).addEventListener('click', () => {
            if(!tabBarBottomBar.classList.contains('active')) {
                tabBarBottomBar.className = tabClass
                return
            }

            tabBarBottomBar.className = tabClass
            tabBarBottomBar.classList.add('active')
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
