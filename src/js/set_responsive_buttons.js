function setResponsiveButtons() {
    const buttons = document.getElementsByClassName(CLASSNAME_CONFIG.tablesSelectButton)

    if(buttons.length === 5) {
        //
        const btnClass = 'buttons-5'

        for(let btnI = 0; btnI < buttons.length; btnI++) {
            buttons.item(btnI).classList.add(btnClass)
        }
    }
}
