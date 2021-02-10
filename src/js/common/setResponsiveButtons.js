function setResponsiveButtons() {
    const buttons = document.getElementsByClassName(CLASSNAME.button)

    if(buttons.length === 5) {
        const buttonClass = 'buttons-5'

        for(let i = 0; i < buttons.length; i++) {
            buttons.item(i).classList.add(buttonClass)
        }
    }
}
