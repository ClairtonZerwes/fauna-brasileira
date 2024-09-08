function pesquisarAnimal() {
    // pesquisarAnimal(): Função responsável por renderizar os resultados da pesquisa de animais na seção "resultados-pesquisa".
    let section = document.getElementById("resultado-da-pesquisa");
    let descricaoPesquisa = document.getElementById("input-pesquisa-animal").value.toLowerCase();
    let resultadoDadosDosAnimais = "";
    let dadosParaPesquisar = "";
    
    // Se descrição da pequisa diferente de nulo/branco/undefined
    // Itera sobre cada animal nos dados da pesquisa.
    // Para cada animal, cria um elemento HTML com as informações relevantes e adiciona ao HTML da seção de resultados.
    if (!descricaoPesquisa || stringEstaVaziaOuNula(descricaoPesquisa)) {
        resultadoDadosDosAnimais = `<p class="p-mensagem">Nenhum animal encontrado com a descrição informada!`;
    } else {
        if (!stringEstaVaziaOuNula(descricaoPesquisa) && dadosAnimais.length > 0) {
            for (let dado of dadosAnimais) {
                dadosParaPesquisar = dado.tags.toLowerCase();
                dadosParaPesquisar = dadosParaPesquisar + " " + dado.nome.toLowerCase();
                dadosParaPesquisar = dadosParaPesquisar + " " + dado.peso.toLowerCase();
                dadosParaPesquisar = dadosParaPesquisar + " " + dado.resumo.toLowerCase();
                dadosParaPesquisar = dadosParaPesquisar + " " + dado.tamanho.toLowerCase();
                dadosParaPesquisar = dadosParaPesquisar + " " + dado.nome_cientifico.toLowerCase();
                
                // se titulo, tags ou descricao possui a descrição da pesquisa informada então atribui valores ao resultados na section
                if (dadosParaPesquisar.includes(descricaoPesquisa)) {
                    resultadoDadosDosAnimais += `
                    <div class="item-resultado">
                        <div class="div-imagem">
                            <img src="${dado.imagem}" alt="${dado.nome}">
                        </div>
                        <div class="div-texto">
                            <h2>
                                <a href="${dado.link_wiki}" target="_blank"> ${dado.nome}</a>
                            </h2>
                            <h3>
                                <a>Nome Científico: ${dado.nome_cientifico}</a>
                            </h3>
                            <p class="descricao-meta">${dado.resumo}</p>
                            <p class="descricao-meta">${dado.tamanho}</p>
                            <p class="descricao-meta">${dado.peso}</p>
                            <a href="${dado.link_wiki}" target="_blank">Mais Informações</a>
                        </div>
                    </div>
                    `;
                };
            };
            if (stringEstaVaziaOuNula(resultadoDadosDosAnimais)) {
                resultadoDadosDosAnimais = `<p class="p-mensagem">Nenhum animal encontrado com a descrição informada!`;
            }
        };
    };
    // Cria um elemento <div> para cada animal da fauna Brasileira, com as seguintes informações:
    // - Nome: Nome do animal como texto Link para o WIKI ao clicar.
    // - Nome Científico: Nome científico do animal.
    // - Descrição: Resumo da descrição do animal, mais tamanho e peso aproximado.
    // - Link para a Wikipedia do animal no campo "Mais Informações".
    section.innerHTML = resultadoDadosDosAnimais;
};

// Retornar verdadeiro ou falso se a string e vazia, nula, branco ou undefined
function stringEstaVaziaOuNula(str) {
    return str === null || str === undefined || str.trim() === "";
};