/**
 * Alg. de Eudoxo para raiz quadrada de a
 * passo 1: x0 ← a/2 
 * passo 2: x ← (x0 + a/x0)/2
 * passo 3: x0 ← x
 * passo 4: volte ao passo 2
 */
const R = require('ramda');

function* approximate(a) {
    let x0 = a / 2;
    while (true) {
        let x = (x0 + a / x0) / 2;
        yield x;
        x0 = x;
    }
}

const raiz = approximate(2300);

R.range(0, 10).forEach(_ => {
    const curr = raiz.next().value;
    console.log(`${curr} -> ${curr*curr}`);
});
