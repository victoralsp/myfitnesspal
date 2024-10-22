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

const btnNoturno = document.getElementById('btnNoturno');
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const login = document.getElementById('login');
const titleComece = document.getElementById('title-comece');
const bgColor = document.getElementById('bg-color');
const paragrafoComece = document.getElementById('paragrafo-comece');
const subtitleResgistre = document.getElementById('subtitle-registre');
const paragrafoRegistre = document.getElementById('paragrafo-registre');
const subtitleFerramentas = document.getElementById('subtitle-ferramentas');
const paragrafoFerramentas = document.getElementById('paragrafo-ferramentas');

let noturno = false;

const modoNoturno = () => {
    const cor = noturno ? 'dark' : 'branco';
    const textoCor = noturno ? 'branco' : 'dark';

    header.style.backgroundColor = `var(--cor-${cor})`;
    header.style.boxShadow = noturno ? '2px 2px 10px #f7f7f720' : '2px 2px 8px rgba(0, 0, 0, 0.070)';
    main.style.backgroundColor = `var(--cor-${cor})`;
    footer.style.backgroundColor = `var(--cor-${cor})`;
    login.style.color = `var(--cor-${textoCor})`;
    titleComece.style.color = `var(--cor-${textoCor})`;
    paragrafoComece.style.color = `var(--cor-${textoCor})`;
    subtitleResgistre.style.color = `var(--cor-${textoCor})`;
    paragrafoRegistre.style.color = `var(--cor-${textoCor})`;
    subtitleFerramentas.style.color = `var(--cor-${textoCor})`;
    paragrafoFerramentas.style.color = `var(--cor-${textoCor})`;
    bgColor.style.backgroundColor = `var(--cor-${cor})`;
};

btnNoturno.addEventListener('click', () => {
    noturno = !noturno;
    modoNoturno();
});

