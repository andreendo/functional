function checarPositivo(a, b) {
    if (a < 0 || b < 0)
        return Promise.reject("Erro: número negativo");
    else
        return Promise.resolve({ a, b });
}

function divisao({ a, b }) {
    if (b === 0)
        return Promise.reject("Erro: divisão por zero");
    else
        return Promise.resolve(a / b);
}

checarPositivo(someA, someB)
    .then(divisao)
    .then(res => {
        // fazer outros processamentos
        // ou encadear outras funções
    })
    .catch(error => {
        // tratar o erro (promise reject)
    });

