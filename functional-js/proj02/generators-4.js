const Lazy = require('lazy.js');
const { mathMod } = require('ramda');

function approx(a) {
    return function* () {
        let x0 = a / 2;
        while (true) {
            let x = (x0 + a / x0) / 2;
            yield x;
            x0 = x;
        }
    } 
}

const raizQuadrada = num => Lazy(approx(num))
                                .take(100)
                                .last();

const l = Lazy(approx(81)).take(100).last();
console.log(l);

console.log(raizQuadrada(121));