import { readFile } from 'node:fs/promises';


(async () => {
    try {
        const dados = await readFile('./nao-existe.txt', 'utf-8');
        console.log(dados);    
    } catch(err) {
        // tratar a excecao
        console.log(err);
    }
})();

console.log('passei aqui');

