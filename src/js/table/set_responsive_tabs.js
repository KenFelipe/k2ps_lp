function setResponsiveTabs() {
    const tabBars = document.getElementsByClassName(CLASSNAME.tabBar)
    const buttons = document.getElementsByClassName(CLASSNAME.tablesSelectButton)

    // tabBar bottom bar
    const bottomBar = document.getElementById(ID.bottomBar)

    //
    const getTabClassName = tabs => {
        if(tabs === 5) {
            return 'tabs-5'
        }
        if(tabs > 5) {
            return 'tabs-more-5'
        }

        return 'tabs-less-5'
    }

    for(let tabBarI = 0; tabBarI < tabBars.length; tabBarI++) {
        const tabClass = getTabClassName(tabBars.item(tabBarI).childElementCount)

        const tabs = tabBars.item(tabBarI).childNodes

        for(let tabI = 0; tabI < tabs.length; tabI++) {
            tabs.item(tabI).classList.add(tabClass)
        }

        //
        if(tabBarI === 0) {
            bottomBar.className = tabClass
        }
        // 
        buttons.item(tabBarI).addEventListener('click', () => {
            bottomBar.className = tabClass
        })
    }
}
