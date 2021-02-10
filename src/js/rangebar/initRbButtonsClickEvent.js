function initRbButtonsClickEvent() {
    const turnOnRbBtns = document.getElementsByClassName(CLASSNAME.turnOnRbBtn)

    for(let i = 0; i < turnOnRbBtns.length; i++) {
        turnOnRbBtns.item(i).addEventListener('click', toggleRbButtonsActive)

        turnOnRbBtns.item(i).addEventListener('click', turnOnRangeBar)
        turnOnRbBtns.item(i).addEventListener('click', initRangeBarData)

        turnOnRbBtns.item(i).addEventListener('click', deactivateTableElements)

        turnOnRbBtns.item(i).addEventListener('click', disableTabbarUnderline)

        function toggleRbButtonsActive() {
            for(let target = 0; target < turnOnRbBtns.length; target++) {
                // nao remove do proprio btn clicado
                if(target === i) {
                    continue
                }
                turnOnRbBtns.item(target).classList.remove('active')
            }
            turnOnRbBtns.item(i).classList.add('active')
        }

        function turnOnRangeBar() {
            const rangeBarCtnr = document.getElementById(ID.rangeBarCtnr)
            rangeBarCtnr.classList.add('active')
        }
        
        function initRangeBarData() {
            updateRangeBar()
        }

        function deactivateTableElements() {
            const tableSelBtns = document.getElementsByClassName(CLASSNAME.tableSelBtn)

            const tabBars = document.getElementsByClassName(CLASSNAME.tabbar)
            const tablesSections = document.getElementsByClassName(CLASSNAME.tableSec)

            for(let target = 0; target < tableSelBtns.length; target++) {
                tableSelBtns.item(target).classList.remove('active')

                // esconder tabBar e tables
                tabBars.item(target).classList.remove('active')
                tablesSections.item(target).classList.remove('active')
            }
        }

        function disableTabbarUnderline() {
            const tabbarUnderline = document.getElementById(ID.tabbarUnderline)
            tabbarUnderline.classList.remove('active')
        }
    }
}
