function setResponsiveTabs() {
    const tabBars = document.getElementsByClassName(CLASSNAME_CONFIG.tabBar)
    const buttons = document.getElementsByClassName(CLASSNAME_CONFIG.tablesSelectButton)

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

        // tabBar bottom bar
        const bottomBarClass = CLASSNAME_CONFIG.tabBarBottomBar
        const bottomBar = document.getElementsByClassName(bottomBarClass).item(0)
        //
        if(tabBarI === 0) {
            bottomBar.className = `${bottomBarClass} ${tabClass}`
        }
        // 
        buttons.item(tabBarI).addEventListener('click', () => {
            bottomBar.className = `${bottomBarClass} ${tabClass}`
        })
    }
}
