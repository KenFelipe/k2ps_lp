// aplicar funcao "onclick" em botoes que seleciona tabela.
function initTableSelBtnsClickEvent() {
    // table select buttons
    const tableSelBtns = document.getElementsByClassName(CLASSNAME.tableSelBtn)

    for(let i = 0; i < tableSelBtns.length; i++) {
        tableSelBtns.item(i).addEventListener('click', toggleTableElementsActive) 

        tableSelBtns.item(i).addEventListener('click', enableTabbarUnderline) 

        tableSelBtns.item(i).addEventListener('click', deactivateRangeBarButtons) 

        tableSelBtns.item(i).addEventListener('click', turnOffRangeBar) 

        // n de tableSelBtns = n de tabBar = n de tableSecs
        function toggleTableElementsActive() {
            const tabbars = document.getElementsByClassName(CLASSNAME.tabbar)
            const tableSecs = document.getElementsByClassName(CLASSNAME.tableSec)

            // atribui class ".active" no botao clicado,
            // no tabBar e no table section respectivo(que corresponde mesmo index)
            // e remove .active de outros btn, tabbar e table section.
            for(let target = 0; target < tableSelBtns.length; target++) {
                // nao vai remover classe do proprio elemento clicado
                // e dos elementos de mesmo index.
                if(target === i) {
                    continue
                }
                tableSelBtns.item(target).classList.remove('active')

                tabbars.item(target).classList.remove('active')
                tableSecs.item(target).classList.remove('active')
            }
            tableSelBtns.item(i).classList.add('active')

            tabbars.item(i).classList.add('active')
            tableSecs.item(i).classList.add('active')
        }

        function enableTabbarUnderline() {
            const tabbarUnderline = document.getElementById(ID.tabbarUnderline)
            tabbarUnderline.classList.add('active')
        }

        function deactivateRangeBarButtons() {
            const turnOnRbBtns = document.getElementsByClassName(CLASSNAME.turnOnRbBtn)

            for(let target = 0; target < turnOnRbBtns.length; target++) {
                turnOnRbBtns.item(target).classList.remove('active')
            }
        }

        function turnOffRangeBar() {
            const rangeBarCtnr = document.getElementById(ID.rangeBarCtnr)
            rangeBarCtnr.classList.remove('active')
        }
    }
}
