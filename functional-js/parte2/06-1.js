const fsp = require('fs').promises;

const p1 = fsp.readFile('f12222.txt', 'utf-8');

p1.then(value => {
    console.log(value);
})
.catch(reason => {
    // console.log(reason);
    console.log('some error');
});

console.log('end');
