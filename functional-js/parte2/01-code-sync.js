const fs = require('fs');

const t1 = fs.readFileSync('ex1.txt', 'utf-8');
console.log(t1);
const t2 = fs.readFileSync('ex2.txt', 'utf-8');
console.log(t2);
const t3 = fs.readFileSync('ex3.txt', 'utf-8');
console.log(t3);

console.log('end script');