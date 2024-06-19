const R = require('ramda');

function isEven(number) {
    const n = R.clone(number);
    n.even = n.value % 2 == 0;
    return n;
}

function positive(number) {
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
}

const isOdd = (number) => {
    const n = R.clone(number);
    n.odd = n.value % 2 !== 0;
    return n;
}

const negative = (number) => {
    const n = R.clone(number);
    n.negative = n.value < 0;
    return n;
}

const isZero = (number) => {
    const n = R.clone(number);
    n.zero = n.value === 0;
    return n;
}

const isPrime = (number) => {
    const n = R.clone(number);

    n.prime = checkPrime(n.value);
    return n;
}

const checkPrime = (n) => {
    let isPrime = true;
    if (n < 1) {
        isPrime = false;
    }
    else {
        for (let i = 2; i <= n / 2; ++i) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

function mapToNumberObject(num) {
    return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

// Exercí­cio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()

// Exercí­cio 2: seguindo o modelo das 2 primeiras funções implemente as outras 4 funções

// Exercí­cio 3: refatore todas as funções para a forma usando arrow function (=>)

console.log( arr.map(mapToNumberObject) );

// Exercí­cio 4: use R.pipe para compor as funções: isEven, positive, isOdd, negative, 
    // isZero, e isPrime. Teste a funções composta com um funções objeto.

const pipedFunctions = R.pipe(isEven, positive, isOdd, negative, isZero, isPrime)
console.log(pipedFunctions({value: 7}))

// Exercí­cio 5: use a funções composta do Ex. 4 para transformar os funções em 'arr'

console.log( arr.map(mapToNumberObject).map(pipedFunctions) );