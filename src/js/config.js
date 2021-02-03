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
console.log(btnClass)

for(let btnIndex = 0; btnIndex < buttons.length; btnIndex++) {
    buttons.item(btnIndex).classList.add(btnClass)
}

// tabs
const tabs = document.getElementsByClassName('tabbar__tab')
// console.log(tabs)

// DEBUG
// const column_tab = 5
const column_tab = 'more-5'
// const column_tab = 'less-5'
const testIndex = 3

const tabClass = `tabs-${column_tab}`
for(let tabIdx = 0; tabIdx < tabs.length; tabIdx++) {
    tabs.item(tabIdx).classList.add(tabClass)
}

buttons.item(0).classList.remove('active')
buttons.item(testIndex).classList.add('active')
document.getElementsByClassName('tabbar').item(0).classList.remove('active')
document.getElementsByClassName('tabbar').item(testIndex).classList.add('active')

document.getElementsByClassName('tabs__bottom-bar').item(0).classList.add(tabClass)