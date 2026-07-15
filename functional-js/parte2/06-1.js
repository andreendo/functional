import { readFile } from 'node:fs/promises';


const p1 = readFile('f1.txt', 'utf-8');

p1.then(value => {
    console.log(value);
})
.catch(reason => {
    console.log(reason);
    console.log('some error');
});

console.log('end');
