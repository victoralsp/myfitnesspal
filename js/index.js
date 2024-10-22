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

const body = document.body
const footer = document.getElementById('footer')
const header = document.getElementById('header')
const main = document.getElementById('main')
const btnNoturno = document.getElementById('btnNoturno')
const login = document.getElementById('login')
const titleComece = document.getElementById('title-comece')
const bgColor = document.getElementById('bg-color')
const paragrafoComece = document.getElementById('paragrafo-comece')
const subtitleResgistre = document.getElementById('subtitle-registre')
const paragrafoRegistre = document.getElementById('paragrafo-registre')
const subtitleFerramentas = document.getElementById('subtitle-ferramentas')
const paragrafoFerramentas = document.getElementById('paragrafo-ferramentas')
let noturno = false

btnNoturno.addEventListener('click', () => {
    if (noturno) {
        header.style.backgroundColor  = 'var(--cor-branco)'
        header.style.boxShadow = '2px 2px 8px rgba(0, 0, 0, 0.070)'
        main.style.backgroundColor  = 'var(--cor-branco)'
        footer.style.backgroundColor  = 'var(--cor-branco)'
        login.style.color = 'var(--cor-dark)'
        titleComece.style.color = 'var(--cor-dark)'
        paragrafoComece.style.color = 'var(--cor-dark)'
        subtitleResgistre.style.color = 'var(--cor-dark)'
        paragrafoRegistre.style.color = 'var(--cor-dark)'
        subtitleFerramentas.style.color = 'var(--cor-dark)'
        paragrafoFerramentas.style.color = 'var(--cor-dark)'
        bgColor.style.backgroundColor = 'var(--cor-branco)'
        
    } else {
        header.style.backgroundColor  = 'var(--cor-dark)'
        header.style.boxShadow = '2px 2px 10px #f7f7f720'
        main.style.backgroundColor  = 'var(--cor-dark)'
        footer.style.backgroundColor  = 'var(--cor-dark)'
        login.style.color = 'var(--cor-branco)'
        titleComece.style.color = 'var(--cor-branco)'
        paragrafoComece.style.color = 'var(--cor-branco)'
        subtitleResgistre.style.color = 'var(--cor-branco)'
        paragrafoRegistre.style.color = 'var(--cor-branco)'
        subtitleFerramentas.style.color = 'var(--cor-branco)'
        paragrafoFerramentas.style.color = 'var(--cor-branco)'
        bgColor.style.backgroundColor = 'var(--cor-dark)'
    }
    noturno = !noturno
})
