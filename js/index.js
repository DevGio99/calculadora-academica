import calculate from "./calculate.js"
import charKey from "./charKey.js"
import clear from "./clear.js"
import copyToClipboard from "./copyToClipboard.js"
import keydown from "./keydown.js"
import switchTheme from "./switchTheme.js"



const input = document.getElementById('input')


const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(charKey)

document.getElementById('clear').addEventListener('click', clear)

input.addEventListener('keydown', keydown)

document.getElementById('equal').addEventListener('click', calculate)


document.getElementById('themeSwitcher').addEventListener('click', switchTheme)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)



