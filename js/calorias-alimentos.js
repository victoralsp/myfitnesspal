const divAlimentos = document.getElementById('alimentos')
const inputBuscaAlimento = document.getElementById('buscar-alimento')

    fetch('json/alimentos.json').then((resposta) => {
        return resposta.json()
    }).then((informacoes) => {
        informacoes.alimentos.map((listagem) => {
            divAlimentos.innerHTML += 
            `
            <div class="alimentos-calorias">
            <h1>${listagem.nome}</h1>
            <p>Calorias: <span class="valores-span">${listagem.calorias}</span></p> 
            <p>Proteína: <span class="valores-span">${listagem.proteinas}</span></p> 
            <p>Gordura: <span class="valores-span">${listagem.gorduras}</span></p> 
            <p>Carboidratos: <span class="valores-span">${listagem.carboidratos}</span></p> 
            <p>Quantidade por porção: <span class="valores-span">${listagem.quantidade_porcao}</span></p></div>
            `
        })

    // Verifica se há algum alimento com nome igual ao pesquisado
    inputBuscaAlimento.addEventListener('input', () => {
        const valorBuscaInput = inputBuscaAlimento.value.toLowerCase()
        const alimentosDivs = document.querySelectorAll('.alimentos-calorias')
        const errosBusca = document.getElementById('erros')
        const imgComidas = document.getElementById('img-comidas-saudaveis')
        let alimentoEncontrado = false

        // Remove a imagem caso algum alimento seja pesquisado
        if (alimentoEncontrado || valorBuscaInput === '') {           
            imgComidas.style.display = 'block'
        } else {    
            imgComidas.style.display = 'none'
        } 
        
        // Percorre o objeto e verifica se o item pesquisado está presente no json 
        alimentosDivs.forEach(div => {
            const nomeAlimento = div.querySelector('h1').textContent.toLowerCase()

            if (nomeAlimento.includes(valorBuscaInput) && valorBuscaInput) {
                div.style.display = 'block'
                alimentoEncontrado = true
            } else {
                div.style.display = 'none'
            }
        })
        
        if (!alimentoEncontrado && valorBuscaInput) {
            errosBusca.innerHTML = 'Alimento não encontrado, verifique se digitou corretamente.'
            imgComidas.style.display = 'block'
        } else {
            errosBusca.innerHTML = ''
        }
        })     
    }) 


