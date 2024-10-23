// Section de calcular imc 
const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcularIMC = () => {
    if (altura.value !== '' && peso.value !== '') {
         const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
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
        }
        else {
            resultado.innerHTML = 'Verifique se os campos foram preenchidos corretamente.'
        }
}

// Modo noturno 

const btnNoturno = document.getElementById('btnNoturno')
const whiteTextColorDarkMode = document.getElementsByClassName('white-text-dark-mode')
const bgDarkMode = document.getElementsByClassName('bg-color-dark-mode')
const greyTextColorDarkMode = document.getElementsByClassName('grey-text-dark-mode')
let noturno = false

const modoNoturno = () => {
    const cor = noturno ? 'dark' : 'branco'
    const whiteTextCor = noturno ? 'branco' : 'dark'
    const greyTextColor = noturno ? 'grey-dark' : 'dark'

    for(let i = 0; i < whiteTextColorDarkMode.length; i++) {
        whiteTextColorDarkMode[i].style.color = `var(--cor-${whiteTextCor})`
    }
    for(let i = 0; i < bgDarkMode.length; i++) {
        bgDarkMode[i].style.backgroundColor = `var(--cor-${cor})`
    }
    for(let i = 0; i < greyTextColorDarkMode.length; i++) {
        greyTextColorDarkMode[i].style.color = `var(--cor-${greyTextColor})`
    }
    
}

btnNoturno.addEventListener('click', () => {
    noturno = !noturno
    modoNoturno()
})

