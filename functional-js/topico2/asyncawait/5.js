const fsp = require('fs').promises;

(async () => {
    const dados = await fsp.readFile('./topico3/ex1.txt', 'utf-8');
    console.log(dados);
})();

console.log('passei aqui');

