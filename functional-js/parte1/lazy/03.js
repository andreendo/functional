const Lazy = require('lazy.js');

// link deste site
const url = 'http://www.tesourotransparente.gov.br/ckan/dataset/f6e65eb2-00b4-4a1d-9a81-6fe694210fea/resource/bcdd254c-6f25-4dad-af5d-7e944ebe512a/download/custos-por-itens-de-custos-depreciacaoCustos-por-Itens-de-Custos---Depreciacao.csv';

Lazy.makeHttpRequest(url)
    .lines()
    .take(10)
    .each(line => {
        console.log(line);
    });