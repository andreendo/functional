const fs = require('fs');

fs.readFile('f1.txt', 'utf-8', (err, fileName2) => {
    if (err) throw err;

    fs.readFile(fileName2, 'utf-8', (err, fileName3) => {
        if (err) throw err;

        fs.readFile(fileName3, 'utf-8', (err, fileContent) => {
            if (err) throw err;

            console.log('Conteudo: ', fileContent);
        });
    });
});