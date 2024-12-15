const menuIcon = document.querySelector('.icone-menu')
const navBar = document.getElementById('navbar')
let menu = false

function toggleMenu() {
    menu = !menu
    if (menu) {
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        navBar.classList.add('active')
    } else {
        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>'
        navBar.classList.remove('active')
    }
}

menuIcon.addEventListener('click', (event) => {
    event.stopPropagation()
    toggleMenu()
})

document.addEventListener('click', (event) => {
    if (menu && !navBar.contains(event.target) || navBar.contains(event.target) && event.target !== menuIcon) {
        toggleMenu()
    }
})
