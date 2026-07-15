import { readFile } from 'node:fs/promises'; 


async function lerArquivo() {
    const dados = await readFile('../ex1.txt', 'utf-8');
    console.log(dados);
}

lerArquivo();
console.log('passei aqui');

