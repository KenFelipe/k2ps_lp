function rangeTabletest() {
    const showBarButtons = document.getElementsByClassName(CLASSNAME.showBarButton)

    const tablesSelectButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton)

    const tabBars = document.getElementsByClassName(CLASSNAME.tabBar)
    const tablesSections = document.getElementsByClassName(CLASSNAME.tablesSection)

    for(let i = 0; i < showBarButtons.length; i++) {
        showBarButtons.item(i).addEventListener('click', () => {
            //
            for(let target = 0; target < showBarButtons.length; target++) {
                showBarButtons.item(target).classList.remove('active')
            }
            showBarButtons.item(i).classList.add('active')

            //
            for(let target = 0; target < tablesSelectButtons.length; target++) {
                // esconder tabBar e tables
                tablesSelectButtons.item(target).classList.remove('active')
                tabBars.item(target).classList.remove('active')
                tablesSections.item(target).classList.remove('active')
            }

            document.getElementById('tabbar-border-bottom').classList.add('disable')
        })

        showBarButtons.item(i).addEventListener('click', () => {
            const barData = DATA[showBarButtons.item(i).innerHTML].bar
            updateRangeBar(barData)

            const rangeBarContainer = document.getElementById('range-container')
            rangeBarContainer.classList.add('active')
        })

        const tablesSelectButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton)
        for(let i = 0; i < tablesSelectButtons.length; i++) {
            tablesSelectButtons.item(i).addEventListener('click', () => {
                const rangeBarContainer = document.getElementById('range-container')
                rangeBarContainer.classList.remove('active')
            })
        }
    }
}

rangeTabletest()
