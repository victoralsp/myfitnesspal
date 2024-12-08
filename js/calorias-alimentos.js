    // Pegando dados do json e mostrando na tela
const divAlimentos = document.getElementById('alimentos')
const inputBusca = document.getElementById('buscar-alimento')

fetch('json/alimentos.json').then((resposta) => {
    return resposta.json()
}).then((informacoes) => {
    informacoes.alimentos.map((listagem) => {
        divAlimentos.innerHTML += 
        `
        <ul class="alimentos-calorias">
            <li class="nome-alimento">
                ${listagem.nome}
                <i class="fa-solid fa-chevron-down" id="seta-baixo"></i>
            </li>
            <li class="informacoes-alimentos" style="display: none;">
                <p>Calorias: <span class="valores-span">${listagem.calorias}</span></p> 
                <p>Proteína: <span class="valores-span">${listagem.proteinas}</span></p> 
                <p>Gordura: <span class="valores-span">${listagem.gorduras}</span></p> 
                <p>Carboidratos: <span class="valores-span">${listagem.carboidratos}</span></p> 
                <p>Quantidade por porção: <span class="valores-span">${listagem.quantidade_porcao}</span></p>
            </li>
        </ul>
        `
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




