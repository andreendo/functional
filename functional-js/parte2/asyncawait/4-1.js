const fsp = require('fs').promises;

function lerArquivo() {
    const p1 = fsp.readFile('../ex1.txt', 'utf-8');
    p1.then(dados => {
        console.log(dados);
    });
}

lerArquivo();
console.log('passei aqui');

