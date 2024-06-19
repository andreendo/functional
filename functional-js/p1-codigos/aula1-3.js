const R = require('ramda');
// filter
// let arr = [5, 6, 7, 8, 9, 10];

// function ehPar(num) {
//     return num % 2 === 0;
// }

// const pares = arr.filter(ehPar);

// console.log(pares);

// console.log( arr.filter(num => num % 2 === 0) );

// map

// const dobrado = arr.map(num => num * 2);
// console.log(dobrado);

// reduce
let arr = [5, 6, 7, 8, -9, 10];

// const menor = arr.reduce((acc, elem) => {
//     if (elem < acc)
//         return elem;
//     else
//         return acc;    
// }, 100000);

// console.log(menor);

const menor = arr.reduce((acc, elem, index) => {
    if (index === 0)
        return elem;

    if (elem < acc)
        return elem;
    else
        return acc;    
});

console.log(menor);

const soma = arr.reduce((acc, elem) => acc + elem, 0);
console.log(soma);