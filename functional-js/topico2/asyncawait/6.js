const fsp = require('fs').promises;

(async () => {
    try {
        const dados = await fsp.readFile('./topico3/nao-existe.txt', 'utf-8');
        console.log(dados);    
    } catch(err) {
        // tratar a excecao
        console.log(err);
    }
})();

console.log('passei aqui');

