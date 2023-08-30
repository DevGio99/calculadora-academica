export default function(){
    const main = document.querySelector('main')
    const root = document.querySelector(':root')
    if (main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#00f2ff')
        root.style.setProperty('--font-color', '#000000')
        root.style.setProperty('--border-color', '#EAEAEA')
        root.style.setProperty('--primary-color', '#000000')

        main.dataset.theme = 'light'
    } else if (main.dataset.theme === 'light') {
    root.style.setProperty('--bg-color', '#000000')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#EAEAEA')
    root.style.setProperty('--primary-color', '#00f2ff')

    main.dataset.theme = 'dark'

 }
 
}