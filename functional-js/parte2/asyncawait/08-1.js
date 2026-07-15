import { readFile } from 'node:fs/promises';


const p1 = readFile('../ex1.txt', 'utf-8');
const p2 = readFile('../ex2---.txt', 'utf-8');      // rejected
const p3 = readFile('../nao-existe.txt', 'utf-8');  // rejected

const pall = Promise.all([p1, p2, p3]);
pall.then(dados => {
    console.log(dados);
})
.catch(err => {
    console.log(err);
});
