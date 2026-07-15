import { readFileSync } from 'node:fs';


const t1 = readFileSync('ex1.txt', 'utf-8');
console.log(t1);
const t2 = readFileSync('ex2.txt', 'utf-8');
console.log(t2);
const t3 = readFileSync('ex3.txt', 'utf-8');
console.log(t3);

console.log('end script');