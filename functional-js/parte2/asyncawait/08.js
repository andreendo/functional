import { readFile } from 'node:fs/promises';


const p1 = readFile('../ex1.txt', 'utf-8');
const p2 = readFile('../ex2.txt', 'utf-8');

const p3 = Promise.all([p1, p2]);
p3.then(dados => {
    console.log(dados);
});
