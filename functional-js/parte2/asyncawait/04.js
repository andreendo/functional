import { readFile } from 'node:fs/promises'; 


function lerArquivo() {
    const dados = await readFile('../ex1.txt', 'utf-8');
    //..
    //..
    //..
    console.log(dados);
}

lerArquivo();
console.log("end");

