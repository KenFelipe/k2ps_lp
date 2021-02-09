function initRbButtonsClickEvent() {
    const showRbButtons = document.getElementsByClassName(CLASSNAME.showRbButton)

    for(let i = 0; i < showRbButtons.length; i++) {
        showRbButtons.item(i).addEventListener('click', toggleRbButtonsActive)

        showRbButtons.item(i).addEventListener('click', ActiveRangeBar)

        showRbButtons.item(i).addEventListener('click', removeTableElementsActive)

        showRbButtons.item(i).addEventListener('click', disableTabbarBottom)

        function toggleRbButtonsActive() {
            for(let target = 0; target < showRbButtons.length; target++) {
                // nao remove do proprio btn clicado
                if(target === i) {
                    continue
                }
                showRbButtons.item(target).classList.remove('active')
            }
            showRbButtons.item(i).classList.add('active')
        }

        function ActiveRangeBar() {
            const barData = getRangeBarData(i)
            updateRangeBar(barData)

            const rangeBarContainer = document.getElementById('range-container')
            rangeBarContainer.classList.add('active')
        }

        function removeTableElementsActive() {
            const tsButtons = document.getElementsByClassName(CLASSNAME.tablesSelectButton)

            const tabBars = document.getElementsByClassName(CLASSNAME.tabBar)
            const tablesSections = document.getElementsByClassName(CLASSNAME.tablesSection)

            for(let target = 0; target < tsButtons.length; target++) {
                tsButtons.item(target).classList.remove('active')

                // esconder tabBar e tables
                tabBars.item(target).classList.remove('active')
                tablesSections.item(target).classList.remove('active')
            }
        }

        function disableTabbarBottom() {
            const tabBarBottomBar = document.getElementById(ID.tabBarBottomBar)
            tabBarBottomBar.classList.remove('active')
        }
    }
}

initRbButtonsClickEvent()
