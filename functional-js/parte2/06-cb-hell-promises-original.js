const fsp = require('fs').promises;

fsp.readFile('f1.txt', 'utf-8')
    .then((fileName2) => {
        return fsp.readFile(fileName2, 'utf-8');
    })
    .then((fileName3) => {
        return fsp.readFile(fileName3, 'utf-8');
    })
    .then((fileContent) => {
        console.log('Conteudo: ', fileContent);
    })
    .catch((err) => {
        console.log(err);
    });