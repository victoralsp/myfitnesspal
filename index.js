const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')


// Função para calcular o IMC
const calcularIMC = () => {
    if (altura.value !== '' && peso.value !== '') {
        // Fórmula do IMC
         const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classificacao = ''

        switch (imc) {
            case "< 18.5": 
            classificacao = 'Abaixo do peso'
            break
            case "< 25": 
            classificacao = 'Peso normal'
            break
            case "< 30": 
            classificacao = 'A cima do peso'
            break
            case "< 40":
            classificacao = 'Obesidade grau II'
            break
            case "<= 40":
            classificacao = 'Obesidade grau III'
        }

        // Exibir resultado na tela 
        resultado.innerHTML = `IMC: ${imc} (${classificacao})`
        }
        else {
            resultado.innerHTML = 'Preencha os campos!'
        }
}

// 

if (imc < 18.5) {
    classificacao = 'Abaixo do peso'
}
else if (imc < 25) {
    classificacao = 'Peso Normal'
}
else if (imc < 30) {
    classificacao = 'A cima do peso'
}
else if (imc < 40) {
    classificacao = 'Obesidade grau II'
}
else {
    classificacao = 'Obesidade grau III'
}