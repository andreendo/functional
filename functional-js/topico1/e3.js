async function checarPositivo(a, b) {
    if (a < 0 || b < 0)
        throw "Erro: número negativo";
    else
        return { a, b };
}

checarPositivo(10, -5)
    .then(res => console.log(res))
    .catch(error => console.log(error));

    