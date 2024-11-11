const divAlimentos = document.getElementById('alimentos')

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
}) 

