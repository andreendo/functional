const fsp = require('fs').promises;

const p1 = fsp.readFile('../ex1.txt', 'utf-8');
const p2 = fsp.readFile('../ex2.txt', 'utf-8');

const p3 = Promise.all([p1, p2]);
p3.then(dados => {
    console.log(dados);
});
