const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')


// Função para calcular o IMC
const calcularIMC = () => {
    if (altura.value !== '' && peso.value !== '') {
        // Fórmula do IMC
         const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classificacao = ''

        // Verificar a classificação do IMC
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


        // Exibir resultado na tela 
        resultado.innerHTML = `IMC: ${imc} (${classificacao})`
        }
        else {
            resultado.innerHTML = 'Preencha os campos!'
        }
}
