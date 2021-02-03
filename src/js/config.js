// buttons
const buttons = document.getElementsByClassName(CLASSNAME_CONFIG.selectTablesButton)

const btnClassName = {
    1: '',
    2: '',
    3: '',
    4: 'column-buttons-2',
    5: 'column-buttons-3',
    default: 'column-buttons-4'
}

const btnClass = btnClassName[btnClassName.hasOwnProperty(buttons.length) ? buttons.length : 'default']
// console.log(btnClass)

for(let btnIndex = 0; btnIndex < buttons.length; btnIndex++) {
    buttons.item(btnIndex).classList.add(btnClass)
}

