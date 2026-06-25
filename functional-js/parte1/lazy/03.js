import Lazy from 'lazy.js';


// link deste site - não funciona com https
const url = 'https://www.tesourotransparente.gov.br/ckan/dataset/f6e65eb2-00b4-4a1d-9a81-6fe694210fea/resource/2d4b3f9a-1694-448f-b6a9-454f8d03343b/download/custos-por-itens-de-custos-depreciacaocustos-por-itens-de-custos---depreciacao.csv';

Lazy.makeHttpRequest(url)
    .lines()
    .take(10)
    .each(line => {
        console.log(line);
    });