import { readFile } from 'node:fs';


readFile('ex1.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
});

readFile('ex2.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
});

readFile('ex3.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
});

console.log('end script');