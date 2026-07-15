import { readFile } from 'node:fs/promises';


(async () => {
    const dados = await readFile('../ex1.txt', 'utf-8');
    console.log(dados);
})();

console.log('passei aqui');

