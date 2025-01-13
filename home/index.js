// Menu responsivo 
const btnMenu = document.getElementById('menu-navbar')
const navbar = document.getElementById('btn-e-login')
menuAtivo = false

btnMenu.addEventListener('click', () => {
    if (menuAtivo) {
        navbar.classList.remove('active')
    } else {
        navbar.classList.add('active')       
    }
    menuAtivo = !menuAtivo
})


// Efeitos de animações no scroll 
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))


// Modo noturno 
const btnNoturno = document.getElementById('btnNoturno')
const whiteTextColorDarkMode = document.getElementsByClassName('white-text-dark-mode')
const bgDarkMode = document.getElementsByClassName('bg-color-dark-mode')
const greyTextColorDarkMode = document.getElementsByClassName('grey-text-dark-mode')
const whiteShadowDarkMode = document.getElementsByClassName('white-shadow-dark-mode')
let noturno = false

const modoNoturno = () => {
    const cor = noturno ? 'dark' : 'branco'
    const whiteTextCor = noturno ? 'branco' : 'dark'
    const greyTextColor = noturno ? 'grey-dark' : 'dark'
    const whiteShadow = noturno ? 'shadow-branco' : 'shadow-preto'

    for(let i = 0; i < whiteTextColorDarkMode.length; i++) {
        whiteTextColorDarkMode[i].style.color = `var(--cor-${whiteTextCor})`
    }
    for(let i = 0; i < bgDarkMode.length; i++) {
        bgDarkMode[i].style.backgroundColor = `var(--cor-${cor})`
    }
    for(let i = 0; i < greyTextColorDarkMode.length; i++) {
        greyTextColorDarkMode[i].style.color = `var(--cor-${greyTextColor})`
    }
    for(let i = 0; i < whiteShadowDarkMode.length; i++) {
        whiteShadowDarkMode[i].style.boxShadow = `0px 0px 4px var(--cor-${whiteShadow})`
    }
}

btnNoturno.addEventListener('click', () => {
    if (!noturno) {
        btnNoturno.innerHTML = '<i class="fa-solid fa-sun"></i>'
    } else {
        btnNoturno.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
    noturno = !noturno
    modoNoturno()
})



// Section de calcular imc 
const resultado = document.getElementById('resultado')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', () => {
    let alturaValue = altura.value
    let pesoValue = peso.value

    if(alturaValue === '' || isNaN(alturaValue)) {
        resultado.innerHTML = 'Digite sua altura corretamente'
        altura.style.border = '1px solid var(--cor-erro)'
    } else {
        resultado.innerHTML = ''
        altura.style.border = '1px solid black'
    }

    if(pesoValue === '' || isNaN(pesoValue)) {
        resultado.innerHTML = 'Digite seu peso corretamente'
        peso.style.border = '1px solid var(--cor-erro)'
    } else {
        resultado.innerHTML = ''
        peso.style.border = '1px solid black'
    }

    if (alturaValue !== '' && pesoValue !== '') {
        const imc = (pesoValue / (alturaValue * alturaValue)).toFixed(2)
       let classificacao = ''
       if (imc < 18.5) {
           classificacao = 'Abaixo do peso'
       } else if (imc < 25) {
           classificacao = 'Peso Normal'
       } else if (imc < 30) {
           classificacao = 'Acima do peso'
       } else if (imc < 40) {
           classificacao = 'Obesidade grau II'
       } else {
           classificacao = 'Obesidade grau III'
       }

       resultado.innerHTML = `IMC: ${imc} (${classificacao})`
       resultado.style.color = 'var(--cor-principal)'
       }
       else {
           resultado.innerHTML = 'Verifique se os campos foram preenchidos corretamente.'
           resultado.style.color = 'var(--cor-erro)'
       }
})