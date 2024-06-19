const fsp = require('fs').promises;

(async () => {
    try {
        const fileName2 = await fsp.readFile('f1.txt', 'utf-8');
        const fileName3 = await fsp.readFile(fileName2, 'utf-8');
        const fileContent = await fsp.readFile(fileName3, 'utf-8');
        console.log('Conteudo: ', fileContent);
    } catch (err) {
        console.log(err);
    }
})();