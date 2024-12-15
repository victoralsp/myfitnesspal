// Criando constante para a div que mostrará os alimentos e o input de busca 
const divAlimentos = document.getElementById('alimentos')
const inputBusca = document.getElementById('buscar-alimento')

// Pegando dados do JSON 
fetch('/json/alimentos.json').then((resposta) => {
    return resposta.json();
}).then((informacoes) => {
    informacoes.alimentos.map((listagem) => {
        let calorias = listagem.calorias;
        let proteinas = listagem.proteinas;
        let gorduras = listagem.gorduras;
        let carboidratos = listagem.carboidratos;

        // Mostrando dados na tela 
        divAlimentos.innerHTML += 
        `
        <ul class="alimentos-calorias">
            <li class="nome-alimento">
                ${listagem.nome}
                <i class="fa-solid fa-chevron-down" id="seta-baixo"></i>
            </li>
            <li class="informacoes-alimentos" style="display: none;">
                <p>Calorias: <span class="calorias" data-base-value="${calorias}">${calorias}</span></p> 
                <p>Proteína: <span class="proteinas" data-base-value="${proteinas}">${proteinas}</span></p> 
                <p>Gordura: <span class="gorduras" data-base-value="${gorduras}">${gorduras}</span></p> 
                <p>Carboidratos: <span class="carboidratos" data-base-value="${carboidratos}">${carboidratos}</span></p> 
                <label for="quantidade-porcao-variavel">Quantidade em gramas:</label>
                <input type="number" class="quantidade-porcao-variavel" value="100">
                <button class="calcular-infos-alimento">Calcular</button>
                <p id="erro-input-personalizado">Digite um número maior que 0.</p>
            </li>
        </ul>
        `
    })

    // Evento de clique para alterar e calcular novos valores digitados no input
    let calcInfosAlimento = document.querySelectorAll('.calcular-infos-alimento')
    calcInfosAlimento.forEach(button => {
        button.addEventListener('click', function() {
            const alimentoItem = this.closest('.alimentos-calorias')
            const caloriasBase = parseFloat(alimentoItem.querySelector('.calorias').dataset.baseValue)
            const proteinasBase = parseFloat(alimentoItem.querySelector('.proteinas').dataset.baseValue)
            const gordurasBase = parseFloat(alimentoItem.querySelector('.gorduras').dataset.baseValue)
            const carboidratosBase = parseFloat(alimentoItem.querySelector('.carboidratos').dataset.baseValue)
            const inputQuantidade = alimentoItem.querySelector('.quantidade-porcao-variavel')
            const quantidade = parseFloat(inputQuantidade.value)
            const erroInputQuantidade = document.getElementById('erro-input-personalizado')

            // Validação do input de quantidade 
            if (quantidade <= 0) {
                erroInputQuantidade.classList.add('active')
                return
            } else {
                erroInputQuantidade.classList.remove('active')
            }

            // Calculo para descobrir valores baseado na quantidade digitada no input 
            const novoCalorias = caloriasBase * (quantidade / 100)
            const novoProteinas = proteinasBase * (quantidade / 100)
            const novoGorduras = gordurasBase * (quantidade / 100)
            const novoCarboidratos = carboidratosBase * (quantidade / 100)

            // Alteração dos valores padrões pelos novos após o cálculo 
            alimentoItem.querySelector('.calorias').textContent = novoCalorias.toFixed(2)
            alimentoItem.querySelector('.proteinas').textContent = novoProteinas.toFixed(2)
            alimentoItem.querySelector('.gorduras').textContent = novoGorduras.toFixed(2)
            alimentoItem.querySelector('.carboidratos').textContent = novoCarboidratos.toFixed(2)
        })
    })


    // Evento de clique para abrir informações dos alimentos 
    const nomeAlimentos = document.querySelectorAll('.nome-alimento')
    const informacoesAlimentos = document.querySelectorAll('.informacoes-alimentos')
    
    nomeAlimentos.forEach((nomeAlimento, index) => {
        nomeAlimento.addEventListener('click', () => {
            const informacao = informacoesAlimentos[index]
            if (informacao.style.display === 'none') {
                informacao.style.display = 'block'
                informacao.style.margin = '10px 0 0 0'
                
            } else {
                informacao.style.display = 'none'
            }
        })
    })

     // Função para filtrar alimentos de acordo com a pesquisa do input
     inputBusca.addEventListener('input', () => {
        let input = inputBusca.value.trim().toLowerCase()
        let alimentos = document.querySelectorAll('.alimentos-calorias')
        let mensagemErro = document.getElementById('erros')
        let imagemComida = document.getElementById('img-comidas-saudaveis')
        let alimentoEncontrado = false;

            alimentos.forEach((alimento) => {
                const nomeAlimento = alimento.querySelector('.nome-alimento').textContent.toLowerCase()
                if (nomeAlimento.includes(input)) {
                    alimento.style.display = 'block'
                    alimentoEncontrado = true;
                } else {
                    alimento.style.display = 'none'
                }
            })

            if (input.length > 0 && !alimentoEncontrado) {
                mensagemErro.style.display = 'block'
            } else {
                mensagemErro.style.display = 'none'
            }
    })
})




