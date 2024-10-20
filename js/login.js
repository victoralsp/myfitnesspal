const menuIcon = document.querySelector('.icone-menu')
const navBar = document.getElementById('navbar')
let menu = true

menuIcon.addEventListener('click', () => {
    if(menu) {
        navBar.style.opacity = '100'
        navBar.style.transform = "translateX(0)"
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        
    } else {
        navBar.style.opacity = '0'
        navBar.style.transform = "translateX(-100%)"
        menuIcon.innerHTML = '<i class="fa-solid fa-bars">'
    }
    menu = !menu
})


