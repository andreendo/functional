import { readFile } from 'node:fs/promises';


(async () => {
    try {
        const fileName2 = await readFile('f1.txt', 'utf-8');
        const fileName3 = await readFile(fileName2, 'utf-8');
        const fileContent = await readFile(fileName3, 'utf-8');
        console.log('Conteudo: ', fileContent);
    } catch (err) {
        console.log(err);
    }
})();