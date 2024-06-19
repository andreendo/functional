const arr = [10, 9, 8, 7, 6, 5];

// filter
// const pares = arr.filter((elem) => { 
//     return elem % 2 == 0;
// });

const pares = arr.filter(elem => elem % 2 == 0);

// console.log(arr);
// console.log(pares);

// map - dobrar
const dobro = arr.map(elem => elem * 2);
// console.log(arr);
// console.log(dobro);

// reduce - achar o menor numero
const menorNum = arr.reduce((prev, elem) => {
    let menor = prev;
    if (elem < menor)
        menor = elem;

    return menor;
}, 1000000);

console.log(arr);
console.log(menorNum);

const soma = arr.reduce((acc, elem) => acc + elem, 0);
console.log(soma);