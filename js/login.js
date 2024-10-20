const menuIcon = document.querySelector('.icone-menu')
const navBar = document.getElementById('navbar')
let menu = true

menuIcon.addEventListener('click', () => {
    if(menu) {
        navBar.style.display = 'block'
    } else {
        navBar.style.display = 'none'
    }
    menu = !menu
})


