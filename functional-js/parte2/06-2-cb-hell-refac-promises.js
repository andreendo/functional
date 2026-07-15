import { readFile } from 'node:fs/promises';


readFile('f1.txt', 'utf-8')
    .then((fileName2) => {
        return readFile(fileName2, 'utf-8');
    })
    .then((fileName3) => {
        return readFile(fileName3, 'utf-8');
    })
    .then((fileContent) => {
        console.log('Conteudo: ', fileContent);
    })
    .catch((err) => {
        console.log(err);
    });