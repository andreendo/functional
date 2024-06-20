const fsp = require('fs').promises;

const p1 = fsp.readFile('../ex1.txt', 'utf-8');
const p2 = fsp.readFile('../ex2---.txt', 'utf-8');      // rejected
const p3 = fsp.readFile('../nao-existe.txt', 'utf-8');  // rejected

const pall = Promise.all([p1, p2, p3]);
pall.then(dados => {
    console.log(dados);
})
.catch(err => {
    console.log(err);
});
