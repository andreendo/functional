const fsp = require('fs').promises;

(async () => {
    const p1 = fsp.readFile('../ex1.txt', 'utf-8');
    const p2 = fsp.readFile('../ex2.txt', 'utf-8');
    const dados = await Promise.all([p1, p2]);
    console.log(dados);    
})();
