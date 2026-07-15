import { readFile } from 'node:fs/promises';


(async () => {
    const p1 = readFile('../ex1.txt', 'utf-8');
    const p2 = readFile('../ex2.txt', 'utf-8');
    const dados = await Promise.all([p1, p2]);
    console.log(dados);    
})();
